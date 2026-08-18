import { useEffect } from "react";
import { business, brandAssets, comingSoonMeta } from "../content/site";

/**
 * Steht anstelle von Home/Preise, solange content/site.js `comingSoon: true`
 * setzt. Bewusst eigenständig statt über Nav/Footer: keine Links auf Anker,
 * die auf dieser Seite nicht existieren. Impressum bleibt verlinkt, weil es
 * unabhängig vom Baustatus erreichbar sein muss.
 *
 * Setzt Titel, Meta-Description und robots-Tag selbst, statt useDocumentMeta
 * zu nutzen. Seit dem Prerendering (18.08.) stehen dieselben Werte schon im
 * ausgelieferten HTML — das hier ist die zweite Sicherung für den Fall, dass
 * jemand im Browser von einer Rechtstext-Seite hierher navigiert.
 * Wortlaut kommt aus site.js, damit beide Wege denselben Text tragen.
 */
export default function ComingSoon() {
  useEffect(() => {
    document.title = comingSoonMeta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", comingSoonMeta.description);

    // Ein robots-Tag, das schon im ausgelieferten HTML steht, gehört dem
    // Prerendering — dann nur den Wert setzen und es beim Verlassen der Seite
    // stehen lassen. Nur ein selbst erzeugtes Tag wird auch selbst weggeräumt.
    const vorhanden = document.querySelector('meta[name="robots"]');
    const robots = vorhanden || document.createElement("meta");
    if (!vorhanden) {
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex,nofollow");

    return () => {
      if (!vorhanden) robots.remove();
    };
  }, []);

  return (
    <div className="coming-soon">
      <div className="coming-soon__inner">
        <img
          src={brandAssets.logoLight}
          alt={business.name}
          width="613"
          height="321"
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
