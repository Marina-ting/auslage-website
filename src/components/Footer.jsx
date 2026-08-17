import { Link } from "react-router-dom";
import { business, brandAssets, legalLinks, nav } from "../content/site";
import { useReveal } from "../lib/useReveal";

export default function Footer() {
  const year = new Date().getFullYear();

  /* Eigener Aufruf statt Verlass auf die Home-/Preise-Seite: der Footer
     hängt außerhalb von <Routes> in App.jsx und wird auf jeder Route
     gerendert, auch auf Rechtstexten, die selbst kein useReveal() aufrufen.
     Ohne diesen eigenen Aufruf bliebe die Ablage-Linie dort für immer
     ungezeichnet, wenn jemand direkt auf /impressum landet. */
  useReveal();

  return (
    <footer className="footer on-teal">
      {/* Die Ablage-Linie am Übergang Seite → Footer — derselbe Schnitt wie
          der Gehsteig vor dem Schaufenster im Header. Eigene Box mit festem
          Maß, damit der Lichtschein nie in die Fußzeilentexte hineinreicht. */}
      <div className="footer__sill reveal" aria-hidden="true">
        <span className="shelf" />
      </div>
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo" to="/" aria-label={`${business.name} – zur Startseite`}>
              <img src={brandAssets.logoDark} alt={business.name} width="613" height="321" />
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
