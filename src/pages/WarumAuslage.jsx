import Why from "../components/Why";
import Limits from "../components/Limits";
import CtaBand from "../components/CtaBand";
import { pageMeta, why } from "../content/site";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

/**
 * /warum-auslage — die Gründe und die Grenzen auf einer Seite.
 *
 * Marina, 17.08.: `limits` kommt zu `why`, nicht auf die Preisseite. Gründe und
 * Grenzen nebeneinander wirken ehrlicher als jedes für sich — das ist der
 * Pratfall-Effekt, auf den `limits` von Anfang an gebaut war.
 *
 * Der Menüpunkt "Warum" zeigt seit 18.08. hierher statt auf einen Anker der
 * Startseite (Susi, Task "Title-Tags, H1 und URLs ausrichten").
 *
 * H1 laut Susi: bestehender Wortlaut, bleibt. `Why` rendert seine Überschrift
 * selbst als h2 — hier steht sie zusätzlich als h1 im Seitenkopf, deshalb
 * bekommt der Abschnitt darunter kein zweites Mal denselben Satz: `Why` wird
 * mit `headless` gerendert.
 */
export default function WarumAuslage() {
  useDocumentMeta(pageMeta.warumAuslage.title, pageMeta.warumAuslage.description);
  useReveal();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">{why.eyebrow}</p>
            <h1 style={{ fontSize: "var(--t-h2)" }}>{why.heading}</h1>
          </div>
        </div>
      </section>

      <Why headless />
      <Limits />
      <CtaBand />
    </>
  );
}
