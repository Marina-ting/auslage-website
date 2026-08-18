import { trust } from "../content/site";

/**
 * Block 2 der Blockfolge — die Vertrauensleiste.
 *
 * Aufbau nach Herr Rats Auswertung: drei Ängste verneint und ein Beweis, nicht
 * vier Selbstlobe. Die Reihenfolge ist deshalb Teil des Textes und darf nicht
 * nach Optik sortiert werden.
 *
 * Die Icons sind reine Strichzeichnungen und tragen keine eigene Aussage — sie
 * stehen auf aria-hidden, die Kachel liest sich als Text vollständig. Sie sind
 * bewusst inline und nicht als Datei: vier Pfade sparen vier Anfragen, und sie
 * erben so die Textfarbe (currentColor), auch auf dunklem Grund.
 */
const ICONS = {
  // Baukasten: Klötzchen, die jemand selbst stapeln müsste.
  baukasten: (
    <>
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      <rect x="8" y="3" width="8" height="8" rx="1.5" />
    </>
  ),
  // Rechnung: Beleg mit gezacktem Abriss.
  rechnung: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9.5 8.5h5M9.5 12.5h5" />
    </>
  ),
  // Adresse: Schlüssel — die Domain gehört dir, nicht mir.
  adresse: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3.5M15.5 12v2.5" />
    </>
  ),
  // Erfahrung: Uhr — die Jahre, nicht die Auszeichnung. Die frühere Zeitachse
  // (waagrechter Strich mit drei Punkten) war bei 2,9 rem Kreisgröße kaum vom
  // Rand zu unterscheiden, in der Sichtprüfung bei 1440 px gesehen.
  erfahrung: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export default function Trust() {
  return (
    <section className="section section--tight trust">
      <div className="container">
        <ul className="trust__grid">
          {trust.items.map((item, i) => (
            <li
              className="trust__item reveal"
              key={item.text}
              style={{ "--reveal-delay": `${i * 70}ms` }}
            >
              <span className="trust__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[item.icon]}
                </svg>
              </span>
              <p className="trust__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
