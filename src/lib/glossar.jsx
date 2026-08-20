import { useId, useState } from "react";

import { glossar } from "../content/site";

/**
 * Inline-Glossar: ein Fachwort im Fließtext, das seine Erklärung aufklappt.
 *
 * ── Warum es diese Datei gibt ────────────────────────────────────────────────
 * Die Sichttexte in `site.js` sind einfache Zeichenketten, die die Komponenten
 * als Ganzes ausgeben (`{text}`). Ein Marker mitten im Satz ist aber Markup.
 * Statt die Texte in Stücklisten (Text, Marker, Text) zu zerlegen — was jede
 * Textänderung unhandlich machen würde — trägt der Text eine kleine
 * Schreibweise, die hier beim Rendern aufgelöst wird:
 *
 *     "[[hosting|Hosting]], [[ssl|SSL]] & laufende Wartung"
 *
 * Vor dem senkrechten Strich steht der Schlüssel in `glossar` (site.js), danach
 * das Wort, das im Text sichtbar bleibt. Beides getrennt, damit der Schlüssel
 * stabil bleibt, auch wenn der Satz umformuliert wird.
 *
 * ── Bedingungen, die dieser Bau erfüllen muss (Susi, 20.08.2026) ─────────────
 * 1. Die Erklärung steht IM ausgelieferten Markup, nicht per JavaScript
 *    nachgeladen — sonst steht im vorgerenderten HTML nichts. Deshalb wird sie
 *    immer gerendert und im zugeklappten Zustand nur mit `hidden` versteckt.
 * 2. Kein reiner Hover-Tooltip. Am Telefon gibt es kein Darüberfahren, also ist
 *    der Marker ein echter Knopf mit `aria-expanded`.
 * 3. Keine eigene Adresse, kein Eintrag in `routes` und keiner in `App.jsx` —
 *    eine Glossarseite wäre SEO-seitig Streuung (Susis Begründung im Task).
 *
 * ── Warum Knopf und Erklärung getrennt stehen ────────────────────────────────
 * Der Knopf bleibt an seinem Wort im Satz, die Erklärung klappt erst am ENDE
 * des Absatzes auf. Der erste Bau setzte sie direkt hinter das Wort; dann steht
 * der Rest des Satzes verwaist unter dem Kasten ("SEO … -Grundausstattung").
 * Zusammengehalten werden beide über `aria-controls`/`id`, nicht über die
 * Reihenfolge im Markup.
 *
 * ── Warum ein Knopf und kein <details> ───────────────────────────────────────
 * `<details>` ist Fluss-Inhalt und darf nicht in einem `<p>` stehen; die
 * Marker sitzen aber mitten im Satz. Ein Knopf ist Phrasen-Inhalt und überall
 * gültig, wo Text steht. Die FAQ bleibt bei `<details>`, weil sie ganze Blöcke
 * aufklappt — das ist der andere Fall.
 *
 * ── Grenze, die man kennen muss ──────────────────────────────────────────────
 * Ohne JavaScript lässt sich die Erklärung nicht aufklappen. Sie steht dann
 * trotzdem im HTML, ist also für Maschinen da; für einen Menschen ohne
 * JavaScript bleibt sie unsichtbar. Das trifft auf dieser Seite auf jede
 * Interaktion zu außer der FAQ.
 */

// [[schlüssel|sichtbares Wort]] — beides ohne eckige Klammern im Inhalt.
const MARKER = /\[\[([a-zA-Z0-9]+)\|([^\]|]+)\]\]/g;

/** Zerlegt einen Text in Klartext-Stücke und gefundene Marker. */
function zerlegen(text) {
  const stuecke = [];
  const treffer = [];
  let letztes = 0;
  let m;

  MARKER.lastIndex = 0;
  while ((m = MARKER.exec(text)) !== null) {
    if (m.index > letztes) stuecke.push(text.slice(letztes, m.index));
    // Unbekannter Schlüssel: das Wort steht trotzdem da. Ein Tippfehler in
    // site.js darf keinen leeren Satz hinterlassen.
    if (glossar[m[1]]) {
      stuecke.push({ begriff: m[1], wort: m[2], nr: treffer.length });
      treffer.push({ begriff: m[1], wort: m[2] });
    } else {
      stuecke.push(m[2]);
    }
    letztes = m.index + m[0].length;
  }
  if (letztes < text.length) stuecke.push(text.slice(letztes));

  return { stuecke, treffer };
}

/**
 * Gibt einen Sichttext aus und löst die Glossar-Marker darin auf.
 * Texte ohne Marker gehen unverändert durch — die Komponente lässt sich also
 * bedenkenlos über jeden Sichttext legen.
 */
export default function GlossarText({ text }) {
  const basis = useId();
  const [offen, setOffen] = useState({});

  if (typeof text !== "string" || !text.includes("[[")) return text;

  const { stuecke, treffer } = zerlegen(text);
  if (treffer.length === 0) return stuecke.join("");

  const id = (nr) => `${basis}g${nr}`;
  const umschalten = (nr) => setOffen((v) => ({ ...v, [nr]: !v[nr] }));

  return (
    <>
      {stuecke.map((s, i) =>
        typeof s === "string" ? (
          s
        ) : (
          <button
            key={`m${i}`}
            type="button"
            className="gloss__btn"
            aria-expanded={!!offen[s.nr]}
            aria-controls={id(s.nr)}
            onClick={() => umschalten(s.nr)}
          >
            {s.wort}
            <span className="gloss__mark" aria-hidden="true">
              i
            </span>
            <span className="visually-hidden">
              {offen[s.nr] ? " — Erklärung schließen" : " — Erklärung anzeigen"}
            </span>
          </button>
        )
      )}
      {treffer.map((t, nr) => (
        <span className="gloss__body" key={id(nr)} id={id(nr)} hidden={!offen[nr]}>
          <strong className="gloss__wort">{t.wort}:</strong> {glossar[t.begriff]}
        </span>
      ))}
    </>
  );
}

/** Nur der Klartext, ohne Marker — für Titel, `key`, `alt` und Meta-Angaben. */
export function ohneGlossar(text) {
  if (typeof text !== "string") return text;
  return text.replace(MARKER, "$2");
}
