import Faq from "../components/Faq";
import Contact from "../components/Contact";
import { faq, pageMeta } from "../content/site";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

/**
 * /fragen — die zehn Fragen, die vorher als Anker auf der Startseite standen.
 *
 * Der Menüpunkt "Fragen" gab es schon, er zeigt seit 18.08. hierher.
 *
 * Susi (18.08.): Diese Seite hat kein eigenes Suchziel. Sie zahlt auf Vertrauen
 * und auf die Zitierbarkeit durch KI-Assistenten ein, nicht auf eine Position.
 * Marinas Frage dazu ("kann das die Seite für ChatGPT und Co. sein?") liegt in
 * Susis Eingang — der geplante Faktenblock am Kopf der Seite ist noch nicht
 * geschrieben und steht deshalb hier bewusst NICHT als Platzhalter.
 * Das FAQPage-JSON-LD zieht Susi nach, sobald die Seite existiert.
 */
export default function Fragen() {
  useDocumentMeta(pageMeta.fragen.title, pageMeta.fragen.description);
  useReveal();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h1 style={{ fontSize: "var(--t-h2)" }}>Fragen und Fakten</h1>
          </div>
        </div>
      </section>

      <Faq headless />
      <Contact />
    </>
  );
}
