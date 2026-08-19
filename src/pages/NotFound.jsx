import { Link } from "react-router-dom";
import { useDocumentMeta } from "../lib/useReveal";
import { notFoundRoute } from "../content/site";

export default function NotFound() {
  // Titel und Beschreibung stehen in site.js, weil das Prerendering dieselben
  // Werte in dist/404.html schreibt. Zwei Stellen liefen sonst auseinander.
  useDocumentMeta(notFoundRoute.meta.title, notFoundRoute.meta.description);

  return (
    <section className="notfound">
      <p className="eyebrow" style={{ justifySelf: "center" }}>
        Fehler 404
      </p>
      <h1 style={{ fontSize: "var(--t-h2)" }}>Diese Auslage ist leer.</h1>
      <p className="lead" style={{ marginInline: "auto" }}>
        Die Seite, die du gesucht hast, gibt es nicht — oder nicht mehr.
      </p>
      <div className="btn-row">
        <Link className="btn btn--primary" to="/">
          Zur Startseite
        </Link>
        <Link className="btn btn--secondary" to="/preise">
          Pakete & Preise
        </Link>
        {/* Dritter Weg auf Susis Vorgabe vom 19.08.: Wer hier landet, sucht
            meistens eine Auskunft, nicht ein Angebot. */}
        <Link className="btn btn--secondary" to="/fragen">
          Häufige Fragen
        </Link>
      </div>
    </section>
  );
}
