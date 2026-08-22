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
 *  7 Referenzen       Zeigt im Leerzustand, dass noch niemand darin steht
 *  8 Marina           Mit Gesicht und Namen
 *  9 Kontakt          Handlung, derselbe CTA wie oben
 *
 * Der Block 6b "Belege" ist am 22.08.2026 wieder herausgefallen. Er stand vom
 * 20.08. bis dahin zwischen "Was dir gehört" und den Referenzen und trug die
 * Überschrift "Sie müssen mir nichts glauben.". Marina hat ihn im Nadelöhr
 * "Du sagst im Braindump, der Belege-Abschnitt wirkt deplatziert. Kommt er
 * raus?" mit Antwort A gestrichen: alle vier Belege stehen ohnehin an anderer
 * Stelle derselben Seite (Preise auf /preise, Internetadresse und Ablöse im
 * Block "Was dir gehört", Anschrift im Impressum und im Fußbereich). Der
 * Referenzblock darunter stand nicht zur Wahl und ist unverändert.
 *
 * Die Blockfolge ist damit wieder die neun Blöcke, die Marina am 18.08.
 * freigegeben hat. Wortlaut und Begründung des gestrichenen Abschnitts liegen
 * im Baubericht des Tasks; die Komponente liegt als
 * `Belege.jsx_entfernt-freilauf8_2026-08-22.jsx` in `waas\_to_delete`.
 *
 * ACHTUNG bei der Hintergrundfolge: Ownership (teal) → References (creme, im
 * Leerzustand bewusst OHNE `section--cream-alt`) → About (cream-alt). Wer den
 * Referenzblock anfasst, prüft, dass keine zwei gleichen Flächen aneinander
 * stoßen.
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
