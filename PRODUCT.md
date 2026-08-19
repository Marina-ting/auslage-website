# auslage — Produktkontext

> Quelle der Fakten: Notion → „WaaS Auslage" → Backend → Resources
> (Seiten *Preismodell*, *Branding*, *Wettbewerbsanalyse: Herold*, *Vertrieb*).
> Stand dieser Datei: 2026-08-19.

## Was ist auslage

Website-as-a-Service für lokale Betriebe im Triestingtal (Niederösterreich).
Ein-Personen-Betrieb von Marina Zaiser, Berndorf.

Der Name ist der österreichische Begriff für Schaufenster. Die Metapher trägt das
ganze Produkt: die Website ist die Auslage des Betriebs im Netz.

## Wer kauft

Kleinstbetriebe, EPU und KMU im Bezirk — Handwerk, Gastro, Handel, Friseur,
Kfz-Werkstatt, Praxen. Menschen, die einen Betrieb führen und keine Zeit,
kein Interesse und kein Vokabular für Web-Technik haben.

**Was sie glauben, bevor sie hier landen:**
- „Eine gute Website kostet ein paar Tausend Euro."
- „Das dauert Monate und ich muss mich um tausend Dinge kümmern."
- „Ich bräuchte eigentlich eine, aber ich weiß nicht, wo ich anfangen soll."
- „Agenturen sind für Firmen, die größer sind als meine."

**Was sie eigentlich wollen** (Jobs to Be Done): nicht eine Website — sondern
gefunden werden und Anfragen bekommen. Die Website ist das Mittel.

## Angebot

| Paket | Einrichtung | Monatlich | Für wen |
|---|---|---|---|
| Starter | 200 € | 50 € | Kleinstbetriebe, EPU |
| Business | 300 € | 100 € | KMU mit mehreren Leistungen |
| Premium | 500 € | 150 € | Gastro, Handel, Praxen mit Buchung |

In allen Paketen: Wunschdomain + Firmen-E-Mail, Hosting & SSL, laufende Wartung,
Google-Business-Profil, SEO-Grundausstattung, inkludierte Änderungswünsche.

Mindestlaufzeit 12 Monate, kündbar mit einem Monat Frist zum Ende des zwölften
Vertragsmonats. Wird nicht gekündigt, läuft der Vertrag auf unbestimmte Zeit
weiter und ist mit einem Monat Frist zum Monatsletzten kündbar.
Ablöse-Gebühr bei Vertragsende (Quellcode + Inhalte): 100 / 150 / 250 €.

> **Korrigiert am 19.08.2026 (Werner).** Hier stand bis dahin „danach
> automatische Verlängerung um je 12 Monate, kündbar mit 3 Monaten Frist“. Das
> war ein Stand von vor der Anwaltsrunde: Die AGB §5 (`src/pages/legal/Agb.jsx`,
> anwaltlich final seit 16.08.2026) und die Preisseite (`pricingTerms` in
> `src/content/site.js`) nennen beide **einen Monat** und keine automatische
> Jahresverlängerung. Gemeldet hatte den Widerspruch Frau Knackal am 18.08.
> **Maßgeblich ist bei Laufzeit- und Kündigungsfragen immer die AGB**, nicht
> diese Datei — sie ist eine Zusammenfassung, kein Vertrag.
>
> **Jahreszahlung entfernt am 19.08.2026 (Werner).** Marina hat im Nadelöhr
> entschieden: „ganz weglassen und individuell beim Kunden entscheiden, wenn er
> danach fragt." Sie ist damit nicht verboten, wird aber nicht mehr öffentlich
> zugesagt — die Zeile „Jahreszahlung −10 %" ist hier ebenso raus wie die beiden
> Stellen in `src/content/site.js`.

## Belegbare Differenzierung

Nur das steht auf der Website. Nichts davon ist geschätzt oder gerundet worden.

1. **Einstiegspreis.** Marktrecherche (webse.at, erfasst 2026-08-01) nennt
   1.790–3.890 € einmalige Einrichtungskosten. auslage startet bei 200 €.
2. **Tempo.** Herold nennt in der eigenen FAQ 30–60 Tage Umsetzungsdauer
   (erfasst 2026-08-05). auslage: rund zwei Wochen.
3. **Eine Ansprechperson.** Ein-Personen-Betrieb, kein Ticketsystem.
4. **Erfahrung.** 15 Jahre Websites, Shops, SEO und Marketing.
5. **Regional.** Marina ist in Berndorf aufgewachsen und arbeitet von dort.

## Harte Grenzen für die Website

- **Kein Social Proof.** Es gibt noch keinen referenzierbaren Live-Kunden
  (Stand 2026-08-05: ein Betrieb im Onboarding, null Rechnungen). Keine
  Kundenzahlen, keine Testimonials, keine Logo-Leiste, keine erfundenen
  Erfolgsquoten. Der Abschnitt existiert nicht, statt leer zu wirken.
- **Keine künstliche Verknappung.** Keine Countdown-Timer, keine „nur noch
  3 Plätze". Die Zielgruppe misstraut so etwas, und es wäre gelogen.
- **Nichts, was nicht in Notion belegt ist.** Jede Zahl auf der Seite hat eine
  Quelle in `src/content/site.js` als Kommentar.

## Offene technische Punkte

- Telefon, WhatsApp und Google-Maps-Link stehen nicht fest → die zugehörigen
  Elemente werden bewusst nicht gerendert, statt Platzhalter zu zeigen.
- Hosting nicht final (Cloudflare Workers im Test) → Datenschutzerklärung
  nennt noch keinen Anbieter. **Ungeprüft:** im Gedächtnis ist Cloudflare
  Workers als gewählter Weg festgehalten, nicht als Test — vor dem Streichen
  bei Thomas gegenprüfen.

## Erledigt seit dem letzten Stand (nachgetragen 19.08.2026)

- `office@auslage.io` ist aktiv: `emailActive: true` in `src/content/site.js`
  (Zeile 51). auslage.io ist bei World4You registriert, die Cloudflare-Zone
  läuft, das Mail-Routing ist live. Der `mailto:`-Rückfall greift nicht mehr.
- Domain `auslage.io` ist live: `siteUrl` in `src/content/site.js` (Zeile 775)
  trägt `canonical` und `og:url` auf jeder Seite.
- Die Rechtstexte sind keine Arbeitsentwürfe mehr. Das Recht-Tor ist seit
  16.08.2026 geschlossen, die Texte sind anwaltlich final.
