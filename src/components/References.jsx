import { references } from "../content/site";

/**
 * Block 7 der Blockfolge — Referenzen.
 *
 * Der Block hat zwei Zustände. Bis zum 20.08.2026 hatte er nur einen: bei
 * leerem `items` rendete er gar nichts. Das war Absicht (kein Abschnitt mit
 * Platzhalter-Zitaten auf einer Seite, die mit Ehrlichkeit argumentiert), ließ
 * aber eine Lücke, wo der Besucher Vertrauen sucht. Marina hat im Nadelöhr
 * Antwort B gewählt: der Block bleibt stehen und sagt selbst, dass noch
 * niemand darin steht. Wortlaut in `references.leer`, von Mark, freigegeben.
 *
 * Sobald die erste Kundenseite online ist, reicht das Befüllen von
 * `references.items` in site.js — an dieser Datei ist dann nichts zu tun, und
 * der Leertext verschwindet von selbst. Die Zitate sollen bestätigen, was oben
 * versprochen wird (unkompliziert, schnell, wenig Aufwand). Das Design loben
 * sie nicht.
 *
 * Der Abschnitt "Sie müssen mir nichts glauben." (Belege.jsx), der bis zum
 * 22.08.2026 direkt darüber stand und an derselben Liste hing, ist gestrichen
 * (Marina, Nadelöhr, Antwort A). Dieser Block hier stand nicht zur Wahl und
 * ist unverändert.
 *
 * ACHTUNG bei der Hintergrundfolge: Der LEERE Zustand rendert bewusst ohne
 * `section--cream-alt`, der befüllte mit. Seit dem Wegfall des Belege-Blocks
 * steht davor in beiden Zuständen das Teal-Band (Ownership), danach in beiden
 * Fällen About (cream-alt). Leer ergibt das teal → creme → cream-alt, befüllt
 * teal → cream-alt → cream-alt. Bekannte Kante für später: im BEFÜLLTEN
 * Zustand stoßen Referenzen und About als zwei cream-alt-Flächen aneinander.
 * Das ist heute nicht sichtbar und beim Befüllen zu prüfen — dann trägt der
 * befüllte Zustand besser KEINE `section--cream-alt` mehr.
 */
export default function References() {
  if (!references.items.length) {
    return (
      <section className="section" id="referenzen">
        <div className="container">
          <div className="section-head belege-head reveal">
            <p className="eyebrow">{references.eyebrow}</p>
            <h2>{references.leer.heading}</h2>
            <p className="lead">{references.leer.text}</p>
          </div>
        </div>
      </section>
    );
  }

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
