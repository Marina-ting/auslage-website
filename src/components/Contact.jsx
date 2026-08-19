import { useState } from "react";
import { contact, business, cta } from "../content/site";

/**
 * Kontaktformular ohne Backend.
 *
 * Es gibt noch kein Formular-Backend und office@auslage.io ist nicht aktiv
 * (siehe PRODUCT.md). Statt ein Absenden vorzutäuschen, das im Nichts landet,
 * baut das Formular eine fertige E-Mail und öffnet das Mailprogramm. Das steht
 * auch so unter dem Formular — Kunden merken den Unterschied sofort, und eine
 * verlorene Anfrage kostet mehr als ein ehrlicher Hinweis.
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

            {/* Telefon, WhatsApp und Mail gleichrangig nebeneinander, wie die
                Blockfolge es verlangt. Telefon und WhatsApp tragen sichtbaren
                Platzhaltertext statt einer erfundenen Nummer — eine falsche
                Nummer, die jemand tatsächlich wählt, ist der teurere Fehler
                (Marina, 17.08.). Ein Wert ohne `href` wird deshalb bewusst
                nicht verlinkt. */}
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
