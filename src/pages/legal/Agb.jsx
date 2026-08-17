import { Link } from "react-router-dom";
import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

// Gültige Fassung: Notion → Verträge → "📄 AGB", Stand 16.08.2026, nach
// anwaltlicher Abstimmung, inklusive der konsolidierten §8-Fassung.
// Bewusst ohne Bankdaten — die stehen im Notion-Fuß, gehören aber nicht auf
// eine öffentliche Seite.
export default function Agb() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        <strong>Anbieterin:</strong> {business.owner} ({business.name}),{" "}
        {business.address.street}, {business.address.postalCode} {business.address.city}
        <br />
        <strong>Stand:</strong> 16.08.2026 · Fassung nach anwaltlicher Abstimmung
      </p>

      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
        Anbieterin und ihren Kundinnen und Kunden (im Folgenden „Kunde") über die Erstellung,
        den Betrieb und die Wartung von Websites im Rahmen der
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
        bzw. in der Auftragsbestätigung gewählten Paket (Starter, Business oder Premium). Der
        genaue Leistungsumfang je Paket ergibt sich aus dem jeweiligen Angebot. Änderungen
        oder Zusatzleistungen, die über das gebuchte Paket hinausgehen, werden gesondert
        vereinbart und verrechnet.
      </p>

      <h2>3. Vertragsbeginn</h2>
      <p>
        Der Vertrag kommt mit der Auftragsbestätigung zustande. Vertragslaufzeit und
        Entgeltpflicht beginnen mit dem Ersten des Monats, der auf die Freischaltung der
        Website unter der vereinbarten Domain folgt. Verzögert sich die Freischaltung aus
        Gründen, die in der Sphäre des Auftraggebers liegen — insbesondere durch ausstehende
        Inhalte oder Freigaben —, so beginnen Laufzeit und Entgeltpflicht spätestens mit dem
        Ersten des Monats, der auf den Ablauf von acht Wochen ab Auftragsbestätigung folgt.
      </p>

      <h2>4. Preise und Zahlungsbedingungen</h2>
      <p>
        Es gelten die im Angebot genannten Preise zzgl. der einmaligen Setup-Gebühr. Die
        Anbieterin ist Kleinunternehmerin im Sinne des § 6 Abs. 1 Z 27 UStG; es wird daher
        keine Umsatzsteuer ausgewiesen. Rechnungen sind, sofern nicht anders vereinbart,
        innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei
        Zahlungsverzug ist die Anbieterin berechtigt, gesetzliche Verzugszinsen zu verrechnen
        und nach erfolgloser Zahlungserinnerung die Leistung (z.B. Website-Hosting) bis zum
        Zahlungseingang auszusetzen.
      </p>

      <h2>5. Vertragslaufzeit und Kündigung</h2>
      <p>
        Der Vertrag läuft ab diesem Zeitpunkt zunächst zwölf Monate. Beide Vertragsteile
        können ihn mit einer Frist von einem Monat zum Ende des zwölften Vertragsmonats
        kündigen. Wird nicht gekündigt, läuft er auf unbestimmte Zeit weiter und kann von
        beiden Vertragsteilen mit einer Frist von einem Monat zum Monatsletzten gekündigt
        werden. Die Kündigung hat schriftlich oder per E-Mail an die im Vertrag genannte
        Adresse zu erfolgen; maßgeblich ist der Zugang. Das Recht zur Kündigung aus wichtigem
        Grund bleibt unberührt.
      </p>

      <h2>6. Mitwirkungspflichten des Kunden</h2>
      <p>
        Der Kunde stellt die für die Erstellung der Website erforderlichen Inhalte (Texte,
        Bilder, Logos, Zugangsdaten) zeitgerecht zur Verfügung und stellt sicher, dass er über
        die erforderlichen Rechte an diesen Inhalten verfügt. Verzögerungen, die durch
        verspätete Mitwirkung des Kunden entstehen, verlängern die vereinbarten
        Umsetzungsfristen entsprechend.
      </p>

      <h2>7. Nutzungsrechte, Datenübergabe und Domain nach Vertragsende</h2>
      <p>
        Während der Vertragslaufzeit erhält der Kunde eine einfache, nicht übertragbare
        Werknutzungsbewilligung an der für ihn erstellten Website. Mit Beendigung des Vertrags
        enden Hosting und Zugriff auf die Website.
      </p>
      <p>
        Material, das der Kunde beigestellt hat — insbesondere Texte, Bilder, Logos und
        Firmendaten — sowie die über die Website eingegangenen Anfragen und Kontaktdaten
        verbleiben beim Kunden. Der Kunde kann deren Herausgabe binnen drei Monaten ab
        Vertragsende verlangen; die Anbieterin stellt sie ihm binnen vier Wochen ab Verlangen
        unentgeltlich in einem gängigen, weiterverwendbaren Format zur Verfügung. Nach Ablauf
        dieser drei Monate ist die Anbieterin berechtigt und, soweit personenbezogene Daten
        betroffen sind, verpflichtet, sämtliche Daten des Kunden zu löschen.
      </p>
      <p>
        Der von der Anbieterin erstellte Quellcode einschließlich Gestaltung und Struktur
        bleibt urheberrechtlich ihr zugeordnet. Der Kunde kann binnen drei Monaten ab
        Vertragsende dessen Übergabe verlangen. Gegen ein einmaliges Entgelt (Starter 100 €,
        Business 150 €, Premium 250 €, jeweils zuzüglich allfälliger gesetzlicher
        Umsatzsteuer) übergibt die Anbieterin binnen vier Wochen ab Zahlung den Quellcode und
        räumt dem Kunden das zeitlich und räumlich unbeschränkte, nicht ausschließliche Recht
        ein, die Website selbst oder durch Dritte zu betreiben, zu bearbeiten und
        weiterzuentwickeln. Ausgenommen bleiben Bestandteile Dritter — insbesondere Schriften,
        Bildmaterial und Softwarebibliotheken —, deren Weiterverwendung eigene Lizenzen des
        Kunden voraussetzt; die Anbieterin weist die betroffenen Bestandteile bei der Übergabe
        aus. Ohne diese Vereinbarung besteht kein Anspruch auf Herausgabe des Quellcodes.
      </p>
      <p>
        Die Domain verbleibt beim Kunden. Die Anbieterin übermittelt ihm binnen zwei Wochen
        nach Vertragsende die für einen Anbieterwechsel erforderlichen Angaben — bei
        .at-Domains die sogenannte Authinfo — und wirkt an der Übertragung in einen vom Kunden
        benannten Zugang mit. Ab dem Ende des Vertrags trägt der Kunde die Kosten der
        Domainverlängerung. Nimmt er die Übertragung nicht binnen acht Wochen ab Übermittlung
        dieser Angaben vor, ist die Anbieterin nicht verpflichtet, weitere Verlängerungen zu
        veranlassen; das Risiko des Domainverlusts trägt diesfalls der Kunde. Die Anbieterin
        ist ab Vertragsende berechtigt, die auf ihre Systeme verweisenden DNS-Einträge zu
        entfernen.
      </p>

      <h2>8. Domain</h2>
      <p>
        Die Domain ist im gebuchten Paket inbegriffen; die Kosten für Registrierung und
        laufende Verlängerung während der Vertragslaufzeit sind im vereinbarten Honorar
        enthalten.
      </p>
      <p>
        Die Anbieterin registriert die Domain im Namen und auf Rechnung des Kunden oder
        begleitet ihn bei dessen eigener Registrierung. In beiden Fällen ist und bleibt der
        Kunde Inhaber (Registrant) der Domain. Der Kunde bevollmächtigt die Anbieterin, die
        Registrierung in seinem Namen vorzunehmen und die Domain während der Vertragslaufzeit
        technisch zu verwalten, insbesondere die erforderlichen DNS-Einträge zu setzen; er
        erkennt die Registrierungsbedingungen der jeweiligen Vergabestelle an.
      </p>
      <p>
        Ob eine gewünschte Domain verfügbar und zuteilbar ist, entscheidet allein die
        Vergabestelle. Für die Zulässigkeit der gewählten Bezeichnung, insbesondere im
        Hinblick auf Kennzeichen- und Namensrechte Dritter, ist der Kunde verantwortlich.
      </p>
      <p>
        Während der Vertragslaufzeit wird der Kunde die Domain nicht ohne vorherige
        Verständigung der Anbieterin zu einem anderen Anbieter übertragen oder deren
        technische Zuordnung ändern. Für die Domain nach Vertragsende gilt Punkt 7.
      </p>
      <p>
        Die für Betrieb, Namensauflösung und E-Mail-Weiterleitung erforderlichen technischen
        Konten und Dienste (insbesondere das Konto beim eingesetzten Infrastruktur-Anbieter)
        hält die Anbieterin während der Vertragslaufzeit im Rahmen der Leistungserbringung für
        den Kunden. Bei Vertragsende wirkt die Anbieterin daran mit, dass Domain, Website und
        E-Mail-Weiterleitung unter die Kontrolle des Kunden übergehen — nach Wahl der
        Anbieterin durch Übertragung des betreffenden Kontos oder durch Migration der
        Konfiguration in einen vom Kunden benannten Zugang. Die auf die Systeme der Anbieterin
        verweisenden DNS-Einträge (Punkt 7) entfernt die Anbieterin erst, nachdem die
        Übertragung oder Migration erfolgt ist oder der Kunde die Mitwirkung binnen der in
        Punkt 7 genannten Fristen nicht in Anspruch genommen hat. Für diese Mitwirkung wird
        kein gesondertes Entgelt verrechnet; Punkt 7 zum Quellcode bleibt unberührt.
      </p>

      <h2>9. Datenschutz</h2>
      <p>
        Soweit die Anbieterin im Rahmen der Website-Erstellung und des Hostings
        personenbezogene Daten von Website-Besuchern des Kunden verarbeitet (z.B. über ein
        Kontaktformular), schließen die Parteien einen gesonderten
        Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO ab (Muster:{" "}
        <Link to="/avv">AVV</Link>).
      </p>

      <h2>10. Haftung</h2>
      <p>
        Die Anbieterin haftet unbeschränkt für Schäden an der Person sowie für Schäden, die
        sie oder eine Person, für die sie einzustehen hat, vorsätzlich oder grob fahrlässig
        verschuldet hat.
      </p>
      <p>
        Für leichte Fahrlässigkeit haftet die Anbieterin nur bei Verletzung vertraglicher
        Hauptpflichten und der Höhe nach begrenzt mit 2.500 € je Schadensfall. Gegenüber
        Unternehmern gilt diese Begrenzung auch für Schäden aus schlichter grober
        Fahrlässigkeit.
      </p>
      <p>
        Für Inhalte, die der Kunde beistellt, sowie für deren rechtliche Zulässigkeit haftet
        die Anbieterin nicht. Der Kunde hält die Anbieterin hinsichtlich Ansprüchen Dritter,
        die aus diesen Inhalten erhoben werden, schad- und klaglos und ersetzt ihr die
        angemessenen Kosten der Rechtsverteidigung.
      </p>
      <p>
        Die Website wird während der Vertragslaufzeit fortlaufend versioniert gesichert; jeder
        veröffentlichte Stand der Website kann wiederhergestellt werden. Daten, die über
        Funktionen der Website beim Kunden eingehen (etwa Kontaktanfragen), werden dem Kunden
        direkt zugestellt und bei dem von ihm dafür genutzten Dienst (etwa seinem
        E-Mail-Postfach) gespeichert; für deren Sicherung ist die Anbieterin nicht
        verantwortlich. Setzt die Website eine gesonderte Datenhaltung ein (etwa eine
        Buchungs- oder Datenbanklösung), wird deren Sicherung gesondert vereinbart. Die
        Anbieterin haftet nicht für Datenverluste, die auf Störungen bei eingesetzten
        Dienstleistern beruhen, sofern sie diese bei sorgfältiger Auswahl und Überwachung
        nicht verhindern konnte. Für Inhalte, die der Kunde außerhalb der Website vorhält, ist
        er selbst verantwortlich.
      </p>
      <p>
        Für Ausfälle und Störungen, die außerhalb des Einflussbereichs der Anbieterin liegen —
        insbesondere bei Betreibern der Hosting-Infrastruktur —, haftet die Anbieterin nicht,
        sofern sie diese bei sorgfältiger Auswahl und Überwachung des Anbieters nicht
        verhindern konnte.
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
        Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich
        zulässig, das für Baden sachlich zuständige Gericht. Sollten einzelne Bestimmungen
        dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
