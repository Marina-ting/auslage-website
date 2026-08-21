import { useEffect } from "react";
import { faq } from "../content/site";

/**
 * FAQ als <details>/<summary>.
 *
 * Nativ per Tastatur bedienbar, von Screenreadern korrekt angekündigt und
 * funktionsfähig, auch wenn JavaScript scheitert. Eine nachgebaute
 * Accordion-Komponente wäre hier nur schlechter.
 *
 * Jedes <details> trägt die feste `id` aus `faq.items` (site.js), damit von
 * außen auf eine einzelne Frage verlinkt werden kann. Der Sprung allein reicht
 * aber nicht: ein zugeklapptes <details> zeigt nur seine Kopfzeile, die Antwort
 * bliebe verborgen. Der Effekt unten klappt die adressierte Frage deshalb auf.
 * Ohne JavaScript springt der Browser trotzdem richtig hin — dann muss man
 * einmal klicken. Das ist der vertretbare Rest.
 */
export default function Faq({ headless = false }) {
  useEffect(() => {
    function oeffneAdressierteFrage() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const ziel = document.getElementById(id);
      if (!(ziel instanceof HTMLDetailsElement)) return;
      ziel.open = true;
      ziel.scrollIntoView({ block: "start" });
    }

    oeffneAdressierteFrage();
    window.addEventListener("hashchange", oeffneAdressierteFrage);
    return () => window.removeEventListener("hashchange", oeffneAdressierteFrage);
  }, []);

  return (
    <section className="section" id="fragen">
      <div className="container">
        {/* `headless` auf /fragen: dort trägt der Seitenkopf schon das Eyebrow,
            das hier ein zweites Mal stünde. Die Überschrift bleibt trotzdem —
            seit der Faktenblock darüber steht, ist das nicht mehr die einzige
            Überschrift der Seite, und ein Abschnitt ohne eigene Überschrift läse
            sich wie eine Fortsetzung der Fakten. Sie fällt eine Stufe kleiner
            aus als der Seitentitel, damit der oben dominant bleibt. */}
        {headless ? (
          <h2 className="faq__heading reveal">{faq.heading}</h2>
        ) : (
          <div className="section-head reveal">
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2>{faq.heading}</h2>
          </div>
        )}

        <div className="faq">
          {faq.items.map((item, i) => (
            <details
              className="faq__item reveal"
              id={item.id}
              key={item.id ?? item.q}
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
