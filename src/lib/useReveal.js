import { useEffect } from "react";

/**
 * Blendet alle .reveal-Elemente ein, sobald sie in den Viewport kommen.
 *
 * Ein einziger IntersectionObserver für die ganze Seite statt einer pro
 * Komponente. Elemente werden nach dem Einblenden nicht mehr beobachtet —
 * die Animation läuft einmal, nicht bei jedem Scrollen erneut.
 *
 * Bei prefers-reduced-motion wird gar nicht beobachtet: alles wird sofort
 * sichtbar geschaltet. Das CSS setzt den Startzustand in dem Fall ohnehin nicht.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Setzt Titel und Meta-Description pro Route.
 * Die Seite wird statisch ausgeliefert; ohne das behielte jede Unterseite
 * den Titel der Startseite.
 */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }
  }, [title, description]);
}
