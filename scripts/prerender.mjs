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
import { fileURLToPath, pathToFileURL } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// `pathToFileURL` ist unter Windows Pflicht: `import()` nimmt dort keinen
// gewöhnlichen Pfad entgegen ("C:\..." liest Node als Adresse mit dem Schema
// "c:") und bricht mit ERR_UNSUPPORTED_ESM_URL_SCHEME ab. Unter Linux fällt
// das nicht auf — genau so ist der Fehler am 18.08. durch die Prüfung gerutscht.
const {
  render,
  routes,
  notFoundRoute,
  comingSoon,
  comingSoonMeta,
  siteUrl,
  faq,
} = await import(pathToFileURL(resolve(wurzel, "dist-ssr/entry-server.js")).href);

/** Zeichen, die in HTML eine eigene Bedeutung haben, unschädlich machen. */
function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Maße des Vorschaubildes, aus der Datei gelesen statt hingeschrieben.
 *
 * Warum überhaupt: `og:image` allein genügt vielen Diensten nicht. WhatsApp,
 * Facebook, LinkedIn und Signal holen das Bild sonst erst nach und zeigen beim
 * ersten Teilen einen leeren Kasten; mit Breite und Höhe im Kopf können sie den
 * Platz sofort reservieren.
 *
 * Warum gemessen: Ein hingeschriebenes Maß stimmt genau so lange, bis jemand das
 * Bild austauscht — und niemand merkt es, weil die Seite weiter baut. Gelesen
 * wird der IHDR-Block einer PNG-Datei: die Bytes 16 bis 24 tragen Breite und
 * Höhe, jeweils als 32-Bit-Zahl. Fehlt die Datei, bricht der Build ab. Das ist
 * Absicht: ein `og:image`, das ins Leere zeigt, ist schlimmer als kein Bild.
 */
async function vorschaubildMasse(pfadInPublic) {
  const datei = await readFile(resolve(wurzel, "public", pfadInPublic)).catch(() => {
    throw new Error(
      `Prerendering abgebrochen: public/${pfadInPublic} fehlt, wird aber als og:image ausgeliefert.`
    );
  });
  if (datei.subarray(1, 4).toString("latin1") !== "PNG") {
    throw new Error(
      `Prerendering abgebrochen: public/${pfadInPublic} ist keine PNG-Datei; die Maße lassen sich nicht lesen.`
    );
  }
  return { breite: datei.readUInt32BE(16), hoehe: datei.readUInt32BE(20) };
}

// 19.08.2026: von "images/og-image.png" (512 × 512) auf das neue Bild im
// Verhältnis 1,91:1 umgestellt. Das quadratische Bild bleibt in public/images/
// liegen — es taugt weiter für quadratische Zwecke, nur nicht für die Kachel.
// Das Bild entsteht mit `node scripts/og-bild.mjs`; Maße werden unten aus der
// Datei gelesen, nicht hingeschrieben.
const ogBildPfad = "images/og-1200x630.png";
const ogBild = await vorschaubildMasse(ogBildPfad);

/**
 * FAQPage-JSON-LD für /fragen — aus denselben Fragen gebaut, die die Seite zeigt.
 *
 * ── Was es NICHT mehr bringt (Susi, 19.08.2026, an Googles eigener Doku
 * nachgelesen) ──────────────────────────────────────────────────────────────
 * FAQ-Rich-Results, also die aufklappbaren Fragen direkt im Suchergebnis, sind
 * bei Google seit 07.05.2026 abgeschafft; die Unterstützung ist im Juni 2026
 * ausgelaufen. Dieser Block bringt in der Google-Suche also keine Position und
 * keine zusätzliche Zeile. Wer etwas anderes verspricht, verspricht zu viel.
 *
 * ── Warum er trotzdem drinsteht ────────────────────────────────────────────
 * Er ist die maschinenlesbare Fassung eines Textes, der ohnehin auf der Seite
 * steht: Frage, Antwort, und die feste Adresse jeder einzelnen Frage. Genau das
 * ist der erklärte Zweck von /fragen — zitierbar sein für Assistenten, die die
 * Seite lesen statt sie anzuzeigen. Kosten: 5,7 Kilobyte unkomprimiert auf
 * einer einzigen Seite (am 19.08.2026 nachgemessen, nicht geschätzt). Unbelegt
 * bleibt, wie viel einzelne Assistenten davon tatsächlich verwerten; das ist
 * eine Vermutung und kein Messwert.
 *
 * ── Die Bedingung ──────────────────────────────────────────────────────────
 * Ausgegeben wird der Block nur, wenn die Seite ihre Fragen auch wirklich
 * anzeigt. Hinter der Coming-Soon-Sperre steht dort die Platzhalterseite — ein
 * FAQPage-Schema auf einer Seite ohne sichtbare Fragen behauptet Inhalte, die
 * niemand sieht. Das verbieten Googles Richtlinien für strukturierte Daten
 * ausdrücklich, und es wäre auch schlicht unwahr.
 */
function faqSchema(route) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${route.pfad}`,
    inLanguage: "de-AT",
    mainEntity: faq.items.map((frage) => ({
      "@type": "Question",
      name: frage.q,
      // Die feste id aus site.js, damit auch maschinell nachvollziehbar ist,
      // worauf ein Verweis wie /fragen#mindestlaufzeit zeigt.
      url: `${siteUrl}${route.pfad}#${frage.id}`,
      acceptedAnswer: { "@type": "Answer", text: frage.a },
    })),
  };
}

/**
 * Service-JSON-LD für eine Ortsseite — das „areaServed pro Ortsseite“ aus dem
 * Task „Title-Tags, H1 und URLs ausrichten“ (Susi).
 *
 * ── Wie eine Seite dazu kommt ──────────────────────────────────────────────
 * Nicht über eine zweite Liste hier im Skript, sondern über die Route selbst.
 * Wer in `routes` (src/content/site.js) an einer Seite ein Feld `ort` ergänzt,
 * bekommt den Block automatisch:
 *
 *   {
 *     pfad: "/webdesign-berndorf",
 *     datei: "webdesign-berndorf.html",
 *     gesperrt: true,
 *     meta: pageMeta.webdesignBerndorf,
 *     ort: { name: "Berndorf", umland: ["Pottenstein", "Hernstein"] },
 *   }
 *
 * `umland` sind die Gemeinden ohne eigene Seite, die diese Seite mitbedient
 * (Zuordnung von Marina am 18.08.2026 bestätigt, siehe Gedächtnis
 * „Einzugsgebiet und Ortsnennungen“). Fehlt das Feld, entsteht kein Block —
 * eine Seite ohne Ortsbezug bekommt kein Ortsschema untergeschoben.
 *
 * ── Was drinsteht und was bewusst nicht ────────────────────────────────────
 * `provider` verweist per `@id` auf den Betrieb aus index.html, statt Anschrift
 * und Telefonnummer ein zweites Mal hinzuschreiben. Zwei Kopien derselben
 * Angabe laufen irgendwann auseinander; ein Verweis nicht.
 * `areaServed` nennt ausschließlich Gemeindenamen. **Kein Bezirk** — und zwar
 * nirgends mehr: seit Marinas Nadelöhr-Entscheidung vom 20.08.2026 (Option B)
 * ist der Bezirk Baden auch aus dem `areaServed` des Betriebs in index.html
 * verschwunden, dort steht nur noch das Triestingtal. Ein Bezirksname braucht
 * ab jetzt überall eine neue Entscheidung von Marina.
 *
 * Rich Results bringt das keine. Es macht maschinenlesbar, was die Seite
 * ohnehin sagt: welche Leistung, für welchen Ort, von wem.
 */
function ortSchema(route) {
  const { name, umland = [] } = route.ort;
  if (!name) {
    throw new Error(
      `Prerendering abgebrochen: die Route ${route.pfad} hat ein Feld \`ort\` ohne \`name\`.`
    );
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${route.pfad}#leistung`,
    name: `Webdesign ${name}`,
    serviceType: "Webdesign",
    url: `${siteUrl}${route.pfad}`,
    inLanguage: "de-AT",
    provider: { "@id": `${siteUrl}/#auslage` },
    areaServed: [name, ...umland].map((gemeinde) => ({
      "@type": "City",
      name: gemeinde,
    })),
  };
}

/**
 * Welche Seite welches Schema bekommt.
 *
 * Das LocalBusiness-Schema steht in index.html und liegt damit auf jeder Seite;
 * hier stehen nur die Blöcke, die zu genau einer Seite gehören. Ortsseiten
 * stehen nicht in dieser Liste — sie melden sich über ihr Route-Feld `ort`,
 * damit hier keine zweite Seitenliste entsteht, die stumm veralten kann.
 */
const schemaProSeite = { "/fragen": faqSchema };

/** Das eine Schema dieser Seite, oder nichts. */
function seitenSchema(route) {
  const nachPfad = schemaProSeite[route.pfad];
  if (nachPfad) return nachPfad(route);
  if (route.ort) return ortSchema(route);
  return null;
}

/**
 * JSON-LD als `<script>`-Zeile.
 *
 * `<` wird escaped: stünde in einem Antworttext je die Zeichenfolge `</script>`,
 * würde der Browser das Skript an dieser Stelle beenden und den Rest als Text
 * anzeigen. Heute kommt sie nirgends vor — die Absicherung kostet nichts und
 * hält auch dann, wenn später jemand einen Antworttext ergänzt.
 */
/**
 * Glossar-Marker aus strukturierten Daten herausnehmen.
 *
 * Die Sichttexte in site.js dürfen die Schreibweise [[schlüssel|Wort]] tragen
 * (Inline-Glossar, src/lib/glossar.jsx). Auf der Seite löst React sie auf, der
 * Besucher liest nur das Wort. In dieses Skript kommen dieselben Texte aber
 * roh: `faqSchema` baut das FAQPage-JSON-LD aus denselben Antworten, die die
 * Seite zeigt, und `ortSchema` aus den Feldern der Route. Ohne diesen Schritt
 * steht der Marker unaufgelöst in den maschinenlesbaren Daten — und die müssen
 * dasselbe sagen wie der sichtbare Text, sonst widersprechen sie Googles
 * Richtlinien für strukturierte Daten.
 *
 * Genau das ist am 21.08.2026 im gebauten dist/fragen.html gestanden. Gesehen
 * hat es nur, wer nach dem Einbau wirklich gebaut und das Ergebnis gelesen hat.
 * Ein Marker im Sichttext ist harmlos, derselbe Marker in maschinenlesbaren
 * Daten nicht.
 *
 * Ersetzt wird durch das sichtbare Wort und nicht durch nichts — dasselbe, was
 * `ohneGlossar` in src/lib/glossar.jsx tut. Der Ausdruck steht hier ein zweites
 * Mal, weil dieses Skript kein JSX laden kann; damit die beiden Fassungen nicht
 * stumm auseinanderlaufen, bricht `schemaBlock` ab, wenn danach noch eine
 * offene Klammer übrig ist.
 */
const GLOSSAR_MARKER = /\[\[([a-zA-Z0-9]+)\|([^\]|]+)\]\]/g;

function ohneMarker(text) {
  return text.replaceAll(GLOSSAR_MARKER, "$2");
}

function schemaBlock(route) {
  const schema = seitenSchema(route);
  if (!schema) return null;
  if (comingSoon && route.gesperrt) return null;

  const roh = JSON.stringify(schema, null, 2).replaceAll("<", "\\u003c");
  const json = ohneMarker(roh);
  if (json !== roh) {
    console.log(
      `  Hinweis: Glossar-Marker im JSON-LD von ${route.pfad} auf das sichtbare Wort gebracht.`,
    );
  }

  // Drift-Sicherung: steht danach noch eine [[-Klammer im JSON, hat sich die
  // Schreibweise in src/lib/glossar.jsx geändert und GLOSSAR_MARKER oben passt
  // nicht mehr. Laut abbrechen ist besser als stumm falsche strukturierte
  // Daten ausliefern.
  if (json.includes("[[")) {
    throw new Error(
      `Prerendering abgebrochen: Im JSON-LD von ${route.pfad} steht noch ein Glossar-Marker. ` +
        "Die Schreibweise in src/lib/glossar.jsx passt nicht mehr zum Ausdruck " +
        "GLOSSAR_MARKER in scripts/prerender.mjs — beide gehören zusammen.",
    );
  }

  return `<script type="application/ld+json">\n${json}\n</script>`;
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
  //
  // Danach bleiben die Seiten mit `ausIndex` weiterhin draußen: der AVV und die
  // 404-Seite. Dort steht `follow` statt `nofollow` — die Seite selbst gehört
  // nicht in die Ergebnisliste, ihren Links darf ein Crawler trotzdem folgen.
  if (comingSoon) {
    zeilen.push('<meta name="robots" content="noindex,nofollow">');
  } else if (route.ausIndex) {
    zeilen.push('<meta name="robots" content="noindex,follow">');
  }
  zeilen.push(`<title>${esc(meta.title)}</title>`);
  zeilen.push(`<meta name="description" content="${esc(meta.description)}">`);
  zeilen.push(`<link rel="canonical" href="${adresse}">`);
  zeilen.push('<meta property="og:type" content="website">');
  zeilen.push('<meta property="og:site_name" content="auslage">');
  zeilen.push(`<meta property="og:url" content="${adresse}">`);
  zeilen.push(`<meta property="og:title" content="${esc(meta.title)}">`);
  zeilen.push(`<meta property="og:description" content="${esc(meta.description)}">`);
  // Absolute Adresse: relative Bildpfade zeigen in Link-Vorschauen nichts an.
  zeilen.push(`<meta property="og:image" content="${siteUrl}/${ogBildPfad}">`);
  zeilen.push(`<meta property="og:image:width" content="${ogBild.breite}">`);
  zeilen.push(`<meta property="og:image:height" content="${ogBild.hoehe}">`);
  zeilen.push(
    '<meta property="og:image:alt" content="auslage — Website mieten statt kaufen. Triestingtal, Niederösterreich.">'
  );
  zeilen.push('<meta property="og:locale" content="de_AT">');
  // `summary_large_image` seit 19.08.2026: die große Kachel statt des kleinen
  // Bildchens am Zeilenrand. Die Bedingung dafür ist jetzt erfüllt — das
  // Vorschaubild liegt im Verhältnis 1,91:1 vor. Die beiden Zeilen gehören
  // zusammen: mit einem quadratischen Bild würde das breite Format links und
  // rechts beschneiden oder mit Balken auffüllen. Wer das Bild je gegen ein
  // quadratisches tauscht, stellt hier auf `summary` zurück.
  zeilen.push('<meta name="twitter:card" content="summary_large_image">');
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

// Die 404-Seite läuft mit durch, obwohl sie in `routes` nichts verloren hat:
// sie hat keine eigene Adresse, sondern hängt in App.jsx an `path="*"`.
let schemaSeiten = 0;

for (const route of [...routes, notFoundRoute]) {
  const inhalt = render(route.pfad);

  // Das seitenspezifische JSON-LD hängt am Meta-Block, damit es beim nächsten
  // Bauen mit ihm zusammen ersetzt wird und keine zweite Fundstelle entsteht.
  const schema = schemaBlock(route);
  if (schema) schemaSeiten += 1;
  const kopf = schema ? `${metaBlock(route)}\n${schema}` : metaBlock(route);

  const seite = huelle
    .replace(new RegExp(`${ANFANG}[\\s\\S]*?${ENDE}`), `${ANFANG}\n${kopf}\n${ENDE}`)
    .replace('<div id="root"></div>', `<div id="root">${inhalt}</div>`);

  const ziel = resolve(wurzel, "dist", route.datei);
  await mkdir(dirname(ziel), { recursive: true });
  await writeFile(ziel, seite, "utf8");
}

/**
 * robots.txt — wird bei jedem Build neu geschrieben, damit sie nicht als tote
 * Datei in public/ altert.
 *
 * Bewusst KEIN `Disallow: /` während der Coming-Soon-Phase, auch wenn es
 * naheliegt: Wer das Crawlen sperrt, verhindert, dass Google das `noindex` im
 * Kopf überhaupt liest — die Adresse kann dann trotzdem ohne Inhalt im Index
 * landen. Das `noindex` ist das schärfere Werkzeug und braucht Zugang, um zu
 * wirken. Vorgabe von Susi, 19.08.2026.
 *
 * Die `Sitemap:`-Zeile hängt am selben Schalter wie die Sitemap selbst.
 */
const robotsZeilen = ["User-agent: *", "Allow: /"];
if (!comingSoon) robotsZeilen.push("", `Sitemap: ${siteUrl}/sitemap.xml`);
await writeFile(
  resolve(wurzel, "dist/robots.txt"),
  `${robotsZeilen.join("\n")}\n`,
  "utf8"
);

/**
 * sitemap.xml — nur bei `comingSoon === false`.
 *
 * Solange die Seiten `noindex` tragen, wäre eine Sitemap ein Widerspruch in
 * sich: sie lädt Google zu Seiten ein, die Google nicht behalten darf. Derselbe
 * Schalter, der den Platzhalter-Titel und das `noindex` fallen lässt, schaltet
 * sie ein.
 *
 * Die Liste ist dieselbe wie fürs Prerendering, gefiltert auf `ausIndex`. Zwei
 * Listen, die auseinanderlaufen können, sollen hier nicht entstehen.
 *
 * `<loc>` genügt. `<changefreq>` und `<priority>` wertet Google nicht aus.
 * `<lastmod>` bliebe ein Build-Zeitstempel — eine Angabe, die bei jedem Deploy
 * stimmt und trotzdem nichts aussagt.
 */
const imIndex = routes.filter((route) => !route.ausIndex);
let sitemapMeldung = "Sitemap: nicht erzeugt (Coming-Soon).";

if (!comingSoon) {
  const eintraege = imIndex
    .map((route) => `  <url><loc>${siteUrl}${route.pfad}</loc></url>`)
    .join("\n");
  await writeFile(
    resolve(wurzel, "dist/sitemap.xml"),
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      eintraege,
      "</urlset>",
      "",
    ].join("\n"),
    "utf8"
  );
  sitemapMeldung = `Sitemap: ${imIndex.length} Adressen.`;
}

const zustand = comingSoon
  ? "Coming-Soon steht auf true: gesperrte Seiten tragen den Platzhalter-Titel, alle Seiten robots noindex."
  : "Coming-Soon steht auf false: jede Seite trägt ihren echten Titel, keine robots-Sperre.";

// Beim Bauen mitzählen statt hinterher glauben: Steht hier eine 0, wo eine 1
// stehen müsste, ist das seitenspezifische Schema stumm ausgefallen.
const schemaMeldung =
  schemaSeiten === 0
    ? "Seiten-Schema: keines ausgegeben (hinter der Coming-Soon-Sperre)."
    : `Seiten-Schema: auf ${schemaSeiten} Seite(n) ausgegeben.`;

console.log(
  `\nPrerendering: ${routes.length} Seiten + 404-Seite geschrieben. ${zustand} ${sitemapMeldung} ${schemaMeldung} Vorschaubild: ${ogBild.breite} × ${ogBild.hoehe}.\n`
);
