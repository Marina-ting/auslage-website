import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Objection from "../components/Objection";
import Process from "../components/Process";
import Services from "../components/Services";
import Ownership from "../components/Ownership";
import References from "../components/References";
import About from "../components/About";
import Contact from "../components/Contact";
import CtaBand from "../components/CtaBand";
import { pageMeta } from "../content/site";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

/**
 * Die neun Blöcke der Blockfolge (Herr Rat, 17.08.; Texte Mark, freigegeben von
 * Marina am 18.08.). Die Reihenfolge IST die Argumentation und ist nicht nach
 * Optik sortiert:
 *
 *  1 Kopfbereich      Einwand als Frage, Ergebnis als Versprechen, ein CTA
 *  2 Vertrauensleiste Drei Ängste verneint plus ein Beweis
 *  3 Einwand          "Bei dir läuft alles offline. Wozu dann eine Website?"
 *  4 Ablauf           Die Entscheidung sichtbar am Ende, nicht am Anfang
 *  5 Was drin ist     Als Nutzen formuliert, mit der Preisfrage direkt daneben
 *  6 Was dir gehört   Das stärkste Argument — Risikoumkehr
 *  7 Referenzen       Rendert nicht, solange es keine Kundenseite gibt
 *  8 Marina           Mit Gesicht und Namen
 *  9 Kontakt          Handlung, derselbe CTA wie oben
 *
 * Was hier NICHT mehr steht und wohin es gewandert ist (Marina, 17.08.):
 *   problem → /warum-eine-website · why + limits → /warum-auslage ·
 *   faq → /fragen · packages → /preise (der Preis steht nur noch einmal,
 *   im Kopfbereich).
 * Die Texte sind nicht verworfen, sie tragen dort weiter.
 */
export default function Home() {
  useDocumentMeta(pageMeta.home.title, pageMeta.home.description);
  useReveal();

  return (
    <>
      <Hero />
      <Trust />
      <Objection />
      <Process />
      <Services />
      <Ownership />
      <References />
      <About />
      <Contact />
      <CtaBand />
    </>
  );
}
