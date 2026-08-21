import { ownership } from "../content/site";

/**
 * Block 6 der Blockfolge — was dir gehört.
 *
 * Herr Rats Befund: das ist das stärkste Argument der Seite, weil ein
 * Miet-Anbieter es normalerweise nicht haben kann. Es gehört deshalb in den
 * Verkaufsteil und nicht in eine FAQ.
 *
 * Liegt auf der dunklen Teal-Fläche — die einzige ruhige dunkle Insel zwischen
 * Kopfbereich und Kontaktblock. Das trägt das Gewicht des Arguments, ohne dass
 * der Text lauter werden muss.
 *
 * Kein Vergleich mit Mitbewerbern in diesem Block. Ein Satz wie "bei
 * Mietmodellen ist danach alles weg" ist für EINEN Anbieter geprüft, nicht für
 * Mietmodelle allgemein.
 */
export default function Ownership() {
  return (
    <section className="section section--teal on-teal ownership" id="was-dir-gehoert">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{ownership.eyebrow}</p>
          <h2>{ownership.heading}</h2>
        </div>

        <dl className="ownership__list">
          {ownership.items.map((item, i) => (
            <div
              className="ownership__row reveal"
              key={item.label}
              style={{ "--reveal-delay": `${i * 80}ms` }}
            >
              <dt className="ownership__label">{item.label}</dt>
              <dd className="ownership__text">
                {item.text}
                {item.badge && <span className="ownership__badge">{item.badge}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
