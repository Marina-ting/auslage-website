import { Link } from "react-router-dom";
import { business, brandAssets, legalLinks, nav } from "../content/site";
import { useReveal } from "../lib/useReveal";

export default function Footer() {
  const year = new Date().getFullYear();

  /* Eigener Aufruf statt Verlass auf die Home-/Preise-Seite: der Footer
     hängt außerhalb von <Routes> in App.jsx und wird auf jeder Route
     gerendert, auch auf Rechtstexten, die selbst kein useReveal() aufrufen.
     Ohne diesen eigenen Aufruf bliebe die Ablage-Linie dort für immer
     ungezeichnet, wenn jemand direkt auf /impressum landet. */
  useReveal();

  return (
    <footer className="footer on-teal">
      {/* Die Ablage-Linie am Übergang Seite → Footer — derselbe Schnitt wie
          der Gehsteig vor dem Schaufenster im Header. Eigene Box mit festem
          Maß, damit der Lichtschein nie in die Fußzeilentexte hineinreicht. */}
      <div className="footer__sill reveal" aria-hidden="true">
        <span className="shelf" />
      </div>
      <div className="container">
        {/* Marina, 18.08.: Wortmarke auf volle Größe, der Markenclaim rechts
            daneben auf derselben Grundlinie. Vorher standen hier drei Spalten
            (Marke, Seite, Rechtliches) — die rechten zwei füllten ihre Drittel
            nicht aus, und genau dieser Leerraum hat gestört. Ohne Spalten kann
            er nicht wieder entstehen.
            Der Claim kommt aus site.js, nicht aus dieser Datei: ein Sichttext
            gehört nie hart in eine Komponente (Lehre aus dem Knopftext, der im
            Nav.jsx zweimal im Code stand und deshalb durchgerutscht ist). */}
        <div className="footer__top">
          <Link className="footer__logo" to="/" aria-label={`${business.name} – zur Startseite`}>
            <img src={brandAssets.logoDark} alt={business.name} width="613" height="321" />
          </Link>
          <p className="footer__claim">{business.tagline}</p>
        </div>

        {/* Beschriftete Gruppen statt einer langen Linkzeile. Marina, 18.08.:
            „schon alle ortsnamen wegen seo, aber da brauchen wir überschriften
            im footer, sonst sind das einfach zu viele verwirrende einzellinks."
            Die Überschrift steht links neben ihrer Zeile, damit alle Links auf
            derselben Kante beginnen und der Footer flach bleibt.

            OFFEN: die dritte Gruppe „Orte" fehlt hier noch mit Absicht — die
            vier Ortsseiten sind am 18.08. nicht gebaut, sie hängen an Marks
            Absätzen. Sobald sie stehen: dieselbe <div className="fgroup"> ein
            zweites Mal, mit rail--orte, zwischen „Seite" und „Rechtliches".
            Das CSS dafür liegt schon in sections.css.
            Reihenfolge nach Marinas Ansage vom 18.08., genau so und nicht
            alphabetisch: Einzugsgebiet (der Verteiler zuerst), dann talabwärts
            Kaumberg, Weissenbach, Berndorf, Leobersdorf. */}
        <nav className="footer__rail" aria-label="Fußzeilen-Navigation">
          <div className="fgroup">
            <h3 className="fgroup__label">Seite</h3>
            <ul className="rail rail--main">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eigene Gruppe, damit die Pflichtangaben als solche erkennbar
              bleiben und leiser gesetzt werden können — sie sind kein
              Navigationsangebot. */}
          <div className="fgroup">
            <h3 className="fgroup__label">Rechtliches</h3>
            <ul className="rail rail--legal">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Die Anschrift stand hier bis 18.08. und ist auf Marinas
            Entscheidung heraus. Rechtlich ist sie im Footer nicht nötig:
            § 5 ECG verlangt, dass die Angaben „leicht und unmittelbar
            zugänglich" sind, und laut OGH genügt dafür ein verständlich
            beschrifteter Link — Name und Anschrift müssen NICHT auf jeder
            Seite selbst stehen. Der Impressum-Link steht in der Gruppe
            „Rechtliches" und ist damit von jeder Seite aus erreichbar.
            Wer den Link je aus dem Footer nimmt, muss die Anschrift hier
            wieder einsetzen — sonst fehlt beides. */}
        <div className="footer__bottom">
          <p>
            © {year} {business.name} · {business.owner}
          </p>
          <p>
            {/* Solange die Adresse nicht aktiv ist, wird das offen dazugesagt,
                statt einen Link anzubieten, der ins Leere geht. */}
            <a href={`mailto:${business.email}`}>{business.email}</a>
            {!business.emailActive && " (in Einrichtung)"}
          </p>
        </div>
      </div>
    </footer>
  );
}
