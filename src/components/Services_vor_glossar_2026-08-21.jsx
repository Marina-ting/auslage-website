import { services } from "../content/site";

/**
 * Block 5 der Blockfolge — was drin ist.
 *
 * Häkchenliste statt Karten mit Erklärabsatz: pro Punkt ein Stichwort und eine
 * Zeile. Die ausführliche Kartenfassung steht weiter auf /preise (`included`),
 * dort liest jemand, der schon interessiert ist.
 *
 * Der Preisgrund-Teil steht bewusst IN diesem Block und nicht als eigener
 * Abschnitt: er beantwortet die Frage, die beim Lesen der Liste entsteht
 * ("und das für 50 €?"), und verliert außerhalb dieses Zusammenhangs seine
 * Wirkung.
 *
 * Der Anker #leistungen bleibt — der Menüpunkt "Leistungen" zeigt darauf.
 */
export default function Services() {
  return (
    <section className="section section--cream-alt" id="leistungen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2>{services.heading}</h2>
        </div>

        <ul className="service-list">
          {services.items.map((item, i) => (
            <li
              className="service-list__item reveal"
              key={item.label}
              style={{ "--reveal-delay": `${(i % 3) * 60}ms` }}
            >
              <span className="service-list__mark" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <strong className="service-list__label">{item.label}:</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>

        {services.note && <p className="service-list__note reveal">{services.note}</p>}

        <div className="price-reasons reveal">
          <h3 className="price-reasons__heading">{services.priceReasonHeading}</h3>
          <div className="price-reasons__grid">
            {services.priceReasons.map((reason, i) => (
              <p
                className="price-reasons__card reveal"
                key={reason}
                style={{ "--reveal-delay": `${i * 70}ms` }}
              >
                {reason}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
