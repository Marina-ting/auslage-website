import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { comingSoon, previewKey } from "./content/site";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Preise from "./pages/Preise";
// Neu seit 18.08.: Die Startseite trägt nur noch die neun Blöcke der
// Blockfolge. Die Abschnitte, die dort weggefallen sind, stehen jetzt auf
// diesen drei Seiten — Texte unverändert und weiterhin freigegeben
// (Marina, 17.08.: "nicht verwerfen").
import WarumWebsite from "./pages/WarumWebsite";
import WarumAuslage from "./pages/WarumAuslage";
import Fragen from "./pages/Fragen";
import ComingSoon from "./pages/ComingSoon";
import Impressum from "./pages/legal/Impressum";
import Datenschutz from "./pages/legal/Datenschutz";
import Agb from "./pages/legal/Agb";
import Avv from "./pages/legal/Avv";
import NotFound from "./pages/NotFound";

/**
 * React Router springt von sich aus weder zu einem Anker noch nach oben.
 * Ohne das hier landet man nach jedem Seitenwechsel auf halber Höhe der neuen
 * Seite — und Links wie /#kontakt von der Preisseite aus tun gar nichts.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Ein Frame warten, damit das Ziel gerendert ist, bevor gescrollt wird.
      const id = requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      });
      return () => cancelAnimationFrame(id);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);

  return null;
}

/**
 * Vorschau-Modus. Einmal beim Laden aus der Adresszeile gelesen und dann als
 * Modul-Konstante festgehalten — deshalb bleibt er auch dann bestehen, wenn man
 * anschließend im Menü weiterklickt und React Router den Query-Parameter aus der
 * URL nimmt. Ein echter Neuladen ohne Parameter beendet ihn wieder.
 * Zweck: die fertige Seite ansehen, ohne `comingSoon` umzulegen.
 */
const previewMode =
  typeof window !== "undefined" &&
  Boolean(previewKey) &&
  new URLSearchParams(window.location.search).get("vorschau") === previewKey;

const showSite = !comingSoon || previewMode;

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <ScrollManager />
      {showSite && <Nav />}
      <main id="main">
        <Routes>
          <Route path="/" element={showSite ? <Home /> : <ComingSoon />} />
          <Route path="/preise" element={showSite ? <Preise /> : <ComingSoon />} />
          {/* Hinter derselben Coming-Soon-Sperre wie Start- und Preisseite —
              sie tragen Verkaufsinhalte, keine Pflichtangaben. */}
          <Route
            path="/warum-eine-website"
            element={showSite ? <WarumWebsite /> : <ComingSoon />}
          />
          <Route
            path="/warum-auslage"
            element={showSite ? <WarumAuslage /> : <ComingSoon />}
          />
          <Route path="/fragen" element={showSite ? <Fragen /> : <ComingSoon />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<Agb />} />
          <Route path="/avv" element={<Avv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showSite && <Footer />}
    </>
  );
}
