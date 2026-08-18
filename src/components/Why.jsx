import { why } from "../content/site";

/**
 * `headless` unterdrückt Eyebrow und Überschrift. Gebraucht auf
 * /warum-auslage, wo derselbe Satz schon als h1 im Seitenkopf steht — zweimal
 * hintereinander gelesen wirkt er wie ein Fehler, und zwei identische
 * Überschriften auf einer Seite sind auch für die Suche keine gute Idee.
 */
export default function Why({ headless = false }) {
  return (
    <section className="section" id="warum">
      <div className="container">
        {!headless && (
          <div className="section-head reveal">
            <p className="eyebrow">{why.eyebrow}</p>
            <h2>{why.heading}</h2>
          </div>
        )}

        <div className="grid-2">
          {why.items.map((item, i) => (
            <article
              className="why__item reveal"
              key={item.title}
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` }}
            >
              <span className="shelf" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.footnote && <p className="footnote">{item.footnote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
