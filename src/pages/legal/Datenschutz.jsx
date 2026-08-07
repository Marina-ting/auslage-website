import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>Verantwortliche Stelle</h2>
      <p>
        {business.name} · {business.owner} · {business.address.street},{" "}
        {business.address.postalCode} {business.address.city}
        <br />
        E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
        {!business.emailActive && <em> (noch in Einrichtung)</em>}
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Das Kontaktformular auf dieser Seite speichert nichts. Es setzt aus deinen Eingaben
        eine E-Mail zusammen und öffnet dein E-Mail-Programm damit — die Daten verlassen
        deinen Rechner erst, wenn du dort selbst auf Senden klickst. Es findet keine
        Übertragung an einen Server dieser Website statt.
      </p>
      <p>
        Zu ergänzen, sobald das Formular auf ein Backend umgestellt wird: Anbieter,
        Rechtsgrundlage (Art. 6 Abs. 1 lit. b DSGVO, Vertragsanbahnung) und Speicherdauer.
      </p>

      <h2>Hosting</h2>
      <p>
        Der Hosting-Anbieter ist noch nicht final gewählt; aktuell wird Cloudflare Workers
        getestet. Zu ergänzen, sobald entschieden: Anbieter, Serverstandort und
        Auftragsverarbeitungsvertrag. Grundsätzlich schließt Auslage mit jedem Kunden einen
        Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO ab — <a href="/avv">Muster ansehen</a>.
      </p>

      <h2>Cookies und Tracking</h2>
      <p>
        Diese Seite setzt keine Cookies und bindet keine Analyse- oder Werbedienste ein.
      </p>
      <p>
        Vorgesehen ist Plausible Analytics — cookiefrei und ohne Einwilligungsbanner, im
        Unterschied zu Google Analytics. Sobald es eingerichtet ist, wird es hier mit
        Rechtsgrundlage ergänzt.
      </p>

      <h2>Schriftarten</h2>
      <p>
        Poppins und Inter werden von dieser Website selbst ausgeliefert, nicht von Google
        Fonts nachgeladen. Es entsteht dadurch keine Verbindung zu Servern Dritter und deine
        IP-Adresse wird nicht an Google übertragen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit und Widerspruch. Wende dich dafür an{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. Außerdem steht dir eine
        Beschwerde bei der österreichischen Datenschutzbehörde offen.
      </p>
    </LegalLayout>
  );
}
