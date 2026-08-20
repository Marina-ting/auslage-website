import { useState } from "react";
import { contact, business, cta } from "../content/site";

/**
 * Kontaktformular ohne Backend.
 *
 * Es gibt noch kein Formular-Backend. Statt ein Absenden vorzutäuschen, das im
 * Nichts landet, baut das Formular eine fertige E-Mail und öffnet das
 * Mailprogramm. Das steht auch so unter dem Formular — Kunden merken den
 * Unterschied sofort, und eine verlorene Anfrage kostet mehr als ein ehrlicher
 * Hinweis.
 *
 * Hier stand bis 19.08. zusätzlich "office@auslage.io ist nicht aktiv (siehe
 * PRODUCT.md)". Das stimmt nicht mehr: `business.emailActive` in site.js steht
 * auf true, mit Quelle (Cloudflare-Mail-Routing live seit 08.08.). Der mailto-
 * Weg landet also in einem echten Postfach; was fehlt, ist allein das Backend.
 *
 * Sobald ein Backend steht: handleSubmit auf fetch() umstellen und den
 * mailtoNote-Text in site.js entfernen.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString().trim() ?? "";
    const company = data.get("company")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    const subject = company ? `Anfrage von ${company}` : "Anfrage über auslage.io";
    const body = [
      `Name: ${name}`,
      `Betrieb: ${company || "—"}`,
      `E-Mail: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <div className="contact__grid">
          <div className="reveal">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.heading}</h2>
            <p className="lead" style={{ marginTop: "1.1rem" }}>
              {contact.text}
            </p>

            <ul className="contact__reassurance">
              {contact.reassurance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Zwei Zeilen: die Nummer (Telefon und WhatsApp zusammen) und die
                Mail. Bis 20.08. waren es drei, mit derselben Nummer zweimal
                untereinander — zusammengezogen nach Marinas Entscheidung im
                Nadelöhr (Option B).
                Die Regel von 17.08. gilt unverändert und ist der Grund für den
                `href`-Zweig unten: ein Kanal ohne `href` wird als stiller Text
                ausgegeben statt als Link — eine erfundene Nummer, die jemand
                tatsächlich wählt, ist der teurere Fehler (Marina, 17.08.).
                `zweiterWeg` ist optional: fehlt er, sieht die Zeile aus wie
                jede andere. */}
            <dl className="contact__channels">
              {contact.channels.map((channel) => (
                <div className="contact__channel" key={channel.label}>
                  <dt>{channel.label}</dt>
                  <dd>
                    {channel.href ? (
                      // WhatsApp führt auf wa.me und damit aus der Seite hinaus —
                      // das geht in einen neuen Tab, damit der Besucher die Seite
                      // nicht verliert. `tel:` und `mailto:` bleiben im selben Tab,
                      // sie öffnen ohnehin nur ein Programm.
                      <a
                        href={channel.href}
                        {...(channel.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="contact__channel-pending">{channel.value}</span>
                    )}
                    {channel.zweiterWeg && (
                      // Der Trenner steht als ::before an diesem Link und nicht
                      // als eigenes Zeichen dazwischen: rutscht der Link in die
                      // nächste Zeile, wandert der Punkt mit. Ein Trenner, der
                      // am Ende der ersten Zeile allein hängen bleibt, sieht
                      // aus wie ein Tippfehler.
                      <a
                        className="contact__channel-alt"
                        href={channel.zweiterWeg.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {channel.zweiterWeg.label}
                      </a>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form
            className="contact__form reveal"
            style={{ "--reveal-delay": "100ms" }}
            onSubmit={handleSubmit}
          >
            <h3>{contact.formHeading}</h3>

            <div className="field">
              <label htmlFor="c-name">{contact.fields.name}</label>
              <input id="c-name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="field">
              <label htmlFor="c-company">{contact.fields.company}</label>
              <input
                id="c-company"
                name="company"
                type="text"
                autoComplete="organization"
              />
            </div>

            <div className="field">
              <label htmlFor="c-email">{contact.fields.email}</label>
              <input id="c-email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="field">
              <label htmlFor="c-message">{contact.fields.message}</label>
              <textarea
                id="c-message"
                name="message"
                required
                placeholder={contact.messagePlaceholder}
              />
            </div>

            {/* Derselbe Wortlaut wie überall sonst. Er passt hier zusätzlich
                als Absende-Beschriftung unter einem Formular — das war ein
                Argument für die Wahl am 18.08. */}
            <button className="btn btn--primary" type="submit">
              {cta.label}
            </button>

            {/* aria-live: die Bestätigung wird auch von Screenreadern angesagt. */}
            <div aria-live="polite">
              {sent && (
                <p className="contact__status">
                  Dein E-Mail-Programm sollte sich jetzt mit der fertigen Nachricht öffnen.
                  Falls nicht, schreib direkt an {business.email}.
                </p>
              )}
            </div>

            <p className="contact__note">{contact.mailtoNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
