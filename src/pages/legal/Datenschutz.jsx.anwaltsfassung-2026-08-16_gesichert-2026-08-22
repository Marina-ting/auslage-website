import { business, analyticsActive } from "../../content/site";
import LegalLayout from "./LegalLayout";

// Gültige Fassung: Notion → Verträge → "🛡️ Datenschutzerklärung (Auslage)",
// Stand 12.08.2026, anwaltlich gegengelesen.
//
// Zwei bewusste Abweichungen von der Notion-Fassung:
//  1. Kontaktformular — die Notion-Fassung beschreibt ein Formular, das über
//     Cloudflare Email Routing und Gmail verarbeitet wird. Das trifft auf die
//     abgeschickte Mail zu, nicht auf das Formular: Contact.jsx setzt einen
//     mailto:-Link, es gibt kein Backend (Thomas 16.08., im Repo gegengeprüft
//     17.08.). Beschrieben wird, was wirklich passiert.
//  2. Telefonnummer — die Notion-Fassung nennt eine; auf der Website steht
//     phone: null bewusst, bis die auslage-Business-Nummer bestellt ist.
//
// Der Abschnitt "Schriftarten" hat kein Pendant in Notion, ist aber im Code
// belegt (Poppins/Inter werden in main.jsx selbst gehostet) und bleibt deshalb.
export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Verantwortliche im Sinne der DSGVO</h2>
      <p>
        {business.owner} · {business.name} · {business.address.street},{" "}
        {business.address.postalCode} {business.address.city}, Österreich
        <br />
        E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
        {!business.emailActive && <em> (Adresse noch in Einrichtung)</em>}
      </p>

      <h2>2. Deine Rechte</h2>
      <p>
        Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
        Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wende dich dafür an{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. Wenn du glaubst, dass die
        Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der
        österreichischen Datenschutzbehörde beschweren (
        <a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">
          dsb.gv.at
        </a>
        ).
      </p>

      <h2>3. Hosting (Cloudflare)</h2>
      <p>
        Diese Website wird bei Cloudflare, Inc. (101 Townsend St., San Francisco, CA 94107,
        USA) gehostet (Cloudflare Workers). Cloudflare verarbeitet dabei technisch notwendige
        Daten — unter anderem IP-Adresse und Zugriffszeitpunkt — als Auftragsverarbeiter. Es
        kann zu einer Übermittlung in die USA kommen; Grundlage sind die
        EU-Standardvertragsklauseln bzw. das EU-US Data Privacy Framework. Rechtsgrundlage:
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, effizienten
        Betrieb). Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag (Data Processing
        Addendum, Bestandteil der Cloudflare-Geschäftsbedingungen). Mit jedem Kunden schließt
        auslage ihrerseits einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO ab —{" "}
        <a href="/avv">Muster ansehen</a>.
      </p>

      <h2>4. Server-Logfiles</h2>
      <p>
        Beim Aufruf der Website werden automatisch Server-Logfiles verarbeitet (IP-Adresse,
        Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem, Referrer). Zweck:
        Sicherheit und technischer Betrieb. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        Speicherdauer: in der Regel maximal 14 Tage, danach automatische Löschung.
      </p>

      {analyticsActive && (
        <>
          <h2>5. Webanalyse (Cloudflare Web Analytics)</h2>
          <p>
            Zur Reichweitenmessung nutzen wir Cloudflare Web Analytics, ein Analyse-Werkzeug
            der Cloudflare, Inc. Die Messung erfolgt cookielos: Es werden keine Informationen
            auf deinem Endgerät gespeichert oder ausgelesen, und es werden keine
            seitenübergreifenden Nutzerprofile gebildet. Verarbeitet werden technische
            Zugriffsdaten zum einzelnen Seitenaufruf (aufgerufene Seite, Referrer, ungefährer
            Standort auf Länderebene, Gerätetyp und Browser sowie die beim Abruf technisch
            übermittelte IP-Adresse); die Auswertung erfolgt ausschließlich in aggregierter
            Form. Eine Identifizierung einzelner Besucherinnen und Besucher findet nicht
            statt. Die Analysedaten werden für 30 Tage gespeichert. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer datensparsamen
            Reichweitenmessung).
          </p>
          <p>
            <strong>
              Du hast das Recht, dieser Verarbeitung jederzeit aus Gründen, die sich aus deiner
              besonderen Situation ergeben, zu widersprechen (Art. 21 DSGVO)
            </strong>{" "}
            — wende dich dazu an die unter Punkt 1 genannten Kontaktdaten. Cloudflare, Inc.
            ist bereits als Auftragsverarbeiter für das Hosting dieser Website eingebunden
            (siehe Punkt 3) und ist auch für die Reichweitenmessung als Auftragsverarbeiter
            für uns tätig. Für die Übermittlung in die USA gelten die in Punkt 3 genannten
            Garantien.
          </p>
        </>
      )}

      <h2>{analyticsActive ? "6." : "5."} Kontaktaufnahme (Formular und E-Mail)</h2>
      <p>
        Das Kontaktformular auf dieser Seite speichert nichts. Es setzt aus deinen Eingaben
        eine E-Mail zusammen und öffnet dein E-Mail-Programm damit — die Daten verlassen
        deinen Rechner erst, wenn du dort selbst auf Senden klickst. Eine Übertragung an einen
        Server dieser Website findet nicht statt.
      </p>
      <p>
        Wenn du uns die Mail dann schickst — über das Formular oder direkt —, verarbeiten wir
        die angegebenen Daten (zum Beispiel Name, E-Mail-Adresse, Nachricht) zur Bearbeitung
        deiner Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich) bzw. lit.
        f (berechtigtes Interesse an der Beantwortung). Der E-Mail-Empfang läuft technisch
        über Cloudflare Email Routing und Google (Gmail). Anfragen ohne Vertragsbezug werden
        spätestens nach 6 Monaten gelöscht; entsteht eine Geschäftsbeziehung, gelten die
        gesetzlichen Aufbewahrungsfristen (§ 132 BAO, 7 Jahre).
      </p>

      <h2>{analyticsActive ? "7." : "6."} Cookies</h2>
      <p>Diese Website setzt keine Tracking- oder Marketing-Cookies ein.</p>

      <h2>{analyticsActive ? "8." : "7."} Schriftarten</h2>
      <p>
        Poppins und Inter werden von dieser Website selbst ausgeliefert, nicht von Google
        Fonts nachgeladen. Es entsteht dadurch keine Verbindung zu Servern Dritter und deine
        IP-Adresse wird nicht an Google übertragen.
      </p>
    </LegalLayout>
  );
}
