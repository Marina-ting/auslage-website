import { Link } from "react-router-dom";
import { packages, pricingPage } from "../content/site";
import PackageCard from "./PackageCard";

export default function Packages() {
  return (
    <section className="section section--cream-alt" id="preise">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Pakete</p>
          <h2>Drei Pakete. Alle Preise offen.</h2>
          <p className="lead">
            Kein Angebot auf Anfrage und nichts, was erst im Gespräch dazukommt. Du siehst
            hier, was du zahlst, bevor du mit mir sprichst.
          </p>
        </div>

        {/* Preisanker: der Marktvergleich steht vor den Zahlen, nicht danach. */}
        <div className="anchor-note reveal">
          <p className="anchor-note__title">{pricingPage.anchor.heading}</p>
          <p>{pricingPage.anchor.text}</p>
          <p className="footnote">{pricingPage.anchor.footnote}</p>
        </div>

        <div className="packages">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} delay={i * 80} />
          ))}
        </div>

        <div className="btn-row reveal" style={{ marginTop: "2.5rem" }}>
          <Link className="btn btn--secondary" to="/preise">
            Alle Leistungen im Detail
          </Link>
        </div>
      </div>
    </section>
  );
}
