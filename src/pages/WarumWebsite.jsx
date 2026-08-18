import Problem from "../components/Problem";
import Contact from "../components/Contact";
import { objection, pageMeta } from "../content/site";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

/**
 * /warum-eine-website — die Langfassung des Einwand-Blocks.
 *
 * Marina, 17.08.: der `problem`-Abschnitt verschwindet von der Startseite, ist
 * aber nicht verworfen — "die Texte sind fertig und freigegeben, sie tragen
 * weiter und wandern auf eigene Seiten ins Menü". Hier steht die Langfassung,
 * auf der Startseite die Kurzfassung (Block 3).
 *
 * Es wird bewusst NICHTS neu formuliert: dieselben freigegebenen Texte, nur an
 * einem anderen Ort. Wer hier umschreibt, umgeht die Freigabe.
 *
 * H1 laut Susi (18.08.): dieselbe Frage wie in Block 3 der Startseite.
 */
export default function WarumWebsite() {
  useDocumentMeta(pageMeta.warumWebsite.title, pageMeta.warumWebsite.description);
  useReveal();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">{objection.eyebrow}</p>
            <h1 style={{ fontSize: "var(--t-h2)" }}>{objection.heading}</h1>
            {objection.paragraphs.map((text) => (
              <p className="lead" key={text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Problem />
      <Contact />
    </>
  );
}
