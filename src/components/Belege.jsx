import { belege, references } from "../content/site";

/**
 * Block 6b der Blockfolge — die nachprüfbaren Belege.
 *
 * Steht zwischen "Was dir gehört" und den Referenzen und existiert nur, weil
 * es noch keine Referenz gibt: Wo sonst ein Kunde für auslage spräche, steht
 * hier, was der Besucher selbst nachsehen kann. Marina hat das am 20.08.2026
 * im Nadelöhr mit Antwort B entschieden (beide Texte, dieser zuerst), der
 * Wortlaut kommt von Mark und ist freigegeben — er steht in site.js und wird
 * hier nur gerendert.
 *
 * WARUM DIE BEDINGUNG AUF `references.items` ZEIGT und nicht auf einen eigenen
 * Schalter: Der Abschnitt behauptet "ein Kunde ist noch nicht dabei". Sobald
 * die erste Referenz eingetragen ist, ist dieser Satz falsch. An dieselbe
 * Liste gehängt, verschwindet er im selben Moment wie der Leertext im
 * Referenzblock — ein Schalter weniger, den jemand vergessen kann.
 *
 * Hintergrundfolge, falls hier je etwas umgestellt wird: davor liegt das
 * Teal-Band (Ownership), danach der Referenzblock, der im Leerzustand
 * bewusst OHNE `section--cream-alt` rendert. Ergibt teal → cremealt → creme →
 * cremealt (About). Wer diesem Abschnitt die Klasse nimmt, klebt zwei gleiche
 * Flächen aneinander.
 */
export default function Belege() {
  if (references.items.length) return null;

  return (
    <section className="section section--cream-alt" id="belege">
      <div className="container">
        <div className="section-head belege-head reveal">
          <h2>{belege.heading}</h2>
          <p className="lead">{belege.text}</p>
        </div>
      </div>
    </section>
  );
}
