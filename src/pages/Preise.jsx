import { packages, pricingPage, pricingTerms, faq, included } from "../content/site";
import PackageCard from "../components/PackageCard";
import CtaBand from "../components/CtaBand";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

// Auf der Preisseite stehen nur die Fragen, die tatsächlich mit Geld und
// Bindung zu tun haben — der Rest bleibt der Startseite überlassen.
const PREIS_FRAGEN = [
  "Warum 12 Monate Mindestlaufzeit?",
  "Kann ich meine Website mitnehmen, wenn ich kündige?",
  "Kann ich das nicht selbst mit einem Baukasten machen?",
  "Kann ich jährlich statt monatlich zahlen?",
  "Was, wenn ich später etwas brauche, das über mein Paket hinausgeht?",
];

export default function Preise() {
  useDocumentMeta(pricingPage.title, pricingPage.metaDescription);
  useReveal();

  const fragen = faq.items.filter((item) => PREIS_FRAGEN.includes(item.q));

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <p className="eyebrow">{pricingPage.eyebrow}</p>
            <h1 style={{ fontSize: "var(--t-h2)" }}>{pricingPage.heading}</h1>
            <p className="lead">{pricingPage.intro}</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="anchor-note reveal">
            <p className="anchor-note__title">{pricingPage.anchor.heading}</p>
            <p>{pricingPage.anchor.text}</p>
            <p className="footnote">{pricingPage.anchor.footnote}</p>
          </div>

          <h2 className="reveal" style={{ marginBottom: "1.75rem" }}>
            Die drei Pakete
          </h2>

          <div className="packages">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} detailed delay={i * 80} />
            ))}
          </div>

          {/* Kaufoption: eigener Block UNTERHALB der Pakettabelle, eigene
              Überschrift, bewusst keine vierte Karte und keine vierte
              Tabellenzeile (Marinas Entscheidung vom 20.08.2026). Der ruhige
              Kasten ist dieselbe Optik wie der Preisanker oben: er soll den
              Paketkarten optisch nicht den Rang ablaufen, weil das Abo das
              beworbene Angebot bleibt. Texte und Zahlen: pricingPage.kauf. */}
          <div className="anchor-note anchor-note--kauf reveal">
            <h2 className="kauf__title">{pricingPage.kauf.heading}</h2>
            <p>{pricingPage.kauf.intro}</p>

            <ul className="kauf__preise">
              {pricingPage.kauf.preise.map((p) => (
                <li key={p.name}>
                  <span className="kauf__paket">{p.name}</span>
                  <span className="kauf__preis">{p.price}</span>
                </li>
              ))}
            </ul>

            <p className="footnote">{pricingPage.kauf.preisNote}</p>
            <p>{pricingPage.kauf.outro}</p>
          </div>
        </div>
      </section>

      <section className="section section--cream-alt">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{included.eyebrow}</p>
            <h2>{included.heading}</h2>
            <p className="lead">{included.intro}</p>
          </div>

          <div className="grid-3">
            {included.items.map((item, i) => (
              <article
                className="card reveal"
                key={item.title}
                style={{ "--reveal-delay": `${(i % 3) * 70}ms` }}
              >
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Konditionen</p>
            <h2>{pricingPage.termsHeading}</h2>
          </div>

          <ul className="terms reveal">
            {pricingTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>

          <div className="section-head reveal" style={{ marginTop: "clamp(3rem, 2rem + 3vw, 4.5rem)" }}>
            <h2 style={{ fontSize: "var(--t-h3)", fontWeight: 500 }}>
              {pricingPage.ablöseHeading}
            </h2>
            <p className="lead" style={{ fontSize: "var(--t-body)" }}>
              {pricingPage.ablöseText}
            </p>
            <p className="lead" style={{ fontSize: "var(--t-body)" }}>
              {pricingPage.ablöseTextQuellcode}
            </p>
            <p className="lead" style={{ fontSize: "var(--t-body)" }}>
              {pricingPage.ablöseTextDomain}
            </p>
          </div>

          <div className="table-wrap reveal">
            <table className="simple">
              <caption className="visually-hidden">
                Einmalige Ablöse-Gebühr je Paket für die Übergabe des Quellcodes. Inhalte und
                Anfragen bekommst du unabhängig davon kostenlos.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Paket</th>
                  <th scope="col">Quellcode-Ablöse (optional)</th>
                  <th scope="col">Monatlich</th>
                  <th scope="col">Einrichtung</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.name}>
                    <th scope="row">{pkg.name}</th>
                    <td>{pkg.ablöse}</td>
                    <td>{pkg.monthly}</td>
                    <td>{pkg.setup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--cream-alt">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Zum Preis gefragt</p>
            <h2>Was vor der Zusage meistens noch offen ist.</h2>
          </div>

          <div className="faq">
            {fragen.map((item, i) => (
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

      <CtaBand />
    </>
  );
}
