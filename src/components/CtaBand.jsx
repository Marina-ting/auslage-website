import { Link } from "react-router-dom";
import { ctaBand } from "../content/site";

export default function CtaBand() {
  return (
    <section className="section--teal cta-band on-teal">
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
