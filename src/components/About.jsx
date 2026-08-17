import { about } from "../content/site";

/**
 * Über mich. Das Porträtfoto ist seit 14.08. abgeschaltet (Marina-Entscheidung,
 * `about.photo === null`) — die Bildspalte wird dann gar nicht erst gerendert,
 * gleiche Logik wie bei phone/whatsapp in site.js. Sobald wieder ein Bild
 * hinterlegt ist, kommt die zweispaltige Fassung ohne Codeänderung zurück.
 *
 * Inhalt seit 15.08. Stationen statt Fließtext-Blöcke (Marinas Wunsch, 12.08.).
 */
export default function About() {
  const hasPhoto = Boolean(about.photo);

  return (
    <section className="section section--cream-alt" id="ueber-mich">
      <div className="container">
        <div className={`about__grid${hasPhoto ? "" : " about__grid--solo"}`}>
          {hasPhoto && (
            <div className="about__photo reveal">
              <img
                src={about.photo}
                alt={about.photoAlt}
                width="480"
                height="600"
                loading="lazy"
              />
            </div>
          )}

          <div className="about__text reveal" style={{ "--reveal-delay": "100ms" }}>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 style={{ marginBottom: "0.9rem" }}>{about.heading}</h2>

            {about.lead && <p className="lead about__lead">{about.lead}</p>}

            <ol className="about__stations">
              {about.stations.map((s) => (
                <li className="about__station" key={s.label}>
                  <span className="about__stationLabel">{s.label}</span>
                  <span className="about__stationText">{s.text}</span>
                </li>
              ))}
            </ol>

            {about.closing && <p className="about__closing">{about.closing}</p>}

            <p className="about__sig">{about.signature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
