import { Link } from "react-router-dom";
import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

// Gültige Fassung aus Notion (Verträge > AVV, bestätigt 10.08.2026). In der
// Praxis wird der AVV als Anhang zum Dienstleistungsvertrag mit den
// Kundendaten ausgefüllt — diese
// Seite zeigt das Muster, wie in der AGB (Punkt 9) referenziert.
export default function Avv() {
  return (
    <LegalLayout title="Auftragsverarbeitungsvertrag – Muster">
      <p>
        Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO, als Anhang zum
        Dienstleistungsvertrag. Diese Seite zeigt das Muster, das mit jedem Kunden individuell
        abgeschlossen wird.
      </p>

      <p>
        <strong>Verantwortlicher:</strong> <em>[Kundenname], [Straße Hausnummer], [PLZ Ort]</em>
        <br />
        <strong>Auftragsverarbeiter:</strong> {business.owner} ({business.name}),{" "}
        {business.address.street}, {business.address.postalCode} {business.address.city}
      </p>

      <h2>1. Gegenstand und Dauer</h2>
      <p>
        Gegenstand dieses Vertrags ist die Verarbeitung personenbezogener Daten im Auftrag des
        Verantwortlichen im Rahmen des Hostings und Betriebs von dessen Website durch den
        Auftragsverarbeiter. Die Dauer der Verarbeitung entspricht der Laufzeit des zugrunde
        liegenden Dienstleistungsvertrags.
      </p>

      <h2>2. Art und Zweck der Verarbeitung</h2>
      <p>
        Die Verarbeitung umfasst das Hosting der Website sowie, sofern ein Kontaktformular
        eingerichtet ist, die Entgegennahme und Weiterleitung von darüber übermittelten
        Anfragen. Zweck ist ausschließlich die Erbringung der vertraglich vereinbarten
        Website-as-a-Service-Leistung.
      </p>

      <h2>3. Art der Daten und betroffene Personen</h2>
      <p>
        Verarbeitet werden insbesondere Name, E-Mail-Adresse, Telefonnummer und
        Nachrichteninhalt von Besucherinnen und Besuchern der Website des Verantwortlichen,
        die über ein Kontaktformular oder vergleichbare Funktionen Daten übermitteln.
      </p>

      <h2>4. Pflichten des Auftragsverarbeiters</h2>
      <p>
        Der Auftragsverarbeiter verarbeitet personenbezogene Daten ausschließlich auf
        dokumentierte Weisung des Verantwortlichen, es sei denn, er ist gesetzlich zu einer
        anderen Verarbeitung verpflichtet. Er gewährleistet, dass zur Verarbeitung befugte
        Personen zur Vertraulichkeit verpflichtet sind, trifft die in Punkt 6 beschriebenen
        technischen und organisatorischen Maßnahmen, unterstützt den Verantwortlichen bei der
        Erfüllung von Betroffenenrechten sowie bei der Meldung von Datenschutzverletzungen und
        gibt nach Beendigung der Leistungserbringung sämtliche personenbezogenen Daten nach
        Wahl des Verantwortlichen zurück oder löscht sie, soweit keine gesetzliche
        Aufbewahrungspflicht entgegensteht.
      </p>

      <h2>5. Unterauftragsverarbeiter</h2>
      <p>
        Der Auftragsverarbeiter setzt zur Erbringung der Leistung einen
        Hosting-Unterauftragsverarbeiter ein. Sitzt dieser außerhalb der EU oder des EWR,
        stellt der Auftragsverarbeiter sicher, dass ein angemessenes Datenschutzniveau besteht,
        etwa über Standardvertragsklauseln der EU-Kommission oder eine Zertifizierung im
        Rahmen des EU-US Data Privacy Framework. Der Auftragsverarbeiter informiert den
        Verantwortlichen über den Austausch oder die Hinzunahme weiterer
        Unterauftragsverarbeiter.
      </p>
      <p>
        Als Hosting-Unterauftragsverarbeiter wird Cloudflare, Inc. eingesetzt
        (Hosting-Infrastruktur, unter anderem Cloudflare Workers). Der Verantwortliche stimmt
        dem Einsatz dieses Unterauftragsverarbeiters zu.
      </p>

      <h2>6. Technische und organisatorische Maßnahmen</h2>
      <ul>
        <li>Verschlüsselte Übertragung (SSL/TLS) für sämtliche Website- und Formulardaten</li>
        <li>
          Zugriffsbeschränkung auf die Hosting- und Verwaltungsumgebung durch persönliche,
          passwortgeschützte Zugänge
        </li>
        <li>Regelmäßige Sicherheitsupdates der eingesetzten Systeme</li>
        <li>
          Keine Speicherung von Formulardaten über das für die Weiterleitung erforderliche Maß
          hinaus
        </li>
      </ul>

      <h2>7. Kontrollrechte des Verantwortlichen</h2>
      <p>
        Der Verantwortliche ist berechtigt, sich in angemessenem Umfang von der Einhaltung der
        in diesem Vertrag festgelegten Pflichten zu überzeugen, insbesondere durch Einholung
        entsprechender Nachweise oder Auskünfte.
      </p>

      <h2>8. Haftung</h2>
      <p>
        Es gelten die Haftungsregelungen des zugrunde liegenden Dienstleistungsvertrags bzw.
        der <Link to="/agb">AGB</Link> der Anbieterin.
      </p>

      <h2>9. Laufzeit</h2>
      <p>
        Dieser Vertrag gilt für die Dauer des zugrunde liegenden Dienstleistungsvertrags und
        endet automatisch mit dessen Beendigung.
      </p>

      <h2>Auftragsverarbeiter</h2>
      <p>
        {business.name} · {business.address.street}, {business.address.postalCode}{" "}
        {business.address.city} ·{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
        {!business.emailActive && <em> (noch in Einrichtung)</em>}
      </p>
    </LegalLayout>
  );
}
