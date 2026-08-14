import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { comingSoon } from "./content/site";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Preise from "./pages/Preise";
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

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <ScrollManager />
      {!comingSoon && <Nav />}
      <main id="main">
        <Routes>
          <Route path="/" element={comingSoon ? <ComingSoon /> : <Home />} />
          <Route path="/preise" element={comingSoon ? <ComingSoon /> : <Preise />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<Agb />} />
          <Route path="/avv" element={<Avv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!comingSoon && <Footer />}
    </>
  );
}
