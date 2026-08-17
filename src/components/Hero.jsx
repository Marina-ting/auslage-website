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

            <div className="btn-row">
              <Link className="btn btn--primary" to={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Link>
              <Link className="btn btn--secondary" to={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </div>

            {/* Verfügbarkeit direkt unter den Buttons: dort, wo die Entscheidung
                fällt. Der Punkt selbst ist dekorativ (aria-hidden) — die Aussage
                steht im Text daneben, damit sie auch ohne Farbe ankommt. */}
            {availability && (
              <p className={`availability availability--${availability.state}`}>
                <span className="availability__dot" aria-hidden="true" />
                {availability.label}
              </p>
            )}

            <ul className="hero__trust">
              {hero.trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual reveal" style={{ "--reveal-delay": "140ms" }}>
            <Shopfront />
          </div>
        </div>
      </div>
    </section>
  );
}
