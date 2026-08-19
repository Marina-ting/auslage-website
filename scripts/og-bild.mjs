/**
 * Erzeugt das Vorschaubild für Link-Vorschauen: public/images/og-1200x630.png.
 *
 * KEIN Teil von `npm run build`. Einmal-Werkzeug, das hier liegt, damit das Bild
 * nachvollziehbar wieder entsteht, statt in einem Grafikprogramm zu verschwinden.
 * Aufruf aus dem Projektordner: `node scripts/og-bild.mjs`.
 *
 * Voraussetzung: `playwright-core` und ein Chromium. Beides ist bewusst NICHT in
 * package.json eingetragen — es für ein Bild, das sich alle paar Monate ändert,
 * in jede Installation zu ziehen, wäre unverhältnismäßig. Wer das Bild neu bauen
 * will, installiert die beiden vorher und wirft sie danach wieder hinaus.
 *
 * Das Logo wird NIE nachgebaut, sondern als fertige Datei aus branding/logo/png/
 * eingesetzt (Logo-Regel vom 11.08.2026). Hier ist es die Creme-Variante, weil
 * die Fläche Teal ist.
 *
 * Wer Maße oder Text ändert, ändert `ogImage` in src/content/site.js mit — dort
 * stehen Pfad, Breite, Höhe und der Alt-Text, die in den Kopf jeder Seite gehen.
 */
import { readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const logo = await readFile(
  // waas/branding/logo/png/ — eine Ebene über dem Projektordner.
  new URL("../../branding/logo/png/lockup-horizontal-creme-4x.png", import.meta.url),
);
const poppins500 = await readFile(
  new URL("../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2", import.meta.url),
);
const inter400 = await readFile(
  new URL("../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2", import.meta.url),
);

const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<style>
@font-face {
  font-family: "Poppins"; font-weight: 500; font-style: normal; font-display: block;
  src: url(data:font/woff2;base64,${poppins500.toString("base64")}) format("woff2");
}
@font-face {
  font-family: "Inter"; font-weight: 400; font-style: normal; font-display: block;
  src: url(data:font/woff2;base64,${inter400.toString("base64")}) format("woff2");
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; }

.karte {
  position: relative;
  width: 1200px;
  height: 630px;
  background: #2f5d50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: hidden;
}

/* Derselbe warme Lichtschein wie auf den Teal-Bändern der Seite, nur größer.
   Er sitzt oben rechts, damit die Mitte für Logo und Zeile frei bleibt. */
.karte::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(52rem 34rem at 84% 6%, rgba(217, 119, 63, 0.34), transparent 62%);
}

/* Schmaler Terrakotta-Streifen an der Unterkante: die Markise aus der
   Schaufenster-Illustration, auf eine Linie eingedampft. Terrakotta ist
   Schmuckfarbe (Branding, 17.08.) und trägt hier keine Aussage. */
.karte::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 10px;
  background: #d9773f;
}

.logo { position: relative; width: 520px; display: block; }

.zeile {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 46px;
  letter-spacing: -0.01em;
  color: #fbf6ee;
}

.ort {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 26px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f5c9a8;
}
</style></head><body>
<div class="karte">
  <img class="logo" src="data:image/png;base64,${logo.toString("base64")}" alt="">
  <div class="zeile">Website mieten statt kaufen</div>
  <div class="ort">Triestingtal · Niederösterreich</div>
</div>
</body></html>`;

// Zwischendatei im Temp-Ordner des Systems, nicht fest unter /tmp: unter
// Windows gibt es den nicht. Aus demselben Grund `pathToFileURL` statt eines
// zusammengebauten "file://"-Strings (siehe Prerender-Fehler vom 18.08.).
const huelle = join(tmpdir(), "auslage-og.html");
await writeFile(huelle, html, "utf8");

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL(huelle).href, { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: fileURLToPath(new URL("../public/images/og-1200x630.png", import.meta.url)) });
await browser.close();
console.log("geschrieben: public/images/og-1200x630.png");
