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
        Hosting-Anbieter ist Cloudflare, Inc. (Cloudflare Workers). Cloudflare betreibt ein
        weltweites Netzwerk und hat seinen Sitz in den USA, personenbezogene Daten können daher
        auch außerhalb der EU/des EWR verarbeitet werden. Dafür gelten die
        Standardvertragsklauseln der EU-Kommission bzw. eine Zertifizierung im Rahmen des EU-US
        Data Privacy Framework. auslage schließt mit jedem Kunden einen
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
