import { useDocumentMeta } from "../../lib/useReveal";

/**
 * Rahmen für alle Rechtstexte.
 *
 * Der Entwurfshinweis steht bewusst oben und nicht im Kleingedruckten: die
 * Texte sind Marinas Arbeitsentwürfe aus Notion und nicht anwaltlich geprüft.
 * Vor dem Livegang muss dieser Hinweis weg — und dann müssen die Texte geprüft
 * sein, nicht nur der Hinweis entfernt.
 */
export default function LegalLayout({ title, children }) {
  useDocumentMeta(`${title} – Auslage`, `${title} von Auslage, Marina Zaiser, Berndorf.`);

  return (
    <section className="legal">
      <div className="container container--narrow">
        <p className="eyebrow">Rechtliches</p>
        <h1 style={{ fontSize: "var(--t-h2)", marginBottom: "1.75rem" }}>{title}</h1>

        <p className="legal__disclaimer">
          <span aria-hidden="true">⚠</span>
          <span>
            <strong>Arbeitsentwurf.</strong> Dieser Text stammt aus der internen Vorbereitung
            und wurde noch nicht anwaltlich geprüft. Vor dem Livegang der Website muss er
            geprüft und dieser Hinweis entfernt werden.
          </span>
        </p>

        <div className="legal__body">{children}</div>
      </div>
    </section>
  );
}
