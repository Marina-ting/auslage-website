import { facts } from "../content/site";

/**
 * Faktenblock am Kopf von /fragen.
 *
 * Warum es ihn gibt (Susi, 18.08.): Die Fragen-Seite hat kein eigenes Suchziel.
 * Sie zahlt darauf ein, dass KI-Assistenten die Eckdaten richtig wiedergeben.
 * Dafür braucht es nachprüfbare Angaben in ganzen Sätzen, nicht Werbesprache.
 *
 * Warum <dl> und nicht eine Liste aus <li>: Beschriftung und Angabe gehören
 * paarweise zusammen. Ein Definitionsverzeichnis sagt das im Markup, statt es
 * nur optisch zu behaupten — Screenreader lesen "Vertrag: die Mindestlaufzeit
 * beträgt zwölf Monate" als ein Paar vor, und ein Textextraktor bekommt dieselbe
 * Zuordnung ohne CSS. Jedes Paar steckt in einem eigenen <div>, weil <dt>/<dd>
 * sonst nicht als Zeile ausrichtbar wären.
 *
 * Der Wortlaut steht in site.js unter `facts` und ist eine freigegebene
 * Endfassung. Hier wird nichts formatiert, ergänzt oder gekürzt.
 */
export default function Facts() {
  return (
    <section className="section facts" id="fakten" aria-labelledby="fakten-titel">
      <div className="container">
        <h2 className="facts__heading reveal" id="fakten-titel">
          {facts.heading}
        </h2>

        {/* `reveal` liegt bewusst auf der Liste als Ganzes und nicht auf jeder
            Zeile: vierzehn einzeln einfliegende Zeilen lesen sich beim Scrollen
            wie ein Ladebalken, und es wären vierzehn beobachtete Elemente statt
            einem. */}
        <dl className="facts__list reveal">
          {facts.items.map((item) => (
            <div className="facts__row" key={item.label}>
              <dt className="facts__label">{item.label}</dt>
              <dd className="facts__value">{item.text}</dd>
            </div>
          ))}
        </dl>

        <p className="facts__stand reveal">{facts.stand}</p>
      </div>
    </section>
  );
}
