import { Link } from "react-router-dom";
import { availability, hero } from "../content/site";
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
