import { Link } from "react-router-dom";

/**
 * Paketkarte. `detailed` schaltet die vollständige Leistungsliste frei —
 * auf der Startseite die Kurzform, auf der Preisseite alles.
 */
export default function PackageCard({ pkg, detailed = false, delay = 0 }) {
  const features = detailed ? pkg.features : pkg.features.slice(0, 4);
  const hidden = pkg.features.length - features.length;

  return (
    <article
      className={`pkg reveal${pkg.recommended ? " pkg--recommended" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {pkg.recommended && <p className="pkg__badge">{pkg.recommendLabel}</p>}

      <h3 className="pkg__name">{pkg.name}</h3>
      <p className="pkg__for">{pkg.forWhom}</p>
      <p className="pkg__pitch">{pkg.pitch}</p>

      <div className="pkg__price">
        <span className="pkg__amount">{pkg.monthly}</span>
        <span className="pkg__per">im Monat</span>
        <span className="pkg__setup">
          zzgl. einmalig <strong>{pkg.setup}</strong> Einrichtung
        </span>
      </div>

      <div className="pkg__features">
        <ul className="checklist">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
          {hidden > 0 && <li>und {hidden} weitere Leistungen</li>}
        </ul>
      </div>

      <div className="pkg__cta">
        <Link
          className={`btn ${pkg.recommended ? "btn--primary" : "btn--secondary"}`}
          to="/#kontakt"
        >
          {pkg.name} anfragen
        </Link>
      </div>
    </article>
  );
}
