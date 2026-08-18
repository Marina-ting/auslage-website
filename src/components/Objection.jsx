import { Link } from "react-router-dom";
import { objection } from "../content/site";

/**
 * Block 3 der Blockfolge — der Einwand.
 *
 * Steht bewusst an dritter Stelle, direkt nach der Vertrauensleiste und vor
 * allem Verkaufen: Wer über Empfehlung lebt, hat die Frage im Kopf, bevor er
 * über Pakete liest. Der Block arbeitet mit dem Einwand statt gegen ihn — der
 * erste Satz gibt ihm recht.
 *
 * Die Illustration (Handy mit Suchfeld) ist Marks Vorschlag und die Stelle, an
 * der die Bildreihe der Seite einmal brechen darf. Sie ist inline, damit sie
 * die Farbtokens erbt und ohne zusätzliche Anfrage lädt. Rein dekorativ: die
 * Aussage steht vollständig im Text daneben.
 */
export default function Objection() {
  return (
    <section className="section objection" id="einwand">
      <div className="container">
        <div className="objection__grid">
          <div className="reveal">
            <p className="eyebrow">{objection.eyebrow}</p>
            <h2>{objection.heading}</h2>

            {objection.paragraphs.map((text, i) => (
              <p className={i === 0 ? "lead objection__lead" : "objection__body"} key={text}>
                {text}
              </p>
            ))}

            {objection.more && (
              <Link className="link-quiet objection__more" to={objection.more.href}>
                {objection.more.label}
              </Link>
            )}
          </div>

          <div className="objection__visual reveal" style={{ "--reveal-delay": "120ms" }}>
            <svg viewBox="0 0 240 300" role="presentation" aria-hidden="true">
              {/* Handy */}
              <rect
                x="30"
                y="14"
                width="180"
                height="272"
                rx="26"
                className="objection__phone"
              />
              <rect x="96" y="28" width="48" height="6" rx="3" className="objection__speaker" />

              {/* Suchfeld */}
              <rect x="52" y="66" width="136" height="30" rx="15" className="objection__field" />
              <circle cx="72" cy="81" r="6.5" className="objection__glass" />
              <path d="M77 86l7 7" className="objection__glass" />
              <rect x="90" y="77" width="62" height="8" rx="4" className="objection__typed" />

              {/* Ergebnisse: der erste trägt, die darunter verblassen —
                  wer weiter unten steht, wird nicht angerufen. */}
              {[0, 1, 2].map((i) => (
                <g key={i} className={`objection__result objection__result--${i}`}>
                  <rect x="52" y={122 + i * 52} width="90" height="9" rx="4.5" />
                  <rect x="52" y={139 + i * 52} width="136" height="7" rx="3.5" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
