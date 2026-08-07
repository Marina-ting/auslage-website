import { Link } from "react-router-dom";
import { hero } from "../content/site";
import WindowMock from "./WindowMock";

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

            <ul className="hero__trust">
              {hero.trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual reveal" style={{ "--reveal-delay": "140ms" }}>
            <WindowMock />
          </div>
        </div>
      </div>
    </section>
  );
}
