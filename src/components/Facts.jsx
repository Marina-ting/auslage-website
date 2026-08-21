import { Link } from "react-router-dom";
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

/**
 * Ein Faktenwert darf ein einzelnes Wort verlinken (seit 21.08., Nadelöhr
 * "Impressum verlinken — welche Stelle meinst du?", Antwort C).
 *
 * Der Wortlaut in site.js bleibt dabei EIN durchgehender String und wird nicht
 * in Bruchstücke zerlegt; die Verlinkung steht als eigenes Feld `link`
 * daneben ({ wort, href }). Grund: die Sätze sind freigegebene Endfassungen und
 * sollen an ihrer Stelle am Stück lesbar bleiben — wer sonst den Satz ändert,
 * müsste ihn erst aus drei Teilen zusammensetzen.
 *
 * Kommt `wort` im Text nicht vor, wird der Satz unverändert ausgegeben. Ein
 * Tippfehler im Feld `link` kostet also die Verlinkung, nie den Satz.
 *
 * `Link` statt `<a>`, weil das Ziel eine eigene Route ist: ein `<a href>` würde
 * die Seite komplett neu laden.
 */
function FaktenWert({ text, link }) {
  if (!link) return text;

  const start = text.indexOf(link.wort);
  if (start === -1) return text;

  return (
    <>
      {text.slice(0, start)}
      <Link to={link.href}>{link.wort}</Link>
      {text.slice(start + link.wort.length)}
    </>
  );
}

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
              <dd className="facts__value">
                <FaktenWert text={item.text} link={item.link} />
              </dd>
            </div>
          ))}
        </dl>

        <p className="facts__stand reveal">{facts.stand}</p>
      </div>
    </section>
  );
}
