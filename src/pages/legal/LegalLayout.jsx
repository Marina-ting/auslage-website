import { legalMeta } from "../../content/site";
import { useDocumentMeta } from "../../lib/useReveal";

/**
 * Rahmen für alle Rechtstexte.
 *
 * Hatte bis 2026-08-08 einen Entwurfshinweis ("nicht anwaltlich geprüft") an
 * dieser Stelle. Auf Marinas Anweisung entfernt — AGB und AVV sind laut
 * Notion (Verträge) weiterhin ungeprüfte Arbeitsentwürfe, das gilt unabhängig
 * davon, ob der Hinweis hier steht.
 */
export default function LegalLayout({ title, children }) {
  // Wortlaut kommt aus site.js, damit das Prerendering im Build und die Anzeige
  // im Browser nicht auseinanderlaufen können.
  const meta = legalMeta(title);
  useDocumentMeta(meta.title, meta.description);

  return (
    <section className="legal">
      <div className="container container--narrow">
        <p className="eyebrow">Rechtliches</p>
        <h1 style={{ fontSize: "var(--t-h2)", marginBottom: "1.75rem" }}>{title}</h1>

        <div className="legal__body">{children}</div>
      </div>
    </section>
  );
}
