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
                      // Bis 22.08. hing hier ein Trenner "·" als ::before am
                      // Link. Er ist weg: seit das WhatsApp-Symbol vor der
                      // Beschriftung steht, trennt das Symbol die beiden Kanäle
                      // sichtbar, und der Punkt führte beim Umbruch die neue
                      // Zeile an — was genauso aussieht wie ein Tippfehler.
                      <a
                        className="contact__channel-alt"
                        href={channel.zweiterWeg.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* Das WhatsApp-Glyph steht vor der Beschriftung, damit
                            der Kanal auf einen Blick erkennbar ist — Marinas
                            Frage vom 21.08. ("kommt da noch ein button
                            (whatsapp symbol) oder so?"), ihre Wahl vom 22.08.:
                            Symbol vor dem Textlink, kein eigener Knopf.
                            `fill="currentColor"` statt WhatsApp-Grün, ebenfalls
                            ihre Wahl: die Seite bleibt in Teal/Terrakotta, das
                            Symbol allein trägt den Wiedererkennungswert.
                            `aria-hidden`, weil die Beschriftung daneben schon
                            "per WhatsApp" sagt — ein Screenreader soll das
                            nicht zweimal vorlesen. */}
                        <svg
                          className="contact__channel-glyph"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
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
