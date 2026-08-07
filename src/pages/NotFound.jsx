import { Link } from "react-router-dom";
import { useDocumentMeta } from "../lib/useReveal";

export default function NotFound() {
  useDocumentMeta(
    "Seite nicht gefunden – Auslage",
    "Diese Seite gibt es nicht. Zurück zur Startseite von Auslage."
  );

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
      </div>
    </section>
  );
}
