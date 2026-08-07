import { business } from "../../content/site";
import LegalLayout from "./LegalLayout";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2>Diensteanbieterin</h2>
      <p>
        {business.name} · {business.owner}
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
        Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik.
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Kleinunternehmerin gemäß § 6 Abs. 1 Z 27 UStG — es wird keine Umsatzsteuer
        ausgewiesen und keine UID-Nummer geführt.
      </p>

      <h2>Noch zu ergänzen</h2>
      <p>
        Gewerbeberechtigung und zuständige Behörde, Mitgliedschaft bei der Wirtschaftskammer
        (sofern zutreffend) sowie der Link zur EU-Online-Streitbeilegungsplattform, falls
        Verträge im Fernabsatz mit Verbraucherinnen und Verbrauchern geschlossen werden.
      </p>
    </LegalLayout>
  );
}
