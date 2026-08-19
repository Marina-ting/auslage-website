import { Link } from "react-router-dom";
import { ctaBand } from "../content/site";

export default function CtaBand() {
  return (
    // `section` gehört mit dazu und ist nicht bloß Kosmetik: Diese Klasse setzt
    // `position: relative`. Ohne sie hat der warme Lichtschein aus
    // `.section--teal::before` keinen positionierten Vorfahren und hängt sich an
    // den Seitenanfang statt an dieses Band (gefunden am 18.08.2026, im Browser
    // nachgemessen). Auch `.section > .container` greift ohne sie nicht.
    <section className="section section--teal cta-band on-teal">
      <div className="container">
        <div className="cta-band__inner reveal">
          <div>
            <h2>{ctaBand.heading}</h2>
            <p>{ctaBand.text}</p>
          </div>
          <Link className="btn btn--primary" to={ctaBand.cta.href}>
            {ctaBand.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
