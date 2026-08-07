# Auslage — Website (v2)

Marketing-Website für Auslage, das Website-as-a-Service-Angebot von Marina Zaiser
für Betriebe im Bezirk Baden und Triestingtal.

Nachfolger von `../auslage-website`. Übernommen wurden nur die Assets
(`public/`) und die geprüften Fakten; Aufbau, Texte und Gestaltung sind neu.

- [PRODUCT.md](PRODUCT.md) — wer kauft, was das Angebot ist, was auf der Seite
  nicht behauptet werden darf
- [DESIGN.md](DESIGN.md) — die visuelle Idee, Farbregeln, Kontrastgrenzen

## Starten

```bash
npm run dev
```

Läuft auf `http://localhost:5173`. Die erste Version belegt bei laufendem
Dev-Server bereits 5173 — dann:

```bash
npm run dev -- --port 5180
```

Weitere Skripte: `npm run build`, `npm run preview`, `npm run deploy`
(Cloudflare Workers, siehe `wrangler.jsonc`).

## Aufbau

```
src/
  content/site.js     ← Alle Texte, Preise und Zahlen. Nur hier ändern.
  styles/
    tokens.css        ← Farben, Schriftskala, Abstände, Bewegung
    base.css          ← Reset, Typografie, Raster, Fokus, Scroll-Reveal
    components.css    ← Button, Navigation, Karte, Rahmen, Formular
    sections.css      ← Die einzelnen Seitenabschnitte
  components/         ← Je Abschnitt eine Komponente, ohne eigenen Text
  pages/              ← Home, Preise, 404 und die Rechtstexte
  lib/useReveal.js    ← Scroll-Reveal und Titel/Meta pro Route
```

**Texte und Preise ändert man ausschließlich in `src/content/site.js`.** Die
Komponenten enthalten keine Inhalte. Jede belegbare Zahl steht dort mit ihrer
Notion-Quelle als Kommentar daneben.

## Faktenstand

Aus Notion → „WaaS Auslage" → Backend → Resources, Stand 2026-08-07:

| Paket | Einrichtung | Monatlich | Ablöse |
|---|---|---|---|
| Starter | 200 € | 50 € | 100 € |
| Business | 300 € | 100 € | 150 € |
| Premium | 500 € | 150 € | 250 € |

Zwei Vergleichszahlen tragen die Argumentation und stehen zentral in
`site.js` unter `proof`:

- Marktvergleich Einrichtungskosten 1.790–3.890 € (webse.at, 08/2026)
- Umsetzungsdauer des größten Mitbewerbers 30–60 Tage (dessen FAQ, 08/2026)

Ändern sich diese Quellen, muss `proof` mitgeändert werden — die Zahlen stehen
an mehreren Stellen der Seite und werden von dort gespeist.

## Offen vor dem Livegang

- [ ] **Rechtstexte prüfen lassen.** Impressum, Datenschutz, AGB und AVV sind
      Arbeitsentwürfe. Jede dieser Seiten zeigt aktuell einen sichtbaren
      Entwurfshinweis — dieser Hinweis wird in `pages/legal/LegalLayout.jsx`
      entfernt, sobald die Texte geprüft sind.
- [ ] **`office@auslage.io` aktivieren.** Danach `emailActive: true` in
      `site.js` setzen.
- [ ] **Kontaktformular auf ein Backend umstellen.** Es öffnet derzeit das
      Mailprogramm des Besuchers. Umbau in `components/Contact.jsx`
      (`handleSubmit`), danach Datenschutzerklärung ergänzen.
- [ ] **Domain live schalten.** Dann `canonical` und `og:url` in `index.html`
      ergänzen.
- [ ] **Hosting final entscheiden.** Datenschutz und AVV nennen bisher bewusst
      keinen Anbieter.
- [ ] **Plausible einbinden.** Auskommentiert in `index.html`, mit einem
      Conversion-Event auf das Absenden des Formulars.
- [ ] **Telefonnummer festlegen** (optional). Ohne sie werden Anruf-Elemente
      bewusst nicht gerendert.

## Geprüft

Automatisiert im Browser, Desktop (1265 px) und Mobil (375 px):

- Kein horizontaler Overflow; die Preistabelle scrollt in ihrem eigenen Container
- Alle Textkontraste erfüllen WCAG AA (4,5:1, bzw. 3:1 für großen Text)
- Überschriften-Hierarchie ohne Sprünge, genau ein H1 pro Seite
- Alle Trefferflächen ≥ 24 px
- Alle Bilder mit `alt`, dekorative Grafik `aria-hidden`
- Schriften werden selbst ausgeliefert, nur Latin-Subset

Offen: die rein visuelle Beurteilung (Rhythmus, Bildwirkung, Animationen im
Ablauf) — dafür muss die Seite im sichtbaren Browser betrachtet werden.
