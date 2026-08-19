import { Link } from "react-router-dom";
import { availability, business, hero } from "../content/site";
import Shopfront from "./Shopfront";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="reveal">
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="hero__headline">
              {hero.headline}
              <span className="hero__accent">{hero.headlineAccent}</span>
            </h1>

            <p className="lead hero__sub">{hero.subline}</p>

            {/* Ein Knopf, ein Textlink. Zwei Knöpfe nebeneinander wären zwei
                Entscheidungen — die Blockfolge lässt nur eine zu (Marina,
                17.08.). "Pakete & Preise" bleibt erreichbar, tritt aber
                sichtbar zurück. */}
            <div className="btn-row">
              <Link className="btn btn--primary" to={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Link>
              {/* Runder Telefon-Knopf neben dem Haupt-CTA. Er ist kein zweiter
                  Knopf im Sinn der Entscheidung von oben: er stellt keine
                  zweite Frage, sondern bietet denselben ersten Schritt auf dem
                  anderen Kanal an — für Betriebe, die lieber anrufen. Rendert
                  nur, wenn es eine echte Nummer gibt; ohne Sichttext ist das
                  aria-label die einzige Beschriftung und darf nicht wegfallen. */}
              {hero.phoneCta && business.phoneHref && (
                <a
                  className="btn btn--secondary btn--icon"
                  href={business.phoneHref}
                  aria-label={`${hero.phoneCta.label}: ${business.phone}`}
                  title={`${hero.phoneCta.label}: ${business.phone}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.4 3.6h3.1l1.5 3.8-1.9 1.4a12.2 12.2 0 0 0 5.1 5.1l1.4-1.9 3.8 1.5v3.1a1.9 1.9 0 0 1-2.1 1.9A16.6 16.6 0 0 1 4.5 5.7a1.9 1.9 0 0 1 1.9-2.1Z" />
                  </svg>
                </a>
              )}

              <Link className="link-quiet" to={hero.secondaryLink.href}>
                {hero.secondaryLink.label}
              </Link>
            </div>

            {/* Die Entwarnung zum Knopf. "Jetzt anfragen" ist eine reine
                Handlungsaufforderung — anders als der frühere Wortlaut trägt es
                die Unverbindlichkeit nicht im Wort selbst. Deshalb steht sie
                hier, direkt darunter, in voller Textfarbe und NICHT ausgegraut.
                Fällt sie weg, fehlt der Seite das Gegengewicht zum Knopf. */}
            {hero.ctaNote && <p className="hero__cta-note">{hero.ctaNote}</p>}

            {/* Verfügbarkeit direkt unter den Buttons: dort, wo die Entscheidung
                fällt. Der Punkt selbst ist dekorativ (aria-hidden) — die Aussage
                steht im Text daneben, damit sie auch ohne Farbe ankommt. */}
            {availability && (
              <p className={`availability availability--${availability.state}`}>
                <span className="availability__dot" aria-hidden="true" />
                {availability.label}
              </p>
            )}
          </div>

          <div className="hero__visual reveal" style={{ "--reveal-delay": "140ms" }}>
            <Shopfront />
          </div>
        </div>
      </div>
    </section>
  );
}
