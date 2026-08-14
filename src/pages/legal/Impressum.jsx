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

      <h2>Gewerbeberechtigung</h2>
      <p>Erteilt am 09.06.2026 von der Bezirkshauptmannschaft Baden.</p>

      <h2>Mitgliedschaften</h2>
      <p>
        Mitglied der Wirtschaftskammer Niederösterreich, Fachgruppe Unternehmensberatung und
        Informationstechnologie.
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
