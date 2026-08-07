/**
 * Das Fenster: eine abstrakte Auslage, kein Screenshot.
 *
 * Bewusst kein echtes oder erfundenes Kundenprojekt — es gibt noch keinen
 * referenzierbaren Live-Kunden (siehe PRODUCT.md). Die Form zeigt, was eine
 * Auslage-Seite ist, ohne etwas zu behaupten: Rahmen, Inhalt, Ablage-Linie.
 */
export default function WindowMock() {
  return (
    <div className="window" aria-hidden="true">
      <div className="window__bar">
        <span className="window__dot" />
        <span className="window__dot" />
        <span className="window__dot" />
        <span className="window__url">dein-betrieb.at</span>
      </div>

      <div className="window__body">
        <div className="window__hero">
          <span className="bar" style={{ width: "78%" }} />
          <span className="bar" style={{ width: "56%" }} />
          <span className="bar bar--dim" style={{ width: "88%" }} />
          <span className="bar bar--dim" style={{ width: "64%" }} />
          <span className="bar bar--cta" />
        </div>

        <div className="window__cols">
          {[0, 1, 2].map((i) => (
            <div className="window__tile" key={i}>
              <span className="bar" style={{ width: "70%" }} />
              <span className="bar" style={{ width: "92%" }} />
              <span className="bar" style={{ width: "48%" }} />
            </div>
          ))}
        </div>

        <div className="window__shelf" />
      </div>
    </div>
  );
}
