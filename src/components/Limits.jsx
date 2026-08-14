import { limits } from "../content/site";

/**
 * Die offen genannten Grenzen des Angebots.
 *
 * Steht bewusst zwischen "Warum Auslage" und "Ablauf": direkt nach den
 * Versprechen, direkt vor dem ersten Schritt. Eine zugegebene Schwäche macht
 * die übrigen Behauptungen glaubwürdiger — und spart beiden Seiten ein
 * unangenehmes Gespräch nach der Auftragsbestätigung.
 */
export default function Limits() {
  return (
    <section className="section section--cream-alt" id="grenzen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{limits.eyebrow}</p>
          <h2>{limits.heading}</h2>
          <p className="lead">{limits.intro}</p>
        </div>

        <div className="limits__grid">
          {limits.items.map((item, i) => (
            <article
              className="limits__item reveal"
              key={item.title}
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
