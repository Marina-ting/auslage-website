import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";

/**
 * Einstiegspunkt fürs Prerendering (siehe scripts/prerender.mjs).
 *
 * Wird NICHT im Browser geladen. Vite baut daraus beim `npm run build` ein
 * zweites, kleines Bundle (dist-ssr/), das Node ausführen kann — damit rendert
 * das Prerender-Skript jede Seite einmal fertig, bevor sie hochgeht.
 *
 * Statt des BrowserRouter aus main.jsx steht hier der StaticRouter: er bekommt
 * die Adresse als Text übergeben, weil es beim Bauen kein Browserfenster gibt.
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

// Das Prerender-Skript liest die Seitenliste und die Schalter durch dieses
// Bundle mit, damit es site.js nicht ein zweites Mal auf eigenem Weg laden muss.
//
// `faq` steht seit 19.08.2026 mit in der Liste: Das Prerendering baut daraus das
// FAQPage-JSON-LD für /fragen. Es wird bewusst aus derselben Quelle gelesen wie
// der sichtbare Text — strukturierte Daten, die etwas anderes behaupten als die
// Seite zeigt, sind ein Verstoß gegen Googles Richtlinien und nebenbei der
// häufigste Weg, wie so ein Block still veraltet (Susi).
export {
  routes,
  notFoundRoute,
  comingSoon,
  comingSoonMeta,
  siteUrl,
  faq,
} from "./content/site";
