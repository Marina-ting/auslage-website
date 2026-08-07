# Auslage — Design

**Modus: Persuade.** Die Startseite ist das Produkt. Marina verkauft Websites —
ihre eigene Seite ist der einzige Kompetenznachweis, den sie derzeit hat
(es gibt keine Referenzkunden). Die Seite muss also nicht nur überzeugen,
sondern selbst das beste Argument sein.

## Die visuelle Idee: die Auslage

Das Markenicon ist ein abgerundeter Fensterrahmen mit einer waagrechten
Ablage-Linie im unteren Drittel. Diese Form ist nicht nur Logo, sie ist die
**Layout-Grammatik der ganzen Seite**:

- **Rahmen** — Hero, Paketkarten und der Kontaktblock sitzen in gerundeten
  Rahmen mit sichtbarer Kante. Nichts schwebt konturlos.
- **Ablage-Linie** — eine dünne Terrakotta-Linie im unteren Drittel eines
  Elements ist das wiederkehrende Zeichen. Sie trennt Abschnitte, unterstreicht
  Überschriften und markiert die aktive Paketkarte.
- **Licht** — die Auslage ist abends beleuchtet. Warmer radialer Schein hinter
  dem Hero und hinter den Teal-Bändern. Terrakotta ist immer die Lichtquelle,
  nie nur Dekor.

Das ist bewusst kein SaaS-Look. Die Zielgruppe sind Handwerks-, Gastro- und
Handelsbetriebe im Bezirk, keine Startups.

## Farben

Aus Notion → Branding, unverändert übernommen.

| Token | Hex | Rolle |
|---|---|---|
| `--teal` | `#2F5D50` | Tiefe Flächen, Überschriften, Vertrauen |
| `--teal-deep` | `#234636` | Footer, Hover auf Teal |
| `--terracotta` | `#D9773F` | Buttons, Ablage-Linien, Licht |
| `--terracotta-text` | `#A34F20` | Terrakotta **als Text** auf Creme (5,3:1) |
| `--cream` | `#FBF6EE` | Grundfläche |
| `--cream-alt` | `#F3ECDD` | Abgesetzte Fläche |
| `--ink` | `#2B2420` | Fließtext |

**Kontrast-Regeln, die eingehalten werden müssen:**
- `--terracotta` (#D9773F) auf Creme erreicht nur 2,9:1 → **nie als Fließtext.**
  Nur als Fläche, Linie oder Text ab 24 px Bold. Für Text auf Creme gilt
  `--terracotta-text` (5,3:1).
- Beschriftung auf Terrakotta-Flächen ist `--ink`, nicht Weiß (4,9:1 statt 2,9:1).
- Creme auf Teal: 7,0:1. Ink auf Creme: 14,2:1.

## Typografie

- **Display:** Poppins 300 in großen Graden, 500/600 in kleinen. Poppins Light
  ist die Schrift der Wortmarke — die Seite spricht dieselbe Sprache.
  Negative Laufweite (`-0.03em`) ab 2 rem, sonst wirkt Poppins luftig-generisch.
- **Fließtext:** Inter 400/500. Neutral, auf kleinen Schriftgraden klar überlegen.
- **Skala** über `clamp()`, kein Breakpoint-Springen: die Seite skaliert stetig
  von 360 px bis 1440 px.
- **Zeilenlänge** max. 68 Zeichen im Fließtext (`--measure`).

## Rhythmus

Die Seite wechselt zwischen Creme (Argument), Teal (Nachdruck) und Creme-Alt
(Fakten). Zwei Teal-Bänder auf der Startseite — Problem und CTA — sind die
Atempausen, nicht mehr, sonst verliert Teal seine Wirkung.

Vertikaler Abstand: `--space-section` (clamp 5rem → 8rem). Jeder Abschnitt hat
denselben Rhythmus, damit die Seite als ein Stück liest.

## Motion

Zurückhaltend und einmalig, nichts wiederholt sich im Loop.

- Scroll-Reveal: 16 px Aufwärtsbewegung + Einblenden, gestaffelt in 60-ms-Schritten.
- Ablage-Linien zeichnen sich beim Sichtbarwerden von links nach rechts.
- Karten heben sich bei Hover um 3 px, Schatten wird wärmer.
- Navigation verdichtet sich nach 24 px Scroll.

**Alles hinter `prefers-reduced-motion: reduce` abgeschaltet** — Reveals werden
dann sofort sichtbar gerendert, nicht nur die Animation entfernt.

## Barrierefreiheit

Nicht nachgerüstet, sondern Bedingung (steht auch als Versprechen auf der Seite):

- Skip-Link als erstes fokussierbares Element.
- Sichtbarer Fokusring (`--terracotta-text`, 2 px, 2 px Offset) auf allem
  Interaktiven. Nie `outline: none` ohne Ersatz.
- FAQ als `<details>`/`<summary>` — funktioniert ohne JavaScript und ist
  nativ per Tastatur bedienbar.
- Mobile Navigation mit `aria-expanded`, `Escape` schließt, Fokus kehrt zurück.
- Alle Flächen ≥ 44 × 44 px Trefferfläche.
- Dekorative Grafik (Rahmen, Linien, Schein) ist `aria-hidden`.

## Was hier bewusst fehlt

- **Kein Testimonial-, Kunden- oder Logo-Abschnitt.** Siehe PRODUCT.md.
- **Kein Dark Mode.** Die Marke ist eine warme Creme-Marke; eine dunkle Variante
  wäre eine zweite Identität, keine Umschaltung.
- **Keine Icon-Bibliothek.** Die wenigen Zeichen sind Inline-SVG aus der
  Rahmen-Formsprache. Ein generisches Icon-Set würde die Idee verwässern.
