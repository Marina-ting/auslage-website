/**
 * Branding-Sync — kopiert das Logo aus dem Master in den Website-Ordner.
 *
 * Läuft automatisch als ERSTER Schritt von `npm run build` (und damit auch
 * von `npm run deploy`). Von Hand aufrufen muss man es nie.
 *
 * ── Warum es das gibt ───────────────────────────────────────────────────────
 * Das Logo lag in mehreren Kopien nebeneinander: der Master in
 * waas/branding/logo/, ein Inline-Block im Auswertungs-Standard § 6, früher
 * zusätzlich ein Anhang im Dashboard-Generator. Wer eine änderte, musste an
 * die anderen denken — und hat es nicht immer getan. Seit 21.08.2026 werden
 * die Dateien unter auslage.io/branding/ ausgeliefert, damit Mailsignatur,
 * Auswertungen und alles Weitere auf EINE Adresse zeigen können.
 *
 * Damit dabei keine neue Handkopie entsteht, holt dieses Skript die Dateien
 * bei jedem Bauen frisch aus dem Master. Wer das Logo dort ändert, deployt
 * einmal — und die Adresse liefert das neue Logo aus. Nachziehen von Hand
 * entfällt. Marinas Entscheidung vom 21.08.2026.
 *
 * ── Was es tut ──────────────────────────────────────────────────────────────
 *   waas/branding/logo/svg/*.svg      →  public/branding/svg/
 *   waas/branding/logo/png/<Liste>    →  public/branding/png/
 *
 * Die PNG-Liste steht unten ausdrücklich als Liste da. Sie ist der
 * veröffentlichte Bestand: was hier steht, hat eine feste Adresse im Netz und
 * wird anderswo verlinkt. Eine Zeile herausnehmen heißt, eine Adresse ins
 * Leere laufen zu lassen — dabei erst nachsehen, wer sie benutzt.
 *
 * Gelöscht wird nichts. Liegt im Zielordner eine Datei, die es im Master
 * nicht (mehr) gibt, sagt das Skript es und lässt sie liegen.
 */

import { readdir, mkdir, copyFile, readFile, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const master = resolve(wurzel, "..", "branding", "logo");
const ziel = resolve(wurzel, "public", "branding");

/**
 * Der veröffentlichte PNG-Bestand. PNG deshalb, weil die Verbraucher, die
 * kein SVG können, genau diese Formate brauchen — E-Mail-Programme allen
 * voran: Outlook und Gmail zeigen kein SVG an.
 *
 * "teal"  = das Logo für HELLE Flächen (Teal #2F5D50).
 * "creme" = das Logo für DUNKLE Flächen (Creme #FBF6EE).
 * "-2x"   = doppelte Auflösung für Retina-Bildschirme; im HTML halb so groß
 *           einbinden (width/height setzen), sonst ist es doppelt so groß.
 */
const pngBestand = [
  "lockup-horizontal-teal.png",
  "lockup-horizontal-teal-2x.png",
  "lockup-horizontal-creme.png",
  "lockup-horizontal-creme-2x.png",
  "lockup-stacked-teal.png",
  "lockup-stacked-teal-2x.png",
  "lockup-stacked-creme.png",
  "lockup-stacked-creme-2x.png",
  "icon-teal-512.png",
  "icon-creme-512.png",
];

async function existiert(pfad) {
  try {
    await stat(pfad);
    return true;
  } catch {
    return false;
  }
}

async function gleich(a, b) {
  // Byte-Vergleich statt Zeitstempel: Zeitstempel ändern sich beim Kopieren
  // ohnehin, und über eine Netzfreigabe sind sie nicht verlässlich.
  try {
    const [x, y] = await Promise.all([readFile(a), readFile(b)]);
    return x.equals(y);
  } catch {
    return false;
  }
}

/** Kopiert eine Liste von Dateien und meldet, was sich dabei geändert hat. */
async function kopiere(vonOrdner, nachOrdner, dateien) {
  await mkdir(nachOrdner, { recursive: true });
  const neu = [];
  const geaendert = [];
  for (const name of dateien) {
    const quelle = resolve(vonOrdner, name);
    const kopie = resolve(nachOrdner, name);
    if (!(await existiert(quelle))) {
      throw new Error(
        `Branding-Sync: ${name} steht in der Liste, liegt aber nicht im ` +
          `Master (${vonOrdner}). Entweder ist die Datei umbenannt worden ` +
          `oder die Liste in scripts/branding-sync.mjs ist veraltet.`
      );
    }
    const lagSchon = await existiert(kopie);
    if (lagSchon && (await gleich(quelle, kopie))) continue;
    await copyFile(quelle, kopie);
    (lagSchon ? geaendert : neu).push(name);
  }
  return { neu, geaendert };
}

/** Dateien im Zielordner, die der Master nicht kennt — nur melden, nie löschen. */
async function fremdlinge(nachOrdner, bekannt) {
  if (!(await existiert(nachOrdner))) return [];
  const da = await readdir(nachOrdner);
  return da.filter((n) => !bekannt.includes(n));
}

if (!(await existiert(master))) {
  // Der Master liegt außerhalb dieses Repos (eine Ebene höher im waas-Ordner).
  // Auf einem fremden Rechner oder in einem alleinstehenden Klon fehlt er
  // deshalb. Das ist kein Grund, den Build abzubrechen — SOLANGE schon
  // Dateien im Zielordner liegen, die ausgeliefert werden können.
  const vorhanden = (await existiert(ziel)) ? await readdir(ziel) : [];
  if (vorhanden.length === 0) {
    throw new Error(
      `Branding-Sync: Der Logo-Master fehlt (erwartet unter ${master}) und ` +
        `public/branding/ ist leer. Ein Deploy würde auslage.io/branding/… ` +
        `ins Leere laufen lassen — dort hängen unter anderem die ` +
        `Mailsignatur und die Auswertungen dran. Build abgebrochen.`
    );
  }
  console.log(
    `\nBranding-Sync: Master nicht gefunden (${master}). ` +
      `Es wird ausgeliefert, was in public/branding/ liegt — ungeprüft, ob ` +
      `das der aktuelle Stand ist.\n`
  );
} else {
  const svgNamen = (await readdir(resolve(master, "svg"))).filter((n) =>
    n.endsWith(".svg")
  );
  const svg = await kopiere(
    resolve(master, "svg"),
    resolve(ziel, "svg"),
    svgNamen
  );
  const png = await kopiere(
    resolve(master, "png"),
    resolve(ziel, "png"),
    pngBestand
  );

  const uebrig = [
    ...(await fremdlinge(resolve(ziel, "svg"), svgNamen)).map((n) => `svg/${n}`),
    ...(await fremdlinge(resolve(ziel, "png"), pngBestand)).map((n) => `png/${n}`),
  ];

  const teile = [
    `Branding-Sync: ${svgNamen.length} SVG + ${pngBestand.length} PNG aus dem Master.`,
  ];
  const bewegt = [...svg.neu, ...svg.geaendert, ...png.neu, ...png.geaendert];
  teile.push(
    bewegt.length === 0
      ? "Nichts geändert."
      : `Aufgefrischt: ${bewegt.join(", ")}.`
  );
  if (uebrig.length > 0) {
    teile.push(
      `Im Ordner liegt außerdem, was der Master nicht kennt: ${uebrig.join(", ")} ` +
        `— liegen gelassen, nicht gelöscht.`
    );
  }
  console.log(`\n${teile.join(" ")}\n`);
}
