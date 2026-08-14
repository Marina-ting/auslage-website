import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Included from "../components/Included";
import Packages from "../components/Packages";
import Why from "../components/Why";
import Limits from "../components/Limits";
import Process from "../components/Process";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import CtaBand from "../components/CtaBand";
import { useDocumentMeta, useReveal } from "../lib/useReveal";

/**
 * Reihenfolge der Abschnitte — das ist die eigentliche Argumentation:
 *
 *  1 Hero       Wer bin ich, was kostet es, was bringt es
 *  2 Problem    Warum das dringend ist (Verlust, nicht Gewinn)
 *  3 Leistungen Was drin ist — Wert vor Preis
 *  4 Pakete     Der Preis, verankert am Marktvergleich
 *  5 Warum      Die belegbaren Vorteile
 *  6 Grenzen    Was nicht drin ist — macht 5 erst glaubwürdig
 *  7 Ablauf     Der erste Schritt kostet fast nichts
 *  8 Über mich  Wer haftet dafür
 *  9 Fragen     Die Einwände, die vor der Zusage kommen
 * 10 Kontakt    Handlung
 */
export default function Home() {
  useDocumentMeta(
    "auslage – Websites für Betriebe im Bezirk Baden & Triestingtal",
    "Website-as-a-Service für lokale Betriebe im Bezirk Baden und Triestingtal. In rund zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat — inklusive Domain, Hosting, Wartung und Änderungen."
  );
  useReveal();

  return (
    <>
      <Hero />
      <Problem />
      <Included />
      <Packages />
      <Why />
      <Limits />
      <Process />
      <About />
      <Faq />
      <Contact />
      <CtaBand />
    </>
  );
}
