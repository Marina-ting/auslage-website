import { useEffect } from "react";
import { business, brandAssets } from "../content/site";

/**
 * Steht anstelle von Home/Preise, solange content/site.js `comingSoon: true`
 * setzt. Bewusst eigenständig statt über Nav/Footer: keine Links auf Anker,
 * die auf dieser Seite nicht existieren. Impressum bleibt verlinkt, weil es
 * unabhängig vom Baustatus erreichbar sein muss.
 *
 * Setzt Titel, Meta-Description und robots-Tag selbst, statt useDocumentMeta
 * zu nutzen: die statischen Werte in index.html (Titel, og:-Tags, Preise im
 * JSON-LD-Schema) verraten trotzdem noch alles an Crawler und Link-Vorschauen
 * (WhatsApp, Slack etc.), die kein JS ausführen — siehe Kommentar dort.
 */
export default function ComingSoon() {
  useEffect(() => {
    document.title = "Bald online – auslage";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "auslage ist bald online.");

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex,nofollow");

    return () => robots?.remove();
  }, []);

  return (
    <div className="coming-soon">
      <div className="coming-soon__inner">
        <img
          src={brandAssets.logoLight}
          alt={business.name}
          width="180"
          height="48"
          className="coming-soon__logo"
        />
        <h1>Bald online.</h1>
        <p>
          auslage bekommt gerade den letzten Schliff. Für Fragen erreichst du mich
          schon jetzt unter{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
        <a className="coming-soon__legal" href="/impressum">
          Impressum
        </a>
      </div>
    </div>
  );
}
