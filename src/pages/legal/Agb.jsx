import { Link } from "react-router-dom";
import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

// Arbeitsentwurf aus Notion (Verträge > AGB), übernommen aus der ersten
// Website-Version. Bewusst ohne Bankdaten — die stehen im Notion-Entwurf,
// gehören aber nicht auf eine öffentliche Seite.
export default function Agb() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        <strong>Anbieterin:</strong> {business.owner} ({business.name}),{" "}
        {business.address.street}, {business.address.postalCode} {business.address.city}
      </p>

      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der
        Anbieterin und ihren Kundinnen und Kunden (im Folgenden „Kunde") über die
        Erstellung, den Betrieb und die Wartung von Websites im Rahmen der
        Website-as-a-Service-Pakete Starter, Business und Premium.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für sämtliche Leistungen der Anbieterin gegenüber dem Kunden.
        Abweichende Bedingungen des Kunden gelten nur, wenn die Anbieterin ihnen ausdrücklich
        schriftlich zugestimmt hat.
      </p>

      <h2>2. Vertragsgegenstand und Leistungsumfang</h2>
      <p>
        Die Anbieterin erstellt und betreibt für den Kunden eine Website gemäß dem im Angebot
        bzw. in der Auftragsbestätigung gewählten Paket. Der genaue Leistungsumfang je Paket
        ergibt sich aus dem jeweiligen Angebot. Änderungen oder Zusatzleistungen, die über das
        gebuchte Paket hinausgehen, werden gesondert vereinbart und verrechnet.
      </p>

      <h2>3. Vertragsabschluss</h2>
      <p>
        Der Vertrag kommt durch schriftliche Bestätigung des Angebots durch den Kunden (per
        E-Mail oder Unterschrift) zustande. Die Anbieterin bestätigt den Auftrag zusätzlich
        schriftlich mittels Auftragsbestätigung.
      </p>

      <h2>4. Preise und Zahlungsbedingungen</h2>
      <p>
        Es gelten die im Angebot genannten Preise zuzüglich der einmaligen Einrichtungsgebühr.
        Die Anbieterin ist Kleinunternehmerin im Sinne des § 6 Abs. 1 Z 27 UStG; es wird daher
        keine Umsatzsteuer ausgewiesen. Rechnungen sind, sofern nicht anders vereinbart,
        innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug fällig. Bei Zahlungsverzug ist die
        Anbieterin berechtigt, gesetzliche Verzugszinsen zu verrechnen und nach erfolgloser
        Zahlungserinnerung die Leistung bis zum Zahlungseingang auszusetzen.
      </p>

      <h2>5. Vertragslaufzeit und Kündigung</h2>
      <p>
        Die Mindestvertragslaufzeit beträgt 12 Monate ab Vertragsbeginn. Nach Ablauf der
        Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils weitere 12 Monate,
        sofern er nicht von einer der beiden Seiten mit einer Frist von 3 Monaten zum Ende der
        jeweiligen Vertragslaufzeit schriftlich gekündigt wird. Das Recht zur außerordentlichen
        Kündigung aus wichtigem Grund bleibt unberührt.
      </p>

      <h2>6. Mitwirkungspflichten des Kunden</h2>
      <p>
        Der Kunde stellt die für die Erstellung der Website erforderlichen Inhalte (Texte,
        Bilder, Logos, Zugangsdaten) zeitgerecht zur Verfügung und stellt sicher, dass er über
        die erforderlichen Rechte an diesen Inhalten verfügt. Verzögerungen, die durch
        verspätete Mitwirkung des Kunden entstehen, verlängern die vereinbarten
        Umsetzungsfristen entsprechend.
      </p>

      <h2>7. Nutzungsrechte und Datenübergabe nach Vertragsende</h2>
      <p>
        Während der Vertragslaufzeit erhält der Kunde ein einfaches, nicht übertragbares
        Nutzungsrecht an der für ihn erstellten Website. Nach Beendigung des Vertrags endet der
        Zugriff auf die Website und deren Hosting. Auf Wunsch des Kunden übergibt die
        Anbieterin gegen eine einmalige Ablöse-Gebühr (Starter 100 €, Business 150 €, Premium
        250 €) den Quellcode sowie die Inhalte der Website in einem gängigen,
        weiterverwendbaren Format. Ohne gesonderte Vereinbarung besteht kein Anspruch auf
        Herausgabe.
      </p>

      <h2>8. Domain</h2>
      <p>
        Die Domain ist im gebuchten Paket inklusive. Die Anbieterin registriert die Domain im
        Namen des Kunden; die Kosten dafür sind im vereinbarten Honorar enthalten. Das
        Eigentum an der Domain verbleibt beim Kunden.
      </p>

      <h2>9. Datenschutz</h2>
      <p>
        Soweit die Anbieterin im Rahmen der Website-Erstellung und des Hostings
        personenbezogene Daten von Website-Besuchern des Kunden verarbeitet, schließen die
        Parteien einen gesonderten Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO ab
        (Muster: <Link to="/avv">AVV</Link>).
      </p>

      <h2>10. Haftung</h2>
      <p>
        Die Anbieterin haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Für
        leichte Fahrlässigkeit haftet sie nur bei Verletzung wesentlicher Vertragspflichten und
        der Höhe nach begrenzt auf den vorhersehbaren, vertragstypischen Schaden. Für Inhalte,
        die der Kunde selbst zur Verfügung stellt, sowie für deren rechtliche Zulässigkeit
        übernimmt die Anbieterin keine Haftung. Für Ausfälle oder Störungen bei genutzten
        Drittanbietern haftet die Anbieterin nicht, soweit sie diese nicht zu vertreten hat.
      </p>

      <h2>11. Änderungen dieser AGB</h2>
      <p>
        Die Anbieterin kann diese AGB mit Wirkung für die Zukunft ändern. Der Kunde wird über
        Änderungen mindestens 6 Wochen im Voraus informiert; widerspricht er nicht innerhalb
        dieser Frist, gelten die geänderten AGB als angenommen.
      </p>

      <h2>12. Schlussbestimmungen</h2>
      <p>
        Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Erfüllungsort und
        Gerichtsstand ist, soweit gesetzlich zulässig, das für Baden sachlich zuständige
        Gericht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der
        übrigen Bestimmungen unberührt.
      </p>

      <h2>Anbieterin</h2>
      <p>
        {business.name} · {business.address.street}, {business.address.postalCode}{" "}
        {business.address.city} ·{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
        {!business.emailActive && <em> (noch in Einrichtung)</em>}
        <br />
        Gewerbe: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
      </p>
    </LegalLayout>
  );
}
