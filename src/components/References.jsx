import { references } from "../content/site";

/**
 * Block 7 der Blockfolge — Referenzen.
 *
 * Rendert NICHTS, solange `references.items` leer ist. Das ist Absicht und
 * Werners Entscheidung beim Einbau (18.08.): Es gibt noch keine Kundenseite,
 * und ein Abschnitt mit Platzhalter-Zitaten wäre auf einer Seite, die mit
 * Ehrlichkeit argumentiert, der teurere Fehler. Gleiche Logik wie bei
 * about.photo und business.phone.
 *
 * Sobald die erste Kundenseite online ist, reicht das Befüllen von
 * `references.items` in site.js — an dieser Datei ist dann nichts zu tun.
 * Die Zitate sollen bestätigen, was oben versprochen wird (unkompliziert,
 * schnell, wenig Aufwand). Das Design loben sie nicht.
 */
export default function References() {
  if (!references.items.length) return null;

  return (
    <section className="section section--cream-alt" id="referenzen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{references.eyebrow}</p>
          <h2>{references.heading}</h2>
        </div>

        <div className="grid-3">
          {references.items.map((item, i) => (
            <figure
              className="reference reveal"
              key={item.name}
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` }}
            >
              <p className="reference__title">{item.title}</p>
              <blockquote className="reference__quote">{item.quote}</blockquote>
              <figcaption className="reference__by">
                {item.name}, {item.company}
                {item.href && (
                  <a className="link-quiet" href={item.href}>
                    Zur Website
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
