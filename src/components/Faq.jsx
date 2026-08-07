import { faq } from "../content/site";

/**
 * FAQ als <details>/<summary>.
 *
 * Nativ per Tastatur bedienbar, von Screenreadern korrekt angekündigt und
 * funktionsfähig, auch wenn JavaScript scheitert. Eine nachgebaute
 * Accordion-Komponente wäre hier nur schlechter.
 */
export default function Faq() {
  return (
    <section className="section" id="fragen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2>{faq.heading}</h2>
        </div>

        <div className="faq">
          {faq.items.map((item, i) => (
            <details
              className="faq__item reveal"
              key={item.q}
              style={{ "--reveal-delay": `${Math.min(i, 4) * 50}ms` }}
            >
              <summary>
                {item.q}
                <span className="faq__sign" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
