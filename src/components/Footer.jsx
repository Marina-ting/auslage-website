import { Link } from "react-router-dom";
import { business, brandAssets, legalLinks, nav } from "../content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer on-teal">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo" to="/" aria-label={`${business.name} – zur Startseite`}>
              <img src={brandAssets.logoDark} alt={business.name} width="170" height="46" />
            </Link>
            <p className="footer__tagline">
              Websites für Betriebe im {business.areaServed}. Gebaut, betreut und erreichbar
              von einer Person, nicht von einem Ticketsystem.
            </p>
          </div>

          <div>
            <h3>Seite</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Rechtliches</h3>
            <ul>
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {business.name} · {business.owner} · {business.address.street},{" "}
            {business.address.postalCode} {business.address.city}
          </p>
          <p>
            {/* Solange die Adresse nicht aktiv ist, wird das offen dazugesagt,
                statt einen Link anzubieten, der ins Leere geht. */}
            <a href={`mailto:${business.email}`}>{business.email}</a>
            {!business.emailActive && " (in Einrichtung)"}
          </p>
        </div>
      </div>
    </footer>
  );
}
