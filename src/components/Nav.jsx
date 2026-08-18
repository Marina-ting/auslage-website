import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Der Knopftext stand hier bis 18.08. zweimal hart im Code (Header und
// Burger-Menü) und wurde deshalb bei jeder CTA-Änderung übersehen. Er kommt
// jetzt aus site.js wie jeder andere Sichttext auch.
import { nav, brandAssets, business, cta } from "../content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Beim Seitenwechsel schließen, sonst bleibt das Menü über der neuen Seite offen.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Escape schließt und gibt den Fokus an den Auslöser zurück.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <div className="nav__inner">
          <Link className="nav__logo" to="/" aria-label={`${business.name} – zur Startseite`}>
            <img src={brandAssets.logoLight} alt={business.name} width="613" height="321" />
          </Link>

          <nav aria-label="Hauptnavigation">
            <ul className="nav__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="nav__link" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <Link className="btn btn--primary" to={cta.href}>
              {cta.label}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="visually-hidden">
                {open ? "Menü schließen" : "Menü öffnen"}
              </span>
              <span className="nav__bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div id="nav-drawer" className={`nav__drawer${open ? " is-open" : ""}`}>
        <div className="container">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href} style={{ "--i": i }}>
                <Link className="nav__link" to={item.href} tabIndex={open ? 0 : -1}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="btn btn--primary"
            to={cta.href}
            tabIndex={open ? 0 : -1}
            style={{ "--i": nav.length }}
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
