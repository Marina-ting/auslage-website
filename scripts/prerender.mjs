/**
 * Prerendering — macht aus der Single-Page-App fertige HTML-Dateien.
 *
 * Läuft automatisch am Ende von `npm run build`. Von Hand aufrufen muss man
 * es nie.
 *
 * ── Warum es das gibt ───────────────────────────────────────────────────────
 * Die Seite ist eine Single-Page-App: ausgeliefert wird eine einzige, fast
 * leere index.html, den Inhalt baut JavaScript im Browser zusammen. Wer kein
 * JavaScript ausführt, bekommt darum auf JEDER Unterseite den Titel und die
 * Beschreibung der Startseite zu sehen — und keinen Text. Das betrifft die
 * Link-Vorschauen von WhatsApp, Facebook, LinkedIn und Signal, einfachere
 * Crawler und die meisten KI-Assistenten. Befund von Susi, 17.08.2026.
 *
 * ── Was es tut ──────────────────────────────────────────────────────────────
 * Für jede Seite aus `routes` in src/content/site.js:
 *   1. die Seite einmal fertig rendern (ohne Browser, mit React auf Node),
 *   2. den Meta-Block der Hülle durch die Werte dieser Seite ersetzen,
 *   3. das Ganze als eigene Datei in dist/ ablegen — z. B. dist/preise.html.
 *
 * Cloudflare liefert dann bei einem Aufruf von /preise diese Datei aus, weil
 * eine passende Datei Vorrang vor dem Single-Page-App-Rückfall hat (geprüft
 * 18.08.2026 an der Cloudflare-Doku "html_handling", Standard
 * `auto-trailing-slash`: eine Einzeldatei preise.html wird ohne Umleitung mit
 * Status 200 ausgeliefert).
 *
 * Im Browser ändert sich nichts: React baut die Seite beim Laden wie bisher
 * neu auf. Das vorgerenderte HTML ist für die Maschinen da, die das nicht tun.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const {
  render,
  routes,
  comingSoon,
  comingSoonMeta,
  siteUrl,
} = await import(resolve(wurzel, "dist-ssr/entry-server.js"));

/** Zeichen, die in HTML eine eigene Bedeutung haben, unschädlich machen. */
function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Sicherung gegen auseinanderlaufende Listen: Jede Route in App.jsx muss auch
 * in `routes` stehen. Fehlt eine, bricht der Build hier ab — sonst ginge die
 * Seite still ohne eigenen Titel und ohne Text live, und niemand würde es
 * merken, bis eine Link-Vorschau falsch aussieht.
 */
async function pfadeAbgleichen() {
  const appQuelle = await readFile(resolve(wurzel, "src/App.jsx"), "utf8");
  const inApp = [...appQuelle.matchAll(/path="([^"]+)"/g)]
    .map((treffer) => treffer[1])
    .filter((pfad) => pfad !== "*");
  const inListe = routes.map((route) => route.pfad);

  const fehlen = inApp.filter((pfad) => !inListe.includes(pfad));
  const zuviel = inListe.filter((pfad) => !inApp.includes(pfad));

  if (fehlen.length || zuviel.length) {
    const meldung = [
      "Prerendering abgebrochen: App.jsx und die Liste `routes` in src/content/site.js stimmen nicht überein.",
      fehlen.length ? `  In App.jsx, aber nicht in routes: ${fehlen.join(", ")}` : "",
      zuviel.length ? `  In routes, aber nicht in App.jsx: ${zuviel.join(", ")}` : "",
      "  Beide Listen angleichen, dann erneut bauen.",
    ]
      .filter(Boolean)
      .join("\n");
    throw new Error(meldung);
  }
}

/** Baut den Kopfbereich einer Seite: Titel, Beschreibung, Vorschau-Tags. */
function metaBlock(route) {
  // Seiten hinter der Coming-Soon-Sperre zeigen die Platzhalterseite — dann
  // gehört auch deren Titel ins HTML, nicht der Verkaufstitel. Sonst stünden
  // in der Link-Vorschau Preise, die auf der Seite gar nicht zu sehen sind.
  const zeigtPlatzhalter = comingSoon && route.gesperrt;
  const meta = zeigtPlatzhalter ? comingSoonMeta : route.meta;
  const adresse = `${siteUrl}${route.pfad}`;

  const zeilen = [];
  // Solange irgendetwas an der Seite Platzhalter ist, bleibt die ganze Seite
  // aus dem Index — Rechtstexte eingeschlossen. Beim Go-Live fällt die Zeile
  // von selbst weg, weil `comingSoon` dann false ist.
  if (comingSoon) zeilen.push('<meta name="robots" content="noindex,nofollow">');
  zeilen.push(`<title>${esc(meta.title)}</title>`);
  zeilen.push(`<meta name="description" content="${esc(meta.description)}">`);
  zeilen.push(`<link rel="canonical" href="${adresse}">`);
  zeilen.push('<meta property="og:type" content="website">');
  zeilen.push('<meta property="og:site_name" content="auslage">');
  zeilen.push(`<meta property="og:url" content="${adresse}">`);
  zeilen.push(`<meta property="og:title" content="${esc(meta.title)}">`);
  zeilen.push(`<meta property="og:description" content="${esc(meta.description)}">`);
  // Absolute Adresse: relative Bildpfade zeigen in Link-Vorschauen nichts an.
  zeilen.push(`<meta property="og:image" content="${siteUrl}/images/og-image.png">`);
  zeilen.push('<meta property="og:locale" content="de_AT">');
  zeilen.push('<meta name="twitter:card" content="summary">');
  return zeilen.join("\n");
}

const ANFANG = "<!-- PRERENDER:META -->";
const ENDE = "<!-- /PRERENDER:META -->";

const huelle = await readFile(resolve(wurzel, "dist/index.html"), "utf8");

if (!huelle.includes(ANFANG) || !huelle.includes(ENDE)) {
  throw new Error(
    `Prerendering abgebrochen: In index.html fehlen die Marker ${ANFANG} … ${ENDE}. ` +
      "Ohne sie weiß das Skript nicht, welchen Teil des Kopfbereichs es ersetzen darf."
  );
}
if (!huelle.includes('<div id="root"></div>')) {
  throw new Error(
    'Prerendering abgebrochen: In index.html fehlt <div id="root"></div> in genau dieser Schreibweise.'
  );
}

await pfadeAbgleichen();

for (const route of routes) {
  const inhalt = render(route.pfad);

  const seite = huelle
    .replace(
      new RegExp(`${ANFANG}[\\s\\S]*?${ENDE}`),
      `${ANFANG}\n${metaBlock(route)}\n${ENDE}`
    )
    .replace('<div id="root"></div>', `<div id="root">${inhalt}</div>`);

  const ziel = resolve(wurzel, "dist", route.datei);
  await mkdir(dirname(ziel), { recursive: true });
  await writeFile(ziel, seite, "utf8");
}

const zustand = comingSoon
  ? "Coming-Soon steht auf true: gesperrte Seiten tragen den Platzhalter-Titel, alle Seiten robots noindex."
  : "Coming-Soon steht auf false: jede Seite trägt ihren echten Titel, keine robots-Sperre.";

console.log(`\nPrerendering: ${routes.length} Seiten geschrieben. ${zustand}\n`);
