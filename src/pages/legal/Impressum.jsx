import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

// Gültige Fassung: Notion → Tasks Manager, "Impressum der Website vervollständigen".
// Textvorschlag Frau Mittler 17.08.2026, Angaben von Marina bestätigt (GISA-Zahl,
// Unternehmensgegenstand, Gewerbebehörde, Fachgruppe).
// Bewusst NICHT enthalten: Bankdaten (Betrugsrisiko), UID-Nummer (Kleinunternehmerin,
// nur auf Antrag), OS-Streitbeilegungsplattform (gilt für Verbrauchergeschäfte).
// Die Telefonnummer fehlt noch — die Business-Nummer ist entschieden, aber nicht
// bestellt. Bis dahin bewusst keine Zeile statt eines Platzhalters.
export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Impressum und Offenlegung nach § 5 ECG, § 14 UGB und § 25 MedienG.
      </p>

      <h2>Medieninhaberin, Herausgeberin und für den Inhalt verantwortlich</h2>
      <p>
        {business.owner} · {business.name}
        <br />
        {business.address.street}
        <br />
        {business.address.postalCode} {business.address.city}
        <br />
        Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
        {!business.emailActive && <em> (Adresse noch in Einrichtung)</em>}
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Erstellung, Betrieb und Wartung von Websites für lokale Betriebe im Abo-Modell.
      </p>

      <h2>Gewerbeberechtigung</h2>
      <p>
        Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
        (freies Gewerbe)
        <br />
        GISA-Zahl: 39788696
        <br />
        Gewerbebehörde: Bezirkshauptmannschaft Baden
      </p>
      <p>
        Anwendbare Rechtsvorschrift: Gewerbeordnung (GewO 1994), abrufbar unter{" "}
        <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">
          ris.bka.gv.at
        </a>
      </p>

      <h2>Mitgliedschaften</h2>
      <p>
        Mitglied der Wirtschaftskammer Niederösterreich, Fachgruppe Unternehmensberatung,
        Buchhaltung und Informationstechnik.
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Kleinunternehmerin gemäß § 6 Abs. 1 Z 27 UStG — es wird keine Umsatzsteuer
        ausgewiesen.
      </p>

      <h2>Streitbeilegung</h2>
      <p>
        auslage schließt Verträge ausschließlich mit Unternehmerinnen und Unternehmern. Die
        Bestimmungen zur Online-Streitbeilegung für Verbraucherinnen und Verbraucher (Art. 14
        Abs. 1 ODR-VO) sind daher nicht einschlägig.
      </p>
    </LegalLayout>
  );
}
