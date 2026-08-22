/**
 * Exportiert die Schaufenster-Illustration als Dateien nach
 * waas/branding/schaufenster/ — für alles, wo die Grafik gebraucht wird und
 * kein Browser läuft: WhatsApp, Drucksorten, Social, Präsentationen.
 *
 * KEIN Teil von `npm run build`. Einmal-Werkzeug wie scripts/og-bild.mjs, das
 * hier liegt, damit die Bilder nachvollziehbar wieder entstehen, statt in einem
 * Grafikprogramm zu verschwinden. Aufruf aus dem Projektordner:
 * `node scripts/schaufenster-export.mjs`.
 *
 * DER PUNKT DES SKRIPTS: Die Grafik wird NICHT abgemalt und nicht aus der JSX
 * herausgeschnitten, sondern die echte Komponente src/components/Shopfront.jsx
 * wird gerendert (Vite lädt sie, React schreibt daraus SVG). Ändert jemand die
 * Grafik im Code, liefert dieser Lauf ohne Zutun die neuen Dateien. Ein
 * Export von Hand würde ab der ersten Code-Änderung stillschweigend veralten —
 * genau das soll hier nicht passieren.
 *
 * WAS DER EXPORT NICHT KANN: die Bewegung. Lampe, scrollende Website,
 * wandernde Spiegelung stecken im CSS (.shopfront-Regeln in sections.css), nicht
 * im Markup. Die Dateien zeigen deshalb exakt den Ruhezustand — also das, was
 * jemand mit "Bewegung reduzieren" auf der Seite sieht. Das ist gewollt und
 * kein Fehler; wer ein bewegtes Bild braucht, braucht einen anderen Weg.
 *
 * Das Logo wird NIE nachgebaut, sondern als fertige Datei aus branding/logo/png/
 * eingesetzt (Logo-Regel vom 11.08.2026). Hier die Creme-Variante, weil die
 * Fläche Teal ist. Die Zeile kommt aus `business.tagline` in site.js — nicht
 * hier hineinschreiben, sonst stehen zwei Wahrheiten im Haus.
 *
 * Voraussetzung: `playwright-core` und ein Chromium. Beides ist bewusst NICHT in
 * package.json eingetragen — dieselbe Abwägung wie bei og-bild.mjs. Wer die
 * Bilder neu baut, installiert die beiden vorher und wirft sie danach wieder
 * hinaus. Der Chromium-Pfad steht unten als Standard für die Claude-Sitzung und
 * lässt sich mit AUSLAGE_CHROMIUM überschreiben, wenn das Skript woanders läuft.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { chromium } from "playwright-core";

// ── Maße an einer Stelle ───────────────────────────────────────────────────
// PNG_BREITE: 4× die Grafik (640 × 580) — reicht für Druck und für jedes
// Zuschneiden, das später jemand vorhat.
// COVER: das WhatsApp-Business-Titelbild, 1640 × 856 (Seitenverhältnis 1,91:1).
// COVER_AB_Y: wo das Band durch die Szene gelegt wird, in Koordinaten des
// SVG (viewBox 0 0 640 580). 178 setzt die Oberkante knapp über die Markise
// und die Unterkante auf den Gehsteig. Wer den Ausschnitt verschiebt, ändert
// nur diese Zahl.
const PNG_BREITE = 2560;
const COVER = { breite: 1640, hoehe: 856 };
const COVER_AB_Y = 178;

const ZIEL = new URL("../../branding/schaufenster/", import.meta.url);
const CHROMIUM = process.env.AUSLAGE_CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

// ── 1. Die Komponente zu SVG rendern ───────────────────────────────────────
// Vite im Middleware-Modus, nur um die JSX zu laden — kein Server, kein Port.
// `noDiscovery` schaltet die Abhängigkeits-Suche ab: sie ist nur für den
// Browser-Betrieb da, und ohne sie bricht kein halb gestarteter esbuild-Lauf
// beim Schließen mit "The build was canceled" ab.
const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "silent",
  optimizeDeps: { noDiscovery: true, include: [] },
});
const { default: Shopfront } = await vite.ssrLoadModule("/src/components/Shopfront.jsx");
const { business } = await vite.ssrLoadModule("/src/content/site.js");
let svg = renderToStaticMarkup(createElement(Shopfront));
await vite.close();

// React schreibt das SVG ohne Namensraum und ohne feste Maße — beides braucht
// jede Datei, die außerhalb einer HTML-Seite geöffnet wird.
svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="580"');

await mkdir(ZIEL, { recursive: true });
await writeFile(new URL("auslage-schaufenster.svg", ZIEL), svg, "utf8");

// ── 2. Die drei PNG ────────────────────────────────────────────────────────
const logo = await readFile(new URL("../../branding/logo/png/lockup-horizontal-creme-4x.png", import.meta.url));
const poppins300 = await readFile(
  new URL("../node_modules/@fontsource/poppins/files/poppins-latin-300-normal.woff2", import.meta.url),
);

// Höhe der Grafik bei voller Cover-Breite: daraus ergibt sich, wie weit das
// Band nach oben geschoben werden muss.
const skala = COVER.breite / 640;
const versatz = Math.round(COVER_AB_Y * skala);

const kopf = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><style>
@font-face {
  font-family: "Poppins"; font-weight: 300; font-style: normal; font-display: block;
  src: url(data:font/woff2;base64,${poppins300.toString("base64")}) format("woff2");
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: transparent; }
</style></head><body>`;

const seiten = [
  {
    datei: "auslage-schaufenster-2560.png",
    breite: PNG_BREITE,
    hoehe: Math.round((PNG_BREITE / 640) * 580),
    durchsichtig: true, // die abgerundeten Ecken bleiben frei
    koerper: `<div style="width:640px;height:580px">${svg}</div>`,
    skalierung: PNG_BREITE / 640,
  },
  {
    // Reiner Bildausschnitt: ein Band quer durch die Szene, kein Text.
    datei: "auslage-schaufenster-wa-cover-ausschnitt.png",
    breite: COVER.breite,
    hoehe: COVER.hoehe,
    durchsichtig: false,
    skalierung: 1,
    koerper: `<div style="width:${COVER.breite}px;height:${COVER.hoehe}px;overflow:hidden">
      <div style="margin-top:-${versatz}px">${svg.replace('width="640" height="580"', `width="${COVER.breite}" style="display:block"`)}</div>
    </div>`,
  },
  {
    // Mit Logo und Zeile: das Titelbild, das für sich allein steht.
    datei: "auslage-schaufenster-wa-cover-marke.png",
    breite: COVER.breite,
    hoehe: COVER.hoehe,
    durchsichtig: false,
    skalierung: 1,
    koerper: `<div style="width:${COVER.breite}px;height:${COVER.hoehe}px;background:#234636;display:flex;align-items:center;gap:60px;padding:0 100px">
      <div style="flex:0 0 600px">
        <img src="data:image/png;base64,${logo.toString("base64")}" alt="" style="width:340px;display:block;margin-bottom:38px">
        <div style="font-family:Poppins,sans-serif;font-weight:300;font-size:44px;letter-spacing:.01em;color:#fbf6ee;opacity:.9">${business.tagline}</div>
      </div>
      <div style="flex:1;display:flex;justify-content:flex-end">
        <div style="width:672px;height:609px;border-radius:26px;overflow:hidden;box-shadow:0 26px 56px rgba(0,0,0,.34)">${svg.replace('width="640" height="580"', 'width="672" height="609" style="display:block"')}</div>
      </div>
    </div>`,
  },
];

const browser = await chromium.launch({ executablePath: CHROMIUM });

for (const seite of seiten) {
  // Zwischendatei im Temp-Ordner des Systems, nicht fest unter /tmp: unter
  // Windows gibt es den nicht. Aus demselben Grund `pathToFileURL` statt eines
  // zusammengebauten "file://"-Strings (siehe Prerender-Fehler vom 18.08.).
  const huelle = join(tmpdir(), `auslage-schaufenster-${seite.datei}.html`);
  await writeFile(huelle, `${kopf}${seite.koerper}</body></html>`, "utf8");

  const page = await browser.newPage({
    viewport: {
      width: Math.round(seite.breite / seite.skalierung),
      height: Math.round(seite.hoehe / seite.skalierung),
    },
    deviceScaleFactor: seite.skalierung,
  });
  await page.goto(pathToFileURL(huelle).href, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.screenshot({
    path: fileURLToPath(new URL(seite.datei, ZIEL)),
    omitBackground: seite.durchsichtig,
  });
  await page.close();
  console.log(`geschrieben: branding/schaufenster/${seite.datei}  (${seite.breite} × ${seite.hoehe})`);
}

await browser.close();
console.log("geschrieben: branding/schaufenster/auslage-schaufenster.svg  (640 × 580, Vektor)");
