// ─────────────────────────────────────────────────────────────────────────────
// Einzige Inhaltsquelle der Auslage-Website.
// Komponenten enthalten keinen Text. Wer Preise oder Formulierungen ändern will,
// ändert nur diese Datei.
//
// Faktenbasis: Notion → "WaaS Auslage" → Backend → Resources
//   • Preismodell               (Stand 2026-08-05, runde Preise)
//   • Branding                  (Stand 2026-08-06, Farben/Wortmarke final)
//   • Wettbewerbsanalyse Herold (erfasst 2026-08-05)
// Jede belegbare Zahl trägt unten ihre Quelle als Kommentar.
//
// ANREDE: Die Seite siezt (Marina, 21.08.2026). Dazu gehört eine zweite,
// wichtigere Vorgabe von ihr — die Anrededichte:
//
//   Sie/Ihnen/Ihre steht dort, wo es um Besitz oder eine Handlung geht.
//   Überall sonst redet der Text über die Sache.
//
// Ein „Ihnen" wirkt nur, solange es selten ist. Wer einen Satz ergänzt, prüft
// deshalb zuerst, ob die Anrede darin überhaupt etwas trägt; wenn nicht,
// beschreibt der Satz die Sache („Die Seite läuft" statt „Ihre Seite läuft
// für Sie"). Kein Suchen-und-Ersetzen: aus „Damit dich findet, wer dich sucht"
// wird nicht „Damit Sie findet, wer Sie sucht", sondern „Gefunden werden, wenn
// jemand sucht."
//
// Zwei Ausnahmen: Die Tagline „deine auslage im netz" ist ein Markenname und
// wird nicht gebeugt. Und „auslage" bleibt immer klein, auch am Satzanfang
// (Regel 6) — im Zweifel den Satz umstellen.
// ─────────────────────────────────────────────────────────────────────────────

// Schalter für die Coming-Soon-Seite: true zeigt auf "/" und "/preise" nur die
// Platzhalterseite statt der echten Inhalte (siehe ComingSoon.jsx). Impressum,
// Datenschutz, AGB und AVV bleiben immer erreichbar (Impressumspflicht gilt
// unabhängig davon, ob die Seite "fertig" ist). Einfach auf false setzen und
// neu deployen, um die Seite wieder voll live zu schalten.
export const comingSoon = true;

// Vorschau-Schlüssel: Solange comingSoon aktiv ist, zeigt "/?vorschau=<Wert>"
// trotzdem die fertige Seite — zum Draufschauen während des Umbaus, ohne den
// Schalter oben umlegen (und womöglich so committen) zu müssen. Der Schlüssel
// bleibt für die ganze Sitzung aktiv, auch wenn man danach im Menü weiterklickt.
// Er ist kein Passwort: wer ihn kennt oder errät, sieht die Seite. Zum Ändern
// einfach einen anderen Wert eintragen.
export const previewKey = "werner";

// Schalter für die Reichweitenmessung: true, sobald das Cloudflare-Web-Analytics-
// Script tatsächlich eingebunden ist. Solange er false ist, blendet die
// Datenschutzerklärung den Abschnitt "Webanalyse" aus — eine Datenschutzerklärung
// darf keine Messung beschreiben, die technisch nicht läuft (geprüft 16.08.2026:
// auf auslage.io ist kein Analytics-Script eingebunden). Umlegen gemeinsam mit
// dem Einbau, Task "Analytics-Script auf auslage.io einbinden" (Bereich Thomas).
export const analyticsActive = false;

export const business = {
  name: "auslage",
  owner: "Marina Zaiser",
  tagline: "deine auslage im netz",
  // Nur noch das Triestingtal: Marina hat den Bezirk Baden am 15.08. aus dem
  // Zuschnitt genommen und am 20.08. im Nadelöhr (Option B) auch aus der
  // Gebietsangabe im JSON-LD. Susi hat index.html nachgezogen; das hier war
  // die letzte Fundstelle im src/. Der Wert wird derzeit nirgends gerendert —
  // wer ihn ausgibt, gibt ab jetzt den richtigen Zuschnitt aus.
  areaServed: "Triestingtal",
  address: {
    street: "Kruppstraße 24",
    postalCode: "2560",
    city: "Berndorf",
    country: "AT",
  },
  email: "office@auslage.io",
  // auslage.io bei World4You registriert, Cloudflare-Zone aktiv, Mail-Routing live
  // (office@/hallo@/support@/vertrieb@ → waas.auslage@gmail.com, "Senden als" in
  // Gmail konfiguriert). Quelle: Notion → Tasks Manager, Stand 2026-08-08.
  emailActive: true,
  // Die Business-Nummer steht seit 19.08.2026 (spusu-Wertkarte, keine
  // Rufnummernmitnahme, also endgültig). Marina hat sie sofort eintragen
  // lassen, damals noch vor der Freischaltung. Die eSIM ist seit 20.08.2026
  // aktiviert, die Nummer also erreichbar. Quelle: Notion → Task "Eigene
  // auslage-Business-Nummer". `phoneHref` ist dieselbe Nummer ohne Leerzeichen,
  // weil `tel:` keine verträgt.
  // WhatsApp läuft auf derselben Nummer (Marina, 19.08.). `whatsappHref` zeigt
  // auf wa.me, das die Nummer ohne Pluszeichen und ohne Leerzeichen verlangt.
  // Der Maps-Link steht weiter nicht fest; Komponenten, die ihn bräuchten,
  // rendern nicht — bewusst kein Platzhalter.
  phone: "+43 670 3532122",
  phoneHref: "tel:+436703532122",
  whatsapp: "+43 670 3532122",
  whatsappHref: "https://wa.me/436703532122",
  googleMapsLink: null,
};

// ─── Belegbare Vergleichszahlen ──────────────────────────────────────────────
// Diese drei Werte tragen die halbe Argumentation der Seite. Sie stehen hier
// zentral, damit sie nicht an mehreren Stellen auseinanderlaufen.
export const proof = {
  // Notion → Preismodell: "Setup-Gebühren als Spanne recherchiert (webse.at:
  // 1.790–3.890 € Einmalkosten)". Erfasst 2026-08-01.
  marktSetupVon: "1.790 €",
  marktSetupBis: "3.890 €",
  marktQuelle: "Marktvergleich webse.at, recherchiert 08/2026",

  // Notion → Preismodell / Wettbewerbsanalyse Herold: Herold nennt in der eigenen
  // FAQ 30–60 Tage Umsetzungsdauer. Erfasst 2026-08-05.
  mitbewerbDauer: "30 bis 60 Tage",
  mitbewerbQuelle: "laut FAQ eines großen österreichischen Mitbewerbers, 08/2026",

  eigeneDauer: "rund zwei Wochen",
  // Aus Marinas Bio (Notion → Branding / About). Keine gerundete Schätzung.
  jahreErfahrung: "15 Jahre",
  // Marina, 12.08.: "15 Jahre Erfahrung" stand ohne Bezugsgröße da und las sich
  // wie 15 Jahre Webdesign-Handwerk. Ehrlicher ist das Feld, in dem sie die Zeit
  // tatsächlich verbracht hat — deckungsgleich mit dem Über-mich-Abschnitt
  // (Websites, Onlineshops, Brandbuilding/Marketing). Bewusst nicht aufgeblasen.
  erfahrungClaim: "15 Jahre mit Websites & Onlinemarketing",
};

// ─── Verfügbarkeit ───────────────────────────────────────────────────────────
// Marina-Entscheidung 15.08.: grün mit dem Hinweis "verfügbar".
// Nachtrag 19.08.: Der Punkt soll sich bewegen ("der Verfügbar Punkt soll
// blinken"). Gebaut als langsames Atmen, nicht als Blinken — die Animation
// steht in sections.css unter `verfuegbar-puls` und fällt bei
// prefers-reduced-motion weg. Die drei-
// stufige Farblogik (grün verfügbar / gelb Wartezeit / rot ausgelastet) ist als
// Struktur angelegt, aber noch nicht in Betrieb — umgeschaltet wird über `state`,
// die Bezeichnungen sind laut Marina noch nicht final.
// Ungeprüft (Herr Rat, 15.08.): ob eine dauerhaft grüne Anzeige lauterkeits-
// rechtlich unbedenklich ist. Bei der nächsten Anwaltsrunde mitprüfen lassen.
export const availability = {
  state: "frei", // "frei" | "wartezeit" | "ausgelastet"
  label: "Verfügbar für neue Projekte",
};

// ─── Der eine Knopftext ──────────────────────────────────────────────────────
// Die Blockfolge (Herr Rat, 17.08.) verlangt EINEN einzigen CTA-Text auf der
// ganzen Seite. Marina hat ihn am 18.08. entschieden: "Jetzt anfragen"
// (Nadelöhr "Neuer CTA-Wortlaut", Option A). Er steht deshalb genau hier und
// wird von Hero, ctaBand, Nav und dem Absende-Knopf im Kontaktformular
// gelesen — vier Stellen, ein Wortlaut, eine Zeile zum Ändern.
// Damit fällt "Jetzt Auslage sichern" weg und mit ihm die einzige Stelle, an
// der der Markenname groß geschrieben wurde. Ab jetzt gilt "auslage" überall
// klein, ohne Ausnahme.
export const cta = { label: "Jetzt anfragen", href: "/#kontakt" };

// ─── Hero ────────────────────────────────────────────────────────────────────
// Headline als rhetorische Frage übers Suchverhalten statt über die Marken-
// Metapher (Auslage = Schaufenster): "Dein Betrieb hat eine Auslage" war als
// Prämisse falsch für alle ohne physisches Schaufenster (Handwerker, mobile
// Dienstleister) — der erste Satz widersprach der Realität eines großen Teils
// der Zielgruppe. Jobs-to-be-Done-Framing stattdessen: Kunden wollen gefunden
// werden, nicht "eine Auslage haben". Knüpft direkt an die Problem-Sektion an
// ("Wer nicht gefunden wird, wird auch nicht angerufen."). Marinas Wahl aus
// drei Vorschlägen (marketing-psychology + copywriting Skills), 2026-08-07.
export const hero = {
  // Der regionale Claim ist hier am 17.08. rausgeflogen (Marina: zu prominent
  // ausgesprochen). Susi hat den Wegfall SEO-seitig freigegeben, unter zwei
  // Bedingungen, die beide erfüllt sind: der Trust-Punkt "Aus Berndorf,
  // Niederösterreich" bleibt stehen, und die vollständige Adresse steht
  // sichtbar im Footer. Der Ortsbezug für die Suche sitzt in Title,
  // Description und im ProfessionalService-JSON-LD, nicht in dieser Zeile.
  // An ihre Stelle rückt das Geschäftsmodell — der eigentliche Unterschied
  // zu jedem anderen Webdesigner (Marinas Wahl aus drei Vorschlägen).
  eyebrow: "Website mieten statt kaufen",
  // Etappe 2 des Redesigns (17.08.): kürzer und ohne Frage. Behält das
  // Jobs-to-be-Done-Framing der Vorgänger-Headline ("Deine Kunden suchen
  // online. Finden sie dich?"), passt aber in zwei Zeilen — die alte Headline
  // füllte bei 1440x900 allein den ganzen ersten Bildschirm, Buttons und
  // Vertrauenszeile lagen unter der Kante.
  headline: "Gefunden werden,",
  headlineAccent: "wenn jemand sucht.",
  // Endfassung Block 1 (Mark, freigegeben von Marina am 18.08.). Gegenüber der
  // Fassung vom 17.08. um die Hälfte gekürzt: der Einstieg "Du willst online
  // gefunden werden" stand doppelt, das sagt die Headline schon. Aus "in rund
  // zwei Wochen" ist "in zwei Wochen" geworden — das "rund" hat nur genuschelt.
  subline:
    "Fehlt es an Zeit, Lust oder Technikwissen? Ich baue die Website für Ihren Betrieb und halte sie am Laufen. In zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat.",
  primaryCta: cta,
  // Zweiter Knopf wird Textlink (Marina, 17.08.): zwei Knöpfe nebeneinander
  // sind zwei Entscheidungen, und die Blockfolge lässt nur eine zu.
  secondaryLink: { label: "Pakete & Preise", href: "/preise" },
  // Die kleine Zeile unter dem Knopf. Sie trägt jetzt allein, was vorher im
  // Knopftext steckte: "Kostenloses Erstgespräch" hatte die Unverbindlichkeit
  // im Wort selbst, "Jetzt anfragen" ist eine reine Handlungsaufforderung.
  // Deshalb sichtbar und nicht ausgegraut — sie ist das Gegengewicht.
  // Die Zusage zur Antwortzeit steht nicht mehr hier, sondern unten im
  // Kontaktblock, dort, wo tatsächlich abgeschickt wird.
  ctaNote: "Kostenlos und unverbindlich.",
  // Der zweite Weg für alle, die lieber anrufen als tippen — Element 5 aus
  // Herr Rats Gestaltungsliste. Am 18.08. bewusst weggelassen, weil es keine
  // Nummer gab; die spusu-Wertkarte ist am 19.08. bestellt und die Nummer steht
  // seither in `business.phone`. Der Knopf trägt keinen Sichttext, deshalb
  // stehen hier nur die zwei Wörter für aria-label und Mauszeiger; die Nummer
  // selbst hängt der Kopfbereich daraus an, damit sie an einer Stelle bleibt.
  // Ohne `business.phoneHref` rendert der Knopf nicht.
  phoneCta: { label: "Anrufen" },
};

// ─── Block 2: Vertrauensleiste ───────────────────────────────────────────────
// Die frühere `hero.trustItems`-Zeile im Kopfbereich ist mit der neuen
// Blockfolge (18.08.) zu einem eigenen Abschnitt geworden: vier Kacheln statt
// drei Textpunkte. Aufbau nach Herr Rats Auswertung — DREI Ängste verneint und
// EIN Beweis, nicht vier Selbstlobe.
//
// Wortlaut seit 20.08.2026 neu (Marina, im Gespräch): "2x kein, 2x nicht kein,
// liest sich nicht rund". Die vier Zeilen standen in drei verschiedenen
// Bauformen — zwei Verneinungen, eine Zusage, ein Fakt. Jetzt tragen alle vier
// dieselbe Form: kurze Zusage, Komma, Zusatz. Die Argumentation darunter bleibt
// unverändert (drei Ängste, ein Beweis) — sie wird nur nicht mehr über die
// Verneinung transportiert, weil sich der Beweis nicht verneinen lässt, ohne
// klein zu werden.
// Marinas eigene Wendungen sind bewusst stehen geblieben: "Selberbefüllen" und
// "Überraschung auf der Rechnung" stammen aus ihrer freigegebenen Fassung vom
// 18.08. und werden nicht glattgeschliffen.
//
// Kachel 4 trägt "aus Berndorf" nicht dekorativ: Susi hat den Wegfall des
// regionalen Claims aus dem Kopfbereich genau unter der Bedingung freigegeben,
// dass der Ortsname im sichtbaren Text stehen bleibt. Nicht wegkürzen ohne
// Rückfrage bei ihr.
export const trust = {
  items: [
    { icon: "baukasten", text: "Fertig eingerichtet, nichts zum Selberbefüllen" },
    { icon: "rechnung", text: "Fixer Preis, keine Überraschung auf der Rechnung" },
    { icon: "adresse", text: "Die Internetadresse läuft auf Ihren Namen" },
    {
      icon: "erfahrung",
      // Zahl aus `proof`, damit sie nur an einer Stelle steht.
      // ENTSCHIEDEN am 20.08.2026 (Marina, Nadelöhr, Antwort B): Die Kurzform
      // bleibt. Sie nimmt der Zahl die Bezugsgröße, die Marina am 12.08. selbst
      // nachgetragen hatte ("las sich wie 15 Jahre Webdesign-Handwerk", siehe
      // `proof.erfahrungClaim`) — vorgelegt, abgewogen, so gewollt. Wer hier
      // wieder "Websites und Onlinemarketing" einsetzen will, fragt vorher nach:
      // es ist keine Nachlässigkeit, sondern eine Wahl.
      text: `${proof.jahreErfahrung} Erfahrung, aus Berndorf`,
    },
  ],
};

// ─── Block 3: Der Einwand ────────────────────────────────────────────────────
// Arbeitet MIT dem Einwand statt gegen ihn (marketing-psychology): Wer über
// Empfehlung lebt, macht etwas richtig — das wird zuerst bestätigt, bevor der
// Text zeigt, wo die Empfehlung heute trotzdem verloren geht.
// Die Langfassung dieses Blocks steht auf /warum-eine-website.
export const objection = {
  eyebrow: "Braucht es das überhaupt?",
  heading: "Im Betrieb läuft alles offline. Wozu dann eine Website?",
  paragraphs: [
    "Ihr Name wird weitergegeben, und der Nächste sucht ihn am Handy, bevor er anruft. Findet er nichts, landet der Auftrag woanders.",
    "Eine Website ersetzt keine Empfehlung. Sie ist das, was er findet, wenn er den Namen bei Google eintippt.",
  ],
  more: { label: "Die lange Fassung", href: "/warum-eine-website" },
};

// ─── Problem ─────────────────────────────────────────────────────────────────
// Steht seit 18.08. NICHT mehr auf der Startseite, sondern auf der eigenen
// Seite /warum-eine-website (Marina, 17.08.). Auf der Startseite trägt die
// Kurzfassung: `objection` (Block 3).
// Verlustaversion statt Gewinnversprechen: der Schmerz ist die verlorene Anfrage,
// nicht die fehlende Website. Bewusst ohne erfundene Prozentzahlen.
export const problem = {
  eyebrow: "Warum das zählt",
  heading: "Wer nicht gefunden wird, wird auch nicht angerufen.",
  body: "Wer heute einen Installateur, ein Wirtshaus oder einen Friseur sucht, tippt zuerst am Handy. Was dabei auftaucht, entscheidet, wer den Auftrag bekommt. Nicht, wer die bessere Arbeit macht.",
  points: [
    {
      title: "Gar keine Website",
      text: "Der Betrieb existiert online nur als Eintrag in einem Branchenverzeichnis, das jemand anderem gehört.",
    },
    {
      title: "Eine von vor zehn Jahren",
      text: "Am Handy unlesbar, halb kaputt, mit Öffnungszeiten, die seit drei Jahren nicht mehr stimmen.",
    },
    {
      title: "Eine, die niemand findet",
      text: "Sie ist da und sieht ordentlich aus, nur taucht sie bei Google nirgends auf.",
    },
  ],
  closing:
    "In allen drei Fällen ruft der Kunde bei jemand anderem an, meistens bei einem Betrieb, der nicht besser ist. Nur besser sichtbar.",
};

// ─── In jedem Paket enthalten ────────────────────────────────────────────────
// Wert-Stapel vor dem Preis: erst zeigen, was drin ist, dann was es kostet.
export const included = {
  eyebrow: "In jedem Paket",
  heading: "Alles, was eine Website zum Laufen braucht, inklusive.",
  intro:
    "Kein Baukasten-Abo zum Selberbefüllen und keine Rechnung im dritten Monat für etwas, das dabei zu sein schien.",
  items: [
    {
      title: "Wunsch-.at-Domain & Firmen-E-Mail",
      // Umformuliert 18.08.: inkludiert sind mehrere E-Mail-ADRESSEN, aber nur
      // EIN Postfach (Weiterleitung). "ein Postfach darauf" war missverständlich
      // in die andere Richtung. Quelle: Preismodell-Seite, Update 18.08.
      text: "Die eigene .at-Adresse und die E-Mail-Adressen darauf, die alle in ein Postfach laufen. Registrierung, Gebühren und Verwaltung sind im Paket.",
    },
    {
      title: "Hosting & SSL",
      text: "Die Seite läuft, ist verschlüsselt und braucht keinen Handgriff.",
    },
    {
      title: "Laufende Wartung",
      text: "Updates, Backups, Sicherheits-Checks und Erreichbarkeitsprüfung, alles im Hintergrund.",
    },
    {
      title: "Google-Business-Profil",
      text: "Eingerichtet, damit der Betrieb in der Kartensuche und rechts neben den Suchergebnissen auftaucht.",
    },
    {
      title: "SEO-Grundausstattung",
      text: "Saubere Struktur, Seitentitel und Beschreibungen, damit Google versteht, was der Betrieb macht.",
    },
    {
      title: "Änderungen inklusive",
      text: "Neue Öffnungszeiten, ein anderer Preis, ein aktuelles Foto: je nach Paket 1 bis 4 Änderungen pro Monat.",
    },
  ],
};

// ─── Glossar (Inline-Marker) ─────────────────────────────────────────────────
// Fachwörter, die im Text ein aufklappbares ⓘ tragen. Die ersten fünf sind
// Susis Auswahl (20.08.2026), ausgezählt am ausgelieferten HTML: Domain (13×),
// SEO (7×), Hosting (5×), SSL (3×), Google-Business-Profil (3×). Die vier
// weiteren (authinfo, abloese, quellcode, lokaleSeo) sind am 21.08.2026 aus
// Marinas Wunsch dazugekommen, die ⓘ auf der ganzen Seite zu zeigen und nicht
// nur in der Starter-Liste. Wortlaut von Mark, hier auf die Sie-Linie gebracht
// und durch copywriting, marketing-psychology und humanizer gelaufen.
//
// Der frühere Satz "Quellcode und Backup stehen absichtlich NICHT hier" gilt
// nur noch für "Backup": das ist ein Alltagswort, und an seinen Fundstellen
// erklärt der Satz es schon mit. "Quellcode" hat mit der Kaufoption und den
// Kündigungstexten eine eigene Bedeutung bekommen und steht jetzt drin.
//
// ── Die Obergrenze ist umgezogen ────────────────────────────────────────────
// Sie lag bei fünf Einträgen INSGESAMT. Jetzt gilt sie pro Bildschirm statt pro
// Datei: ein Wort trägt sein ⓘ nur beim ERSTEN Vorkommen auf einer Seite, jedes
// weitere bleibt nackt. Marinas Lob galt einer Liste, in der jedes Wort einmal
// vorkam; vier ⓘ auf "Domain" in einem Bildschirm wären lauter als gar keins.
// Werner-Entscheidung vom 21.08.2026, Begründung im Notion-Task.
//
// ── Wo ein Marker stehen darf ───────────────────────────────────────────────
// 1. Nur in Fließtext, den eine Komponente durch `GlossarText` schickt. Wo das
//    nicht passiert, steht die Klammer-Schreibweise als roher Text auf der
//    Seite. Welche Felder das heute sind, steht unten bei "Markierbare Felder".
// 2. NIE in einem Attribut (title, alt, placeholder, aria-label) und nie in
//    einem Wert, aus dem ein `key` gebaut wird — dort hilft `ohneGlossar`.
// 3. Nicht in Überschriften und nicht in Knopf- oder Linkbeschriftungen: der
//    Marker ist selbst ein Knopf, und ein Knopf im Knopf schaltet beides.
// 4. Nicht im Faktenblock (`facts`). Er ist die zitierfähige Faktenliste für
//    KI-Assistenten, absichtlich trocken; ein Erklärkasten mitten in einer
//    Tatsachenzeile arbeitet gegen den Zweck (Susi/Mark). Wenn Marina ihn dort
//    ausdrücklich will, ist das ihre Entscheidung.
// 5. Nicht auf Alltagswörtern (Kontaktformular, Öffnungszeiten, Backup). Trägt
//    jedes zweite Wort ein ⓘ, verliert das Zeichen seine Bedeutung.
//
// ── Markierbare Felder, Stand 22.08.2026 ────────────────────────────────────
// Geändert am 22.08.2026: Marina hat den Nadelöhr-Eintrag "ⓘ auf der ganzen
// Website: zwei Stellen liegen außerhalb von Werners Dateien" mit Antwort A
// entschieden (beides nachziehen). `src/pages/Preise.jsx` liegt in diesem Lauf
// in Werners Dateihoheit und schickt seither die Kauf- und Ablöse-Texte sowie
// die Preisseiten-FAQ durch `GlossarText`. Die Hälfte, die noch fehlt, ist
// `scripts/prerender.mjs` (Susi) — siehe den zweiten NEIN-Punkt unten.
// JA:   services.items[].text · ownership.items[].text · packages[].features[] ·
//       pricingPage.kauf.intro / .outro · pricingPage.ablöseText /
//       .ablöseTextQuellcode / .ablöseTextDomain · faq.items[].a, ABER erst,
//       wenn prerender.mjs nachgezogen ist (siehe unten).
// NEIN: included.items[] · pricingTerms · pricingPage.preisNote ·
//       pricingPage.ablöseTabelleCaption · facts.items[]. Die ersten drei sind
//       Rechts- und Konditionentext, in dem ein Erklärkasten nichts verloren
//       hat; die Bildunterschrift ist eine <caption>, der Faktenblock ist die
//       zitierfähige Liste (Punkt 4 oben).
// NEIN: faq.items[].q — die Frage steht in einem <summary>, ein Knopf darin
//       klappt beim Klick zusätzlich die ganze Frage auf oder zu.
// NEIN, ZWEITER GRUND, und der wiegt schwerer: scripts/prerender.mjs baut aus
//       faq.items[].q und [].a das FAQPage-JSON-LD von /fragen. Der Marker
//       landet dort UNVERÄNDERT im maschinenlesbaren Text, also genau in dem
//       Teil der Seite, der zitierfähig sein soll. Am 21.08.2026 im gebauten
//       dist/fragen.html nachgesehen, nicht vermutet. Solange prerender.mjs
//       den Text nicht durch `ohneGlossar` schickt, trägt KEINE FAQ-Antwort
//       einen Marker. Die Datei ist Susis Terrain und wurde nicht angefasst;
//       der Handgriff liegt als eigene Aufgabe bei ihr (22.08.2026).
//       `authinfo` trägt seit dem 22.08. trotzdem sein ⓘ, nämlich in
//       pricingPage.ablöseTextDomain auf /preise — Preise.jsx gibt den Text
//       seither durch GlossarText aus statt roh.
//
// Gesetzt werden die Marker mit der Schreibweise [[schlüssel|sichtbares Wort]]
// direkt im Sichttext; aufgelöst wird sie in src/lib/glossar.jsx. Wer einen
// Schlüssel hier umbenennt, muss auch die Marker im Text nachziehen — ein
// unbekannter Schlüssel lässt still nur das Wort stehen, ohne Erklärung.
//
// Die Texte sind bewusst kurz (drei Sätze) und beantworten die Frage "was heißt
// das für mich", nicht "wie funktioniert das technisch". Die Anrede folgt der
// Hauslinie vom 21.08.: "Sie" steht dort, wo es um Besitz oder eine Handlung
// des Kunden geht, sonst redet der Text über die Sache ("der Betrieb").
export const glossar = {
  domain:
    "Die Adresse der Website, also das, was jemand in die Adresszeile tippt, um beim Betrieb zu landen: zum Beispiel ihrbetrieb.at. Registriert wird sie auf Ihren Namen, nicht auf meinen. Gebühren und Verwaltung liegen bei mir, die Domain bei Ihnen.",
  hosting:
    "Der Platz, auf dem die Website liegt, damit sie Tag und Nacht erreichbar ist. Ohne Hosting gäbe es die Seite nur auf einem Rechner bei mir. Platz, Technik und Gebühren stecken im Monatspreis.",
  ssl:
    "Das kleine Schloss links in der Adresszeile. Es zeigt, dass die Verbindung verschlüsselt ist: Was jemand in das Kontaktformular tippt, kann unterwegs niemand mitlesen. Fehlt es, warnt der Browser die Besucher, bevor sie die Seite überhaupt sehen.",
  seo:
    "Kurz für Suchmaschinenoptimierung. Gemeint ist alles, damit Google versteht, was der Betrieb macht und wo er ist: Seitentitel, Beschreibungen und eine saubere Struktur. Ohne das steht die Seite zwar im Netz, wird aber kaum gefunden.",
  googleProfil:
    "Der Eintrag, der bei einer Suche rechts neben den Ergebnissen und in Google Maps auftaucht, mit Adresse, Öffnungszeiten, Telefonnummer und Fotos. Er ist von der Website unabhängig und wird in jedem Paket mit eingerichtet.",
  lokaleSeo:
    "Der Teil der Suchmaschinenarbeit, der auf die Umgebung zielt. Er sorgt dafür, dass der Betrieb auftaucht, wenn jemand in der Nähe sucht, samt Adresse, Öffnungszeiten und Kartenpunkt. Für einen Betrieb, dessen Kunden aus der Gegend kommen, ist das der wichtigere Teil.",
  authinfo:
    "Der Schlüssel, mit dem eine .at-Adresse von einem Anbieter zum nächsten umzieht. Wer ihn hat, kann den Umzug beauftragen, deshalb gebe ich ihn nur an Sie weiter. Nach Vertragsende bekommen Sie ihn binnen zwei Wochen von mir.",
  abloese:
    "Der einmalige Betrag, mit dem Sie die fertige Website übernehmen, wenn der Vertrag endet. Wie hoch er ist, hängt vom Paket ab. Sie bekommen dafür den Quellcode und dürfen die Seite selbst weiterbetreiben oder von jemand anderem betreuen lassen.",
  quellcode:
    "Die Dateien, aus denen Ihre Website besteht. Wer sie hat, kann die Seite auf einen anderen Server stellen und ändern lassen. Beim Mieten bleiben sie bei mir, mit der Ablöse gehen sie an Sie.",
};

// ─── Pakete ──────────────────────────────────────────────────────────────────
// Notion → Preismodell, Stand 2026-08-05.
// "Business" ist als Empfehlung markiert, nicht als Bestseller: mit einem Betrieb
// im Onboarding wäre eine Beliebtheitsbehauptung schlicht gelogen.
export const packages = [
  {
    name: "Starter",
    setup: "200 €",
    monthly: "50 €",
    forWhom: "Kleinstbetriebe und EPU",
    pitch: "Eine Seite, die den Betrieb findbar macht und erreichbar hält.",
    features: [
      "Startseite plus bis zu 2 weitere Bereiche",
      // 18.08.: mehrere Adressen, ein Postfach — siehe included.items[0].
      // Die [[…]]-Marker sind das Inline-Glossar (src/lib/glossar.jsx).
      // GEÄNDERT am 21.08.2026: Sie stehen nicht mehr NUR hier. Marina wollte
      // die ⓘ auf der ganzen Website, deshalb tragen sie jetzt auch Blöcke auf
      // der Startseite und eine Antwort auf /fragen. Der alte Grund für die
      // Beschränkung bleibt trotzdem gültig, nur enger gefasst: innerhalb der
      // Pakettabelle stehen sie weiter allein in der Starter-Liste, weil
      // Business und Premium "Alles aus Starter" sagen und die Wörter sonst
      // dreimal mit demselben ⓘ kämen. Business ergänzt genau ein neues Wort
      // (Lokale SEO), Premium keines.
      // Sichtbar sind die Marker dieser Liste auf /preise — die Paketkarten
      // stehen seit dem Startseiten-Umbau vom 17.08. nur noch dort. Kommt eine
      // Karte je zurück auf die Startseite, prüfen: PackageCard zeigt ohne
      // `detailed` nur die ersten vier Zeilen, die SEO-Zeile fiele dann weg —
      // und die Startseite trüge dieselben Wörter dann doppelt.
      "Wunschadresse mit [[domain|.at-Endung]] & E-Mail-Adressen darauf, inklusive",
      "[[hosting|Hosting]], [[ssl|SSL]] & laufende Wartung",
      "[[googleProfil|Google-Business-Profil]] eingerichtet",
      "[[seo|SEO]]-Grundausstattung",
      "Kontakt per Telefon-, Mail- und WhatsApp-Link",
      "bis zu 1 Änderungswunsch pro Monat, umgesetzt in 5 Werktagen",
    ],
    ablöse: "100 €",
  },
  {
    name: "Business",
    setup: "300 €",
    monthly: "100 €",
    forWhom: "KMU mit mehreren Leistungen",
    pitch: "Der Betrieb mit allem, was er anbietet, und ein Formular, das Anfragen bringt.",
    recommended: true,
    recommendLabel: "Passt für die meisten Betriebe",
    features: [
      "Alles aus Starter",
      "Leistungen, Über uns und mindestens ein weiterer Bereich",
      "Kontaktformular",
      "Öffnungszeiten, Adresse & Routenlink",
      "[[lokaleSeo|Lokale SEO]]-Basis",
      "bis zu 2 Änderungswünsche pro Monat, umgesetzt in 3 Werktagen",
    ],
    ablöse: "150 €",
  },
  {
    name: "Premium",
    setup: "500 €",
    monthly: "150 €",
    forWhom: "Gastro, Handel und Praxen mit Terminbuchung",
    pitch: "Wenn Kunden nicht nur anrufen, sondern gleich buchen sollen.",
    features: [
      "Alles aus Business",
      {
        text: "Eigene Seite, damit auch ChatGPT & Co. den Betrieb richtig wiedergeben",
        tag: "Früh dran",
      },
      "Buchungstool eingebunden",
      "Interaktive Karte, datenschutzfreundlich per Klick geladen",
      "Laufende SEO-Betreuung",
      "bis zu 4 Änderungswünsche pro Monat, umgesetzt in 48 Stunden",
    ],
    ablöse: "250 €",
  },
];

// Der Umsatzsteuer-Punkt trägt seit 21.08.2026 die Endpreis-Linie. Marina hat
// im Nadelöhr „Die Preisseite sagt zzgl. USt, AGB und Rechnung sagen keine USt
// — welcher Satz gilt?" Antwort A entschieden: der Satz, der schon auf der
// Rechnung steht, gilt wortgleich auch in Angebot, Auftragsbestätigung und auf
// der Preisseite. Er steht deshalb hier Wort für Wort so wie dort und wird
// nicht umformuliert.
//
// KORREKTUR zur Vorgängerfassung, weil sie sonst weiter zitiert wird: Bis zum
// 21.08. stand hier „Alle Preise verstehen sich zuzüglich gesetzlicher
// Umsatzsteuer.", begründet mit „Die AGB sagen das seit längerem". Diese
// Begründung war falsch. AGB Punkt 4 sagt zu den laufenden Preisen das
// Gegenteil („es wird daher keine Umsatzsteuer ausgewiesen"); das „zuzüglich
// allfälliger gesetzlicher Umsatzsteuer" steht in Punkt 7 und gilt nur für die
// künftige Quellcode-Ablöse. Der Satz war der einzige Ausreißer gegenüber AGB,
// Rechnung, Angebot und Auftragsbestätigung.
//
// Bewusst NUR dieser eine Satz und keine Rechenhilfe daneben: Der Gedanke
// „unsere Kunden holen sich die Umsatzsteuer ohnehin als Vorsteuer zurück"
// stimmt für die Zielgruppe dieser Seite nicht durchgehend. Kleinstbetriebe
// und EPU sind oft selbst Kleinunternehmer und dann nicht vorsteuerabzugs-
// berechtigt. Ein solcher Satz wäre für einen Teil der Leser schlicht falsch.
//
// NICHT auf /fragen übernehmen: Marina hat die Umsatzsteuer-Zeile am 18.08.
// ausdrücklich nicht im Faktenblock haben wollen, der Wortlaut dort ist als
// Endfassung markiert.
export const pricingTerms = [
  "Gemäß § 6 Abs. 1 Z 27 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen. Der ausgewiesene Betrag ist der Gesamtbetrag.",
  "Mindestlaufzeit 12 Monate, kündbar mit einem Monat Frist zum Ende des zwölften Vertragsmonats.",
  "Wird nicht gekündigt, läuft der Vertrag auf unbestimmte Zeit weiter — kündbar mit einem Monat Frist zum Monatsletzten.",
  "Änderungswünsche gelten für den laufenden Monat und verfallen am Monatsende.",
  "Größere Erweiterungen (neue Bereiche oder Funktionen) werden vorher angeboten und separat verrechnet.",
];

// ─── Warum Auslage ───────────────────────────────────────────────────────────
export const why = {
  eyebrow: "Warum auslage",
  heading: "Drei Gründe, die sich nachrechnen lassen.",
  items: [
    {
      title: "Der Einstieg tut nicht weh",
      text: `Vergleichbare Websites starten bei anderen Anbietern bei ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig. Bei auslage sind es 200 €. Es braucht kein halbes Jahresbudget, nur um herauszufinden, ob es etwas bringt.`,
      footnote: proof.marktQuelle,
    },
    {
      title: "Zwei Wochen statt zwei Monate",
      text: `Ein großer österreichischer Mitbewerber nennt selbst ${proof.mitbewerbDauer} Umsetzungsdauer. Bei mir ist die Seite in ${proof.eigeneDauer} online, vorausgesetzt, ich bekomme Texte und Fotos zügig.`,
      footnote: proof.mitbewerbQuelle,
    },
    {
      title: "Immer dieselbe Person am anderen Ende",
      text: "Kein Ticketsystem, keine wechselnden Ansprechpartner, keine Warteschleife. Sie schreiben mir, ich antworte. Das ist der Vorteil eines Ein-Personen-Betriebs, und der einzige Grund, warum Änderungen in 48 Stunden überhaupt möglich sind.",
    },
  ],
};

// ─── Was Auslage nicht ist ───────────────────────────────────────────────────
// Pratfall-Effekt: eine offen genannte Schwäche macht die übrigen Behauptungen
// glaubwürdiger. Diese Abgrenzungen stehen so auch in der Wettbewerbsanalyse —
// der niedrige Grundpreis ist genau deshalb möglich.
export const limits = {
  eyebrow: "Ehrlich gesagt",
  heading: "Was auslage nicht ist.",
  intro:
    "Der Preis funktioniert, weil das Angebot schlank ist. Das heißt aber auch: manches ist nicht dabei. Besser jetzt gesagt als nach der Auftragsbestätigung.",
  items: [
    {
      title: "Keine Rundum-Agentur",
      text: "Zusatzleistungen sind möglich, wenn ein Betrieb mehr braucht als die Website selbst. Automatisch inklusive sind sie aber nicht. Angeboten und verrechnet werden sie separat, sonst müsste der Grundpreis für alle höher sein.",
    },
    {
      title: "Kein Online-Shop",
      text: "Ich baue Websites, die Anfragen und Kunden in den Betrieb bringen. Einen Webshop mit Lager, Versand und Zahlungsabwicklung nicht. auslage macht den Betrieb sichtbar, verkauft aber nicht für ihn.",
    },
    {
      title: "Die Texte kommen aus dem Betrieb",
      text: "Den Betrieb kennen Sie, ich nicht. Ich frage, sortiere, formuliere um und mache daraus etwas Lesbares, aber der Inhalt kommt aus dem Betrieb. Wer stattdessen fertige Texte vom Anbieter will, ist bei einer größeren Agentur besser aufgehoben.",
    },
    {
      title: "Keine Bindung ohne Gegenleistung",
      text: "12 Monate Mindestlaufzeit sind eine Bindung, das verschweige ich nicht. Sie ist der Grund, warum die Einrichtung 200 € kostet statt 2.000 €. Wer sich nicht binden will, zahlt bei anderen Anbietern die Einrichtung voll. Auch ein legitimer Weg.",
    },
  ],
};

// ─── Ablauf ──────────────────────────────────────────────────────────────────
// Startenergie senken: der erste Schritt kostet den Kunden fast nichts.
// Endfassung Block 4 (18.08.): aus drei Schritten vier. Die Kauf-Entscheidung
// ist damit als eigener Schritt sichtbar und sitzt NICHT am Anfang — das war
// Herr Rats Punkt an der Blockfolge. Das Vorbild lässt das Ja erst nach einer
// fertigen Gratis-Vorschau fallen; die gibt es bei auslage (noch) nicht, und ob
// es sie geben soll, liegt als eigener Nadelöhr-Eintrag bei Marina. Bis dahin
// beschreibt der Block, wie es wirklich läuft: Kaufentscheidung bei 02, Ja zum
// Livegang bei 04. Nichts hier behauptet eine Vorschau.
export const process = {
  eyebrow: "So läuft es ab",
  heading: "Vier Schritte, und keiner kostet einen Nachmittag.",
  steps: [
    {
      number: "01",
      title: "Kurz reden",
      text: "Ein Anruf oder ein paar Zeilen. Kostenlos und unverbindlich.",
    },
    {
      number: "02",
      title: "Angebot",
      text: "Fester Preis, festes Paket. Sie entscheiden.",
    },
    {
      number: "03",
      title: "Ich baue",
      // ERGÄNZT am 21.08.2026 aus Marinas Braindump. Sie wollte zwei Dinge
      // drin haben: dass der Kunde von seinem Betrieb erzählt, und die alte
      // Seite als Textquelle. Ihre Bedingung war, dass der Schritt ins
      // Gesamtbild der vier Karten passt, und das war meine Entscheidung.
      // Am Bild geprüft (1440×900 und 390×844): diese Fassung braucht in der
      // Spalte vier Zeilen. Die kürzere Ersatzfassung ohne die alte Seite
      // ("...und schickst mir Texte und Fotos") braucht dort ebenfalls vier
      // Zeilen, weil die Spalte schmal ist. Sie kostet also einen von Marinas
      // zwei Punkten und gewinnt optisch nichts. Deshalb diese hier.
      text: "Sie erzählen mir, was der Betrieb anbietet. Texte und Fotos kommen von Ihnen oder von der alten Seite.",
    },
    {
      number: "04",
      title: "Live und betreut",
      text: "Online geht die Seite erst mit Ihrem Ja.",
    },
  ],
};

// ─── Block 5: Was drin ist (Startseite) ──────────────────────────────────────
// Bewusst eine ZWEITE Fassung neben `included`, nicht dessen Ersatz.
// `included` (Karten mit Erklärabsatz) steht weiter auf /preise — dort liest
// jemand, der schon interessiert ist, und dort darf es ausführlich sein.
// Hier auf der Startseite trägt die Häkchenliste: ein Stichwort, eine Zeile.
// Marina, 18.08.: die Zeilen sind bewusst gleich lang gehalten, unterschiedliche
// Längen fallen bei einer Häkchenliste sofort auf. Wer hier kürzt oder ergänzt,
// hält die Länge — sonst franst die Liste optisch aus.
export const services = {
  eyebrow: "In jedem Paket",
  heading: "Alles, was eine Website zum Laufen braucht, inklusive.",
  items: [
    // Erstes Vorkommen von ".at" und "verschlüsselt" auf der Startseite, also
    // tragen genau diese beiden das ⓘ. "Hosting" bekommt hier bewusst keines:
    // Das Wort steht nur in der fetten Beschriftung, und die Erklärung klappt
    // am Ende ihres eigenen Elements auf — sie stünde also mitten in der Zeile
    // und fett, statt darunter. Begründung im Notion-Task vom 21.08.
    { label: "Adresse und E-Mail", text: "Wunschadresse auf [[domain|.at]], dazu Adressen wie office@" },
    { label: "Hosting und Sicherheit", text: "läuft [[ssl|verschlüsselt]], ohne Handgriff im Betrieb" },
    { label: "Google-Karte", text: "der Betrieb mit Adresse und Öffnungszeiten" },
    { label: "Gefunden werden", text: "Titel, Beschreibungen und Struktur richte ich ein" },
    { label: "Wartung", text: "Updates, Backups und Sicherheits-Checks übernehme ich" },
    { label: "Änderungen", text: "neue Öffnungszeiten oder ein neues Foto, monatlich" },
  ],
  // Steht klein unter der Liste. Die Ein-Postfach-Klarstellung ist keine
  // Kosmetik: inkludiert sind mehrere E-Mail-ADRESSEN, aber nur EIN Postfach
  // (Weiterleitung). Festgehalten auf der Preismodell-Seite, Update 18.08.
  // Für alle Texte gilt seither: "E-Mail-Adressen" versprechen, nie
  // "Postfächer" im Plural.
  note: "Alle E-Mail-Adressen laufen in ein Postfach. Wie viele Änderungen im Monat drin sind, hängt vom Paket ab.",
  // Nimmt die Haken-Frage vorweg, statt sie im Kopf des Lesers stehen zu lassen.
  // "Kein Büro" ist am 18.08. als Verkaufsargument gestrichen worden — es stimmt
  // nicht. Nicht wieder einsetzen.
  priceReasonHeading: "Warum das zu dem Preis geht",
  priceReasons: [
    "Eine Person. Kein Ticketsystem, keine Zwischenebene.",
    "Schlankes Angebot. Kein Shop, keine Sonderprogrammierung.",
    "Die Einrichtung ist nicht auf einen Schlag fällig. 200 € am Anfang, den Rest trägt der Monatspreis über die Laufzeit.",
  ],
};

// ─── Block 6: Was Ihnen gehört ─────────────────────────────────────────────────
// Herr Rat: der Block, den ein Miet-Anbieter normalerweise nicht haben kann,
// und deshalb das stärkste Argument der Seite. Risikoumkehr, gehört in den
// Verkaufsteil und nicht in eine FAQ.
// AUSDRÜCKLICH KEINE Vergleichsaussage über Mitbewerber: ein Satz wie "bei
// Mietmodellen ist nach der Kündigung alles weg" ist für EINEN Anbieter geprüft,
// nicht für Mietmodelle allgemein. Der Block trägt nur, was für auslage gilt.
export const ownership = {
  eyebrow: "Was Ihnen gehört",
  heading: "Die Website ist gemietet. Die Internetadresse gehört Ihnen.",
  items: [
    {
      label: "Die Internetadresse",
      text: "läuft vom ersten Tag an auf Ihren Namen",
    },
    {
      label: "Die Inhalte",
      text: "nach Vertragsende kostenlos zurück, Texte, Bilder und Logos als Dateien",
    },
    {
      label: "Die Seite selbst",
      text: "[[abloese|Ablöse]] ab 100 €, je nach Paket. Danach läuft sie ohne mich weiter.",
      badge: "ab 100 €",
    },
  ],
};

// ─── Block 7: Referenzen ─────────────────────────────────────────────────────
// Bleibt leer, bis die erste Kundenseite online ist. Werner-Entscheidung beim
// Einbau (18.08.): die Komponente existiert, rendert aber nichts, solange
// `items` leer ist — wie bei about.photo und business.phone. Ein Abschnitt mit
// erfundenen oder Platzhalter-Zitaten wäre auf einer Seite, die mit Ehrlichkeit
// argumentiert, der teurere Fehler.
// Aufbau pro Karte, wenn befüllt wird: `title` (was der Betrieb macht, plus
// Ort), `quote` (ein Satz vom Kunden, wörtlich und unspektakulär), `name`,
// `company`, `href`. Die Zitate sollen bestätigen, was oben versprochen wird
// (unkompliziert, schnell, wenig Aufwand) — das Design loben sie nicht.
export const references = {
  eyebrow: "Aus der Nachbarschaft",
  heading: "Betriebe, die schon online sind.",
  items: [],
  // Was im Referenzblock steht, solange `items` leer ist. Marina hat am
  // 20.08.2026 im Nadelöhr Antwort B gewählt: der leere Block bleibt nicht
  // leer, sondern sagt selbst, dass noch niemand darin steht. Wortlaut von
  // Mark, freigegeben, nicht bearbeiten. Der `eyebrow` oben bleibt stehen —
  // "Aus der Nachbarschaft" trägt beide Zustände.
  //
  // Sobald die erste echte Referenz in `items` steht, fällt dieser Text von
  // selbst weg (References.jsx prüft die Länge). Er darf nicht stehenbleiben:
  // "Hier steht noch niemand" neben einer Referenzkarte wäre schlicht falsch.
  // Gekürzt am 21.08.2026 auf Marinas Entscheidung (Nadelöhr "Belege-Block und
  // Referenzblock beginnen fast gleich. Den zweiten Text kürzen?", Antwort A):
  // "Der Referenzblock trägt nur noch den einen Satz, den er zusätzlich sagt."
  //
  // Der eine Satz ist dieser: was hier später stehen wird und dass es echt ist.
  // Alles andere aus der Langfassung (nachlesen, Preise, Vertrag, Impressum)
  // stand bis zum 22.08.2026 im Belege-Block darüber. Der ist mit Marinas
  // Antwort A gestrichen; die vier Belege stehen weiter auf /preise, im Block
  // "Was dir gehört", im Impressum und im Fußbereich.
  // Der Bezug ist gegenüber der Langfassung aufgelöst ("sie" hing am
  // gestrichenen Vorsatz "Die erste Seite ist im Bau"), sonst steht der Wortlaut
  // unverändert. Die Langfassung steht im Task-Bericht, falls sie je zurück soll.
  leer: {
    heading: "Hier steht noch niemand.",
    text: "Sobald die erste Kundenseite online ist, steht der Betrieb hier mit Namen und mit einem Satz, den er selbst geschrieben hat.",
  },
};

// ─── Über Marina ─────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "Wer dahintersteckt",
  heading: "Ich bin Marina.",
  // Umbau 15.08. (Marina, 12.08.): weg von vier Fließtext-Absätzen, hin zu
  // Stationen — Marke links, ein Satz rechts.
  //
  // Textwechsel 17.08. (Marina): Der lange "Über mich"-Text aus Marks Task
  // ersetzt die bisherigen vier Kurz-Stationen. AUSDRÜCKLICH KEINE eigene Route
  // /ueber-mich — der bestehende Anker /#ueber-mich bleibt, das Design bleibt
  // unverändert, nur der Text wechselt.
  // Gültige Fassung ist der Abschnitt "Finaler Text" im Notion-Task
  // 3be1b3c5-e9e0-8163-9b99-e908de7c59de (Bereich Mark), NICHT dieser Code und
  // nicht das Gedächtnis. Vor jeder Änderung dort nachlesen.
  // Die fünf Zwischenüberschriften des Textes sitzen als 4 Stationen + closing:
  // der letzte Block ("Was das für dich heißt") ist bewusst das closing, weil
  // er der einzige ist, der nach vorne zum Kunden spricht statt zurück in die
  // Biografie.
  // Wortlaut nicht eigenmächtig glätten — Marinas Formulierungen sind einzeln
  // erkämpft (siehe Task-Protokoll). Windows, der Name der Blockchain, der Name
  // des Tech-Unternehmens und die Shop-Umsatzzahl bleiben endgültig draußen.
  lead: "Kurz, woher ich komme und warum es auslage gibt.",
  stations: [
    {
      label: "Aufgewachsen in Berndorf",
      text: "Meine Kindheit habe ich im Berndorf der Achtziger und Neunziger Jahre mit C64 und Gameboy verbracht. Mit sechzehn oder siebzehn habe ich mir „Programmieren für Dummies“ gekauft. Programmiererin ist keine aus mir geworden.",
    },
    {
      label: "Apotheke, Großhandel, Außendienst",
      text: "Nach den Pflichtschuljahren ging es in die Lehre. In der Pottensteiner Apotheke, damals noch mit Lochkarten, denn die ersten Barcodescanner bekamen wir erst später. Danach Pharmagroßhandel in Graz, drei Jahre später Wien, dann auf eigene Rechnung im Außendienst für Apothekenzulieferer.",
    },
    {
      label: "Seit 2010 eigene Projekte",
      text: "Websites, Blogs, Onlineshops, Tools. Bei Krypto und Blockchain war ich jahrelang tief drin. Mal mehr und ganz oft weniger erfolgreich. Das meiste habe ich mir selbst beigebracht und weiß inzwischen ziemlich genau, was ich kann und was nicht.",
    },
    {
      // Der Bindestrich in "E‑Commerce" ist ein geschützter (U+2011), sonst
      // bricht die 11rem breite Marken-Spalte das Wort auf "E-" / "Commerce"
      // um. Sieht in der Sichtprüfung bei 1440 px genau so aus. Nicht durch
      // einen normalen Bindestrich ersetzen.
      label: "Vorher im E‑Commerce, jetzt KI",
      text: "Zuletzt angestellt bei einer Apotheke mit eigener Nahrungsergänzungsmittel-Marke: Brandbuilding, Marketing, Logistik und die Betreuung des Onlineshops. Aktuell arbeite ich selbständig von zuhause aus für ein großes Tech-Unternehmen an KI-Werkzeugen für den medizinischen Bereich.",
    },
  ],
  // Achtung: Der bisherige closing-Satz trug die Triestingtal-Formulierung
  // (eingebaut 17.08. früher am Tag). Der freigegebene Text hat sie nicht — sie
  // ist mit diesem Wechsel aus dem Abschnitt verschwunden und liegt Marina als
  // offene Frage vor. Nicht stillschweigend wieder einsetzen.
  closing:
    "Alle diese Erfahrungen kombiniere ich heute mit KI und Google-Optimierung und baue damit Websites, die für uns arbeiten und nicht umgekehrt. Kein Verkaufs-Blabla, sondern eine Ansprechperson auf Augenhöhe. Sie kümmern sich um Ihr Tagesgeschäft, ich um Aufbau, Pflege, Auffindbarkeit und Technik Ihrer Website.",
  // Marina-Entscheidung 14.08., endgültig: kein Porträtfoto auf der Website.
  // Wie bei phone/whatsapp bewusst null statt Platzhalter — die Komponente
  // rendert den Bildteil dann gar nicht erst.
  photo: null,
  photoAlt: null,
  // Namenszeile am Ende gestrichen (Marina, 18.08.): die Überschrift sagt
  // schon "Ich bin Marina.", die Signatur darunter war eine Dopplung.
  // Wie photo bewusst null statt gelöscht — die Komponente rendert sie dann
  // gar nicht erst, und wer sie zurückwill, füllt eine Zeile.
  signature: null,
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Reihenfolge nach Einwandstärke: Geld und Bindung zuerst, Technik danach.
// Jede Frage trägt eine feste `id`. Sie steht als Anker im Markup, damit andere
// Seiten auf eine einzelne Frage verlinken können (/fragen#hosting-ssl-updates,
// Susi 19.08. für die ℹ︎-Verweise von der Preisseite). Die ids sind bewusst von
// Hand vergeben und NICHT aus dem Fragetext abgeleitet: eine umformulierte Frage
// darf bestehende Links nicht ins Leere laufen lassen. Wer eine Frage ergänzt,
// vergibt eine neue id; wer eine entfernt, prüft vorher, wer darauf zeigt.
export const faq = {
  eyebrow: "Was meistens gefragt wird",
  heading: "Die Fragen, die vor der Zusage kommen.",
  items: [
    {
      id: "mindestlaufzeit",
      q: "Warum 12 Monate Mindestlaufzeit?",
      a: "Weil die Einrichtung sonst nicht 200 € kosten könnte. Die eigentliche Arbeit steckt am Anfang: Aufbau, Domain, Google-Profil, Struktur. Andere Anbieter verrechnen das einmalig mit 1.790 € aufwärts. Ich verteile es über die Laufzeit. Die Bindung ist der Preis dafür, und sie gilt in beide Richtungen: ich bin die 12 Monate auch für Sie da.",
    },
    {
      id: "website-mitnehmen",
      q: "Kann ich meine Website mitnehmen, wenn ich kündige?",
      a: "Die Inhalte ja, und zwar kostenlos: Texte, Bilder, Logos, Firmendaten und alle Anfragen, die über die Website hereingekommen sind, gebe ich nach Vertragsende unentgeltlich in einem gängigen Format heraus. Eine Nachricht binnen drei Monaten genügt, dann sind sie binnen vier Wochen da. Den Quellcode gibt es gegen eine einmalige Ablöse: 100 € bei Starter, 150 € bei Business, 250 € bei Premium. Damit dürfen Sie die Website unbefristet selbst weiterbetreiben und weiterentwickeln lassen, von wem Sie wollen. Ausgenommen sind Bestandteile von Dritten wie Schriften, Bildmaterial und Softwarebibliotheken, für die eigene Lizenzen nötig sind — welche das sind, weise ich bei der Übergabe aus. Die Domain gehört ohnehin von Anfang an Ihnen.",
    },
    {
      id: "dauer-bis-online",
      q: "Wie lange dauert es, bis meine Website online ist?",
      a: "In der Regel rund zwei Wochen. Was es länger macht, ist fast immer dasselbe: Ich warte auf Texte oder Fotos. Liegen die bereit, geht es schnell.",
    },
    {
      id: "baukasten",
      q: "Kann ich das nicht selbst mit einem Baukasten machen?",
      a: "Die Website lässt sich bei mir auch einfach monatlich mieten, statt sie selbst zusammenzubauen: Grundsätzlich ja, und für manche ist das genau richtig. Rechnen Sie nur ehrlich mit: Der Baukasten kostet auch monatlich, dazu kommen Domain und meist ein Aufpreis fürs eigene Postfach. Der eigentliche Preis sind die Abende, die dabei draufgehen, und danach das Nachpflegen, das erfahrungsgemäß nach ein paar Monaten liegen bleibt.",
    },
    {
      id: "hosting-ssl-updates",
      q: "Muss ich mich um Hosting, SSL oder Updates kümmern?",
      a: "Nein. Das ist in jedem Paket enthalten und der Grund, warum es überhaupt ein Monatsmodell ist. Davon merkt man nichts, außer dass die Seite läuft.",
    },
    {
      id: "domain-und-email",
      q: "Sind Domain und E-Mail-Adresse wirklich inklusive?",
      a: "Ja, in allen drei Paketen. Die Wunsch-.at-Domain, sofern noch frei, und ein Firmen-Postfach darauf. Registrierung und laufende Gebühren übernehme ich, registriert wird sie aber auf Sie und nicht auf mich. Nach Vertragsende schicke ich binnen zwei Wochen die Authinfo, mit der die Domain zu einem beliebigen Anbieter umzieht; ab dann tragen Sie die Verlängerungskosten selbst. Nehmen Sie den Umzug binnen acht Wochen vor — danach wird die Domain nicht weiter verlängert und kann verfallen.",
    },
    {
      id: "faktenseite-ki",
      q: "Was ist die Faktenseite für KI-Suche im Premium-Paket?",
      a: "Eine zusätzliche Seite, die speziell für KI-Assistenten wie ChatGPT aufbereitet ist, statt für menschliche Besucher. Immer mehr Menschen fragen KI-Tools statt Google, wenn sie einen Betrieb in der Nähe suchen. Diese Seite sorgt dafür, dass die Antwort stimmt: richtige Öffnungszeiten, richtige Leistungen, richtige Adresse.",
    },
    {
      id: "seo-in-den-paketen",
      q: "Wie unterscheidet sich die Suchmaschinenoptimierung in den drei Paketen?",
      a: "In allen drei Paketen ist eine SEO-Grundausstattung dabei: saubere Struktur, Seitentitel und Beschreibungen, damit Google versteht, was der Betrieb macht. Ab Business kommt die lokale SEO-Basis dazu — wichtig, wenn die Kunden vor allem aus der Umgebung suchen. Bei Premium betreue ich die SEO laufend weiter, dazu kommt eine eigene Faktenseite, extra für KI-Assistenten wie ChatGPT aufbereitet, damit die auch die richtigen Infos über den Betrieb ausgeben.",
    },
    {
      id: "zusatzleistungen",
      q: "Was, wenn ich später etwas brauche, das über mein Paket hinausgeht?",
      a: "Dann schicke ich vorher ein Angebot dafür. Es wird nie etwas verrechnet, das nicht vorher freigegeben ist.",
    },
  ],
};

// Deutsche Aufzählung: "a, b und c". Nur hier gebraucht, deshalb keine eigene
// Datei. Bei einem einzigen Eintrag kommt schlicht dieser Eintrag heraus.
function aufzaehlung(teile) {
  if (teile.length < 2) return teile.join("");
  return `${teile.slice(0, -1).join(", ")} und ${teile[teile.length - 1]}`;
}

// ─── Faktenblock ─────────────────────────────────────────────────────────────
// Steht auf /fragen OBERHALB der Fragen. Zweck: harte, zitierfähige Angaben für
// KI-Assistenten und für Menschen, die nur nachschlagen wollen (Susi, 18.08.:
// "kein Marketing, nachprüfbar und langweilig"). Beschriftung plus Fakt in
// ganzen Sätzen, damit jede Zeile für sich zitierbar bleibt.
//
// DER WORTLAUT IST EINE ENDFASSUNG. Marina hat ihn am 18.08. in vier Runden
// Zeile für Zeile durchgesehen und am 19.08. im Nadelöhr freigegeben (Option A).
// Hier wird nicht umformuliert — wer etwas ändern will, holt vorher eine
// Freigabe. Quelle: Notion → Task "Faktenblock für die Fragen-Seite schreiben".
//
// Was bewusst NICHT drinsteht (alles Marina, 18.08.): die volle Anschrift (steht
// im Impressum), der Bezirk Baden (Kaumberg liegt im Bezirk Lilienfeld), die
// Umsatzsteuer-Zeile, die Antwortzeit (steht im Kontaktblock), die Fristen zur
// Datenherausgabe, die Kontaktformular-Nachrichten. Die Jahreszahlung ist am
// 19.08. ganz gestrichen und kommt auch später nicht herein.
//
// Preise und Ablöse werden aus `packages` gelesen statt abgeschrieben. Der
// Wortlaut ist derselbe wie in der Endfassung, nur stehen die Zahlen jetzt an
// einer Stelle weniger — bei der nächsten Preisänderung zieht der Block mit.
export const facts = {
  heading: "Fakten zu auslage",
  items: [
    {
      label: "Betrieb",
      text: `${business.name} ist ein Einzelunternehmen von ${business.owner}.`,
    },
    {
      label: "Sitz",
      text: "Berndorf in Niederösterreich. Die vollständige Anschrift steht im Impressum.",
      // Verlinkt das Wort "Impressum" auf /impressum (Marina, 21.08.2026,
      // Nadelöhr "Impressum verlinken — welche Stelle meinst du?", Antwort C).
      // Der Satz selbst bleibt unverändert: die Verlinkung ist ein Datenfeld,
      // keine Textänderung an einer freigegebenen Endfassung. Facts.jsx sucht
      // `wort` im Satz und macht daraus einen Link.
      link: { wort: "Impressum", href: "/impressum" },
    },
    { label: "Erfahrung", text: "seit 2010 mit Websites und Onlinemarketing." },
    {
      label: "Leistung",
      // BERICHTIGT am 21.08.2026. Freigabe ist Marinas Braindump-Eintrag vom
      // selben Tag, wörtlich: "Fakten zu auslage - Leistungen der text ist
      // überholt, wir bieten auch kauf an seit gestern, aber wird nicht
      // explizit beworben, kerngeschäftz ist die miete." Der alte Satz sagte
      // "mietet sie monatlich, statt sie zu kaufen" und widersprach damit dem
      // Kauf-Block auf /preise (`pricingPage.kauf`, seit 20.08.). Der Kauf
      // steht hier als Tatsache und wird nicht beworben. Kaufpreise bleiben
      // bewusst draußen: der Faktenblock führt keine zweite Preisliste.
      text: "Websites für lokale Betriebe. Die Website wird gebaut und danach laufend betreut. Im Regelfall mietet der Betrieb sie monatlich, jedes Paket ist auf Wunsch auch einmalig zu kaufen.",
    },
    {
      label: "Einzugsgebiet",
      text: "das Triestingtal in Niederösterreich. Dazu gehören unter anderem Kaumberg, Altenmarkt an der Triesting, Furth an der Triesting, Weissenbach an der Triesting, Pottenstein, Berndorf, Hernstein, Hirtenberg, Enzesfeld-Lindabrunn und Leobersdorf.",
    },
    {
      label: "Pakete und Preise",
      text: packages
        .map((p) => `${p.name} ${p.setup} Einrichtung und ${p.monthly} im Monat.`)
        .join(" "),
    },
    {
      label: "Vertrag",
      text: "Die Mindestlaufzeit beträgt zwölf Monate. Danach ist der Vertrag monatlich kündbar mit einem Monat Frist zum Monatsende.",
    },
    { label: "Dauer bis online", text: "zwei Wochen." },
    {
      label: "Internetadresse",
      text: "In jedem Paket ist eine Wunschadresse mit .at-Endung enthalten, zum Beispiel ihrbetrieb.at. Registrierung, Gebühren und Verwaltung übernimmt auslage. Inhaber der Adresse ist der Betrieb selbst.",
    },
    {
      label: "E-Mail",
      text: "Adressen auf der eigenen Internetadresse sind enthalten, zum Beispiel office@ihrbetrieb.at. Alle Adressen laufen in ein Postfach.",
    },
    {
      label: "In jedem Paket enthalten",
      text: "Hosting, Verschlüsselung, Updates, Backups, Sicherheits-Checks, die Einrichtung des Google-Business-Profils sowie Seitentitel, Beschreibungen und Seitenstruktur für die Auffindbarkeit bei Google.",
    },
    {
      label: "Änderungen",
      text: "Starter eine pro Monat, umgesetzt in fünf Werktagen. Business zwei pro Monat, umgesetzt in drei Werktagen. Premium vier pro Monat, umgesetzt in 48 Stunden. Nicht genutzte Änderungen verfallen am Monatsende.",
    },
    {
      label: "Nach dem Vertragsende",
      text: `Texte, Bilder, Logos und Firmendaten bekommt der Betrieb kostenlos zurück. Die Seite selbst kann abgelöst werden, um ${aufzaehlung(
        packages.map((p) => `${p.ablöse} bei ${p.name}`),
      )}.`,
    },
    // Die Telefonnummer war in der Endfassung der EINE geplante Nachtrag:
    // "bleibt der einzige Nachtrag, sobald die Business-Nummer bestellt ist"
    // (Freigabe-Vermerk vom 19.08.). Die spusu-Wertkarte ist am 19.08. bestellt,
    // die Nummer steht seit demselben Tag im Impressum und im Kontaktblock —
    // damit ist die Bedingung erfüllt, und ohne sie widerspräche der Faktenblock
    // dem Rest der Seite. Beide Werte kommen aus `business`, damit sie nicht
    // auseinanderlaufen.
    { label: "Kontakt", text: `${business.email}, Telefon ${business.phone}.` },
  ],
  // Datum der letzten inhaltlichen Änderung, nicht des Builds. Die Endfassung
  // trug den 18. August; mit der Telefonnummer ist es der 19. geworden.
  stand: "Stand: 21. August 2026",
};

// ─── Kontakt ─────────────────────────────────────────────────────────────────
export const contact = {
  eyebrow: "Erster Schritt",
  // Bleibt ohne Ortsnamen (Marina, 18.08., Nadelöhr "Trägt eine H2 den
  // Ortsnamen Triestingtal?", Option B). Susis Vorschlag war "… von deinem
  // Betrieb im Triestingtal."; der Ortsbezug trägt stattdessen über die
  // Vertrauenskachel "Aus Berndorf, Niederösterreich", den Footer und das
  // Impressum.
  heading: "Erzählen Sie mir von Ihrem Betrieb.",
  text: "Ein paar Zeilen reichen. Ich schaue mir den Betrieb online an und sage ehrlich, ob und welches Paket passt.",
  // Risikoumkehr: alle drei Punkte sind Zusagen, die Marina tatsächlich einhält.
  // "in der Regel" ist am 18.08. rausgeflogen — Marina: "das passt schon so,
  // auch im Urlaub." Damit ist die Antwortzeit eine Zusage, keine Tendenz.
  reassurance: [
    "Antwort innerhalb eines Werktags",
    "Kostenlos und unverbindlich",
    "Kein Verkaufsgespräch, wenn es nicht passt",
  ],
  // Telefon und WhatsApp tragen seit 19.08. dieselbe echte Business-Nummer und
  // sind beide verlinkt. Fällt einer der Werte je wieder auf `null`, zeigt die
  // Zeile "Nummer folgt" und wird nicht verlinkt — lieber ein sichtbarer
  // Platzhalter als ein Link, der ins Leere führt.
  //
  // Seit 20.08.2026 stehen die beiden in EINER Zeile (Marina im Nadelöhr,
  // Option B, wörtlich: "Eine Zeile, die Telefon und WhatsApp zusammen
  // nennt."). Zwei Zeilen mit derselben Nummer untereinander lasen sich wie
  // ein Fehler. Die Nummer steht deshalb einmal da und trägt den tel:-Weg;
  // `zweiterWeg` hängt den zweiten Kanal auf derselben Nummer daran. Ohne
  // `zweiterWeg` verhält sich eine Zeile wie jede andere — das Feld ist
  // optional und nur hier gesetzt.
  channels: [
    {
      label: "Telefon & WhatsApp",
      value: business.phone ?? "Nummer folgt",
      href: business.phoneHref,
      // Kurz gehalten, damit die Zeile eine Zeile bleibt: "auf WhatsApp
      // schreiben" war rund zehn Pixel zu breit und rutschte auf 1440 px unter
      // die Nummer. Der Zusammenhang steht ohnehin in der Beschriftung davor.
      zweiterWeg: business.whatsappHref
        ? { label: "per WhatsApp", href: business.whatsappHref }
        : null,
    },
    { label: "E-Mail", value: business.email, href: `mailto:${business.email}` },
  ],
  formHeading: "Anfrage",
  fields: {
    name: "Ihr Name",
    company: "Betrieb",
    email: "E-Mail",
    message: "Worum geht's?",
  },
  messagePlaceholder:
    "Was macht der Betrieb, und was soll die Website können? Ein paar Stichworte genügen.",
  // "submit" gibt es hier nicht mehr: der Absende-Knopf trägt seit 18.08.
  // denselben Wortlaut wie jeder andere CTA der Seite und liest ihn aus `cta`.
  // Solange emailActive false ist, erklärt die Seite offen, dass das Formular
  // ein mailto öffnet, statt so zu tun, als gäbe es ein Backend.
  mailtoNote:
    "Das Formular öffnet Ihr E-Mail-Programm mit der fertigen Nachricht. Es wird nichts auf dieser Seite gespeichert.",
};

export const ctaBand = {
  heading: "Zwei Wochen von hier bis online.",
  // "Kostenloses Erstgespräch" ist hier rausgeflogen: der Wortlaut war der
  // unterlegene Knopftext-Vorschlag und stand nach der Entscheidung vom 18.08.
  // im Widerspruch zum Knopf daneben.
  text: "Schreiben Sie mir ein paar Zeilen. Ohne Verpflichtung und ohne dass danach jemand hinterhertelefoniert.",
  cta,
};

// ─── Navigation & Footer ─────────────────────────────────────────────────────
// Umbau 18.08.: Die Startseite trägt nur noch die neun Blöcke der Blockfolge.
// "Warum" und "Fragen" zeigten auf Anker in Abschnitten, die es dort nicht mehr
// gibt — sie zeigen jetzt auf die eigenen Seiten. "Leistungen" bleibt ein Anker,
// der Abschnitt steht weiter auf der Startseite (Block 5).
export const nav = [
  { label: "Warum", href: "/warum-auslage" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Fragen", href: "/fragen" },
];

// Die Rechtstexte, die ÖFFENTLICH im Footer stehen — nicht die Liste aller
// vorhandenen Rechtsseiten.
//
// Der AVV ist hier am 18.08.2026 herausgenommen worden (Marina). Er ist kein
// Aushang, sondern ein Vertrag zwischen zwei Parteien: der Kunde ist der
// Verantwortliche, auslage die Auftragsverarbeiterin. Er muss vor Beginn der
// Verarbeitung schriftlich vorliegen und der Aufsichtsbehörde nur AUF
// VERLANGEN vorgelegt werden — eine Pflicht zur Veröffentlichung gibt es
// nicht. Öffentlich müssen Impressum und Datenschutzerklärung sein, die AGB
// nur, weil sie Vertragsbestandteil werden sollen.
//
// WICHTIG: Seite und Route /avv bleiben bestehen (App.jsx, pages/legal/Avv).
// Nur der Footer-Link ist weg. Der AVV wird beim Onboarding übergeben. Wer
// die Seite für tot hält und löscht, nimmt Marina ein Vertragsdokument weg.
export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export const brandAssets = {
  logoLight: "/images/auslage-logo.webp",
  logoDark: "/images/auslage-logo-dark.webp",
};

// ─── Seiten-Metadaten ────────────────────────────────────────────────────────
// Alle Werte von Susi (18.08.), Zeichenzahlen von ihr gezählt, Zielkorridor
// Title 50–60, Description 150–160. Nicht selbst umformulieren: die Wortwahl
// folgt dem Keyword-Set, nicht dem Geschmack.
// Ehrlichkeitshinweis von Susi, unverändert gültig: das Set beruht auf
// Erfahrungswerten und Marinas Ortskenntnis, nicht auf gemessenem Suchvolumen
// (OpenSEO-Konto steht auf 0 Credits). Umkehrbar, sobald Zahlen da sind.
export const pageMeta = {
  home: {
    // 52 Zeichen. Der frühere Live-Wert hatte 62 und wurde abgeschnitten.
    title: "Webdesign Triestingtal – Website mieten statt kaufen",
    // 151 Zeichen.
    description:
      "Ihre Website im Triestingtal: in rund zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat. Domain, Hosting und Wartung inklusive. Aus Berndorf.",
  },
  warumWebsite: {
    title: "Warum Ihr Betrieb eine Website braucht – auslage",
    description:
      "Läuft im Betrieb alles über Empfehlung? Wer weiterempfohlen wird, wird gegoogelt. Was eine Website leistet, wenn ein Betrieb von Mundpropaganda lebt. Ehrlich.",
  },
  warumAuslage: {
    title: "Warum auslage: Website mieten statt einmal kaufen",
    description:
      "Website mieten statt einmal kaufen: was das kostet, was inklusive ist, was Ihnen gehört und wo die Grenzen liegen. Ehrlich aufgelistet, auch das Kleingedruckte.",
  },
  fragen: {
    // Title 59 Zeichen, Description 154 — beide von Susi gezählt.
    // Die Zahl im Text ist am 19.08.2026 rausgeflogen: dort stand "die zehn
    // Fragen", auf der Seite stehen neun. Ersetzt wurde sie nicht durch "neun",
    // sondern durch gar keine Zahl — eine Beschreibung, die mitzählen muss, geht
    // beim nächsten Zusatz still wieder falsch, und im Suchergebnis prüft das
    // niemand nach. Der Wortlaut folgt jetzt der Überschrift des FAQ-Blocks.
    title: "Fragen & Fakten zu auslage – Website mieten im Triestingtal",
    description:
      "Alle Eckdaten zu auslage auf einen Blick: Leistungen, Pakete, Preise, Einzugsgebiet und Kontakt. Dazu die Fragen, die vor der Zusage am häufigsten kommen.",
  },
};

// ─── Preisseite ──────────────────────────────────────────────────────────────
// Title und Description von Susi (18.08., Task "Title-Tags, H1 und URLs
// ausrichten"). Der alte Wortlaut trug "Bezirk Baden" — Marina hat Baden am
// 15.08. aus dem Zuschnitt genommen, seither trägt der Zuschnitt "Triestingtal".
// Zeichenzahlen von Susi gezählt: Title 49, Description 152.
export const pricingPage = {
  title: "Preise: Website mieten ab 50 € im Monat – auslage",
  metaDescription:
    "Drei Pakete mit festem Monatspreis: ab 200 € Einrichtung und 50 € im Monat, inklusive Domain, Hosting, Wartung und Änderungen. Keine versteckten Kosten.",
  eyebrow: "Preise",
  heading: "Was es kostet, und was dafür drin ist.",
  // Fassung 3 (Mark), von Marina am 19.08.2026 im Nadelöhr freigegeben mit der
  // Auflage „A aber ohne genauen Preise" — daher „zum festen Monatspreis" statt
  // eines Betrags. Der Satz muss allein verständlich sein: die H1 darüber besteht
  // nur aus Fürwörtern (Susis Bitte vom 19.08.).
  // Der Zielgruppen-Satz am Ende ist Marks zweiter Vorschlag, von Marina am
  // 20.08.2026 im Nadelöhr freigegeben (Antwort A). Er nennt bewusst keine
  // Branche, sondern die Betriebsgröße — das ist die Aussage, die der Satz
  // davor („keine Staffelung nach Betriebsgröße") technisch schon macht.
  intro:
    "Die Website mieten Sie bei mir zum festen Monatspreis, statt sie einmalig zu kaufen. Keine hohen Startkosten, nach dem ersten Jahr monatlich kündbar. Drei Pakete, alle Preise offen. Kein Angebot auf Anfrage, keine Staffelung nach Betriebsgröße und nichts, was erst im Gespräch dazukommt. Gedacht ist das für kleine Betriebe hier in der Gegend: der Ein-Personen-Betrieb zahlt dasselbe wie das Kleinunternehmen mit zehn Leuten.",
  anchor: {
    heading: "Zum Einordnen",
    text: `Vergleichbare Websites kosten bei anderen Anbietern ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig, bevor überhaupt eine monatliche Betreuung dazukommt. auslage startet bei 200 € Einrichtung und 50 € im Monat, dafür mit Mindestlaufzeit. Im ersten Jahr sind das beim Starter 800 € zusammen, Einrichtung eingerechnet. Das ist weniger, als die Einrichtung allein bei den Anbietern oben kostet.`,
    footnote: proof.marktQuelle,
  },
  // ── Kaufoption ───────────────────────────────────────────────────────────
  // Marina hat die Kaufoption am 20.08.2026 im Nadelöhr entschieden (Option A,
  // zwei Auflagen: Preis wird offengelegt, aber NICHT neben den Abo-Preisen,
  // und in runden Zahlen). Zahlen und Zuschnitt stehen in Notion →
  // "Auslage: Preismodell", Abschnitt "Kaufoption"; von dort übernommen, nicht
  // hier gerechnet. Wer sie ändert, ändert sie zuerst dort.
  //
  // Warum der Block hier unten steht und nicht in der Pakettabelle: Marinas
  // Vorgabe war ein eigener Block UNTERHALB der Tabelle mit eigener Überschrift,
  // ausdrücklich keine vierte Spalte und keine vierte Zeile. Beworben wird im
  // Triestingtal weiterhin ausschließlich das Abo; die Kaufoption beantwortet nur
  // den häufigsten Einwand im Verkaufsgespräch ("ich will kein Abo"). Deshalb
  // trägt der Block keinen eigenen Knopf: es gibt genau EINEN CTA-Text auf der
  // Seite, und das CTA-Band steht ohnehin direkt darunter.
  //
  // NICHT ergänzen ohne neue Entscheidung: ob Wartung und Hosting nach dem Kauf
  // als kleines Technikpaket weiterlaufen. Das ist offen (Preismodell,
  // "Noch offen"), und bis dahin steht dazu nichts auf der Seite. Auch die
  // steuerliche Behandlung beim Kunden ist ungeklärt und gehört nicht hierher.
  kauf: {
    heading: "Lieber kaufen statt mieten?",
    intro:
      "Nicht jeder Betrieb will ein Abo. Deshalb gibt es jedes der drei Pakete auch zum Kauf: einmalig zahlen, der [[quellcode|Quellcode]] gehört Ihnen, es gibt keine Mindestlaufzeit und kein Monatshonorar.",
    // Bewusst eigene Werte statt einer Ableitung aus `packages`: der Kaufpreis
    // ist keine Formel auf dem Monatspreis, sondern eine eigene Festlegung.
    // Eine gerechnete Zeile würde bei der nächsten Preisänderung still falsch.
    preise: [
      { name: "Starter", price: "1.000 €" },
      { name: "Business", price: "2.000 €" },
      { name: "Premium", price: "3.000 €" },
    ],
    // Der Umsatzsteuer-Hinweis steht hier ein zweites Mal, obwohl er unten in
    // `pricingTerms` ohnehin für die ganze Seite gilt. Grund: Hier stehen die
    // höchsten Beträge der Seite, und zwischen ihnen und dem Kleingedruckten
    // liegen zwei Bildschirme. Bei 3.000 € will niemand erst beim
    // Weiterscrollen erfahren, ob noch etwas dazukommt.
    // Wortlaut wie in `pricingTerms` und wie auf Rechnung, Angebot und
    // Auftragsbestätigung (Marina, 21.08.2026, Nadelöhr, Antwort A). Nicht
    // umformulieren — der Satz steht an neun Stellen gleich.
    preisNote:
      "Einmalig. Gemäß § 6 Abs. 1 Z 27 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen. Der ausgewiesene Betrag ist der Gesamtbetrag. Gebaut wird dieselbe Website, die im jeweiligen Paket oben beschrieben ist.",
    outro:
      "Für die meisten kleinen Betriebe hier ist die Miete der günstigere Weg, deshalb steht sie oben. Kaufen lohnt sich, wenn das Geld ohnehin da ist und eine Bindung nicht infrage kommt.",
  },
  ablöseHeading: "Wenn der Vertrag endet",
  // Getrennt nach AGB §7 (Stand 16.08.): Inhalte unentgeltlich, Entgelt nur für
  // den Quellcode, Domain mit den beiden Bedingungen nach Vertragsende.
  ablöseText:
    "Die Inhalte gehören Ihnen, kostenlos. Texte, Bilder, Logos, Firmendaten und alle Anfragen, die über die Website hereingekommen sind, gebe ich nach Vertragsende unentgeltlich heraus, in einem gängigen Format zum Weiterverwenden. Eine Nachricht binnen drei Monaten nach Vertragsende genügt, dann sind sie binnen vier Wochen da.",
  ablöseTextQuellcode:
    "Den Quellcode gibt es gegen eine einmalige [[abloese|Ablöse]]: 100 € bei Starter, 150 € bei Business, 250 € bei Premium. Damit dürfen Sie die Website unbefristet selbst weiterbetreiben, bearbeiten und weiterentwickeln lassen, von wem Sie wollen. Ausgenommen sind Bestandteile von Dritten — Schriften, Bildmaterial, Softwarebibliotheken —, für die eigene Lizenzen nötig sind; welche das sind, weise ich bei der Übergabe aus.",
  ablöseTextDomain:
    "Die Domain gehört Ihnen, während der Laufzeit und danach. Nach Vertragsende schicke ich binnen zwei Wochen die [[authinfo|Authinfo]], mit der die Domain zu einem beliebigen Anbieter umzieht; beim Umzug helfe ich. Ab Vertragsende tragen Sie die Verlängerungskosten selbst. Wichtig: Nehmen Sie den Umzug binnen acht Wochen vor — danach wird die Domain nicht weiter verlängert und kann verfallen.",
  termsHeading: "Das Kleingedruckte, groß geschrieben",
  // Die Bildunterschrift der Ablöse-Tabelle. Sie stand bis zum 22.08.2026 hart
  // in `src/pages/Preise.jsx` und ist deshalb bei der Du-auf-Sie-Umstellung vom
  // 21.08. übersehen worden — sie lautete "Inhalte und Anfragen bekommst du
  // unabhängig davon kostenlos." und war danach der letzte Du-Satz auf einer
  // durchgehend siezenden Seite. Jetzt ohne Anrede, nach der Hausregel: das
  // Pronomen steht dort, wo es um Besitz oder eine Handlung geht, sonst redet
  // der Text über die Sache.
  //
  // Sie ist `visually-hidden` und damit nur für Vorleseprogramme da. Genau
  // deshalb gehört sie hierher und nicht in die Komponente: unsichtbarer
  // Sichttext fällt bei keiner Sichtprüfung auf.
  //
  // KEIN Glossar-Marker: `Preise.jsx` gibt sie als <caption> aus, und ein Knopf
  // in einer Tabellen-Bildunterschrift ist für ein Vorleseprogramm eine Zumutung.
  ablöseTabelleCaption:
    "Einmalige Ablöse-Gebühr je Paket für die Übergabe des Quellcodes. Inhalte und Anfragen gibt es unabhängig davon kostenlos.",
};

// ─── Seitenverzeichnis fürs Prerendering ─────────────────────────────────────
// Warum es das gibt: Die Seite ist eine Single-Page-App. Ohne diesen Schritt
// steht im ausgelieferten HTML jeder Unterseite nur der Titel aus index.html —
// die richtigen Werte setzt erst JavaScript im Browser. Wer kein JavaScript
// ausführt (WhatsApp-, Facebook-, LinkedIn- und Signal-Vorschauen, einfachere
// Crawler, die meisten KI-Assistenten), sieht auf jeder Unterseite den Text der
// Startseite. Befund von Susi, 17.08.2026.
//
// `npm run build` rendert deshalb nach dem normalen Build jede Seite dieser
// Liste einmal fertig und legt sie als eigene HTML-Datei in dist/ ab. Titel,
// Beschreibung, Vorschau-Tags und der Sichtbarkeits-Schalter kommen dabei aus
// dieser Datei — nicht mehr aus von Hand gepflegten Zeilen in index.html.
//
// WER HIER EINE ROUTE ERGÄNZT, ERGÄNZT SIE AUCH IN App.jsx — und umgekehrt.
// Der Build bricht mit einer Fehlermeldung ab, wenn beide Listen auseinander-
// laufen; das ist Absicht und keine Schikane.

// Die eigene Adresse. Trägt die canonical- und og:url-Angabe jeder Seite.
export const siteUrl = "https://auslage.io";

// Titel und Beschreibung der Platzhalterseite. Stehen hier, damit ComingSoon.jsx
// und das Prerendering denselben Wortlaut verwenden.
export const comingSoonMeta = {
  title: "Bald online – auslage",
  description: "auslage ist bald online.",
};

// Titel und Beschreibung der Rechtstexte folgen einer Formel statt einzelner
// Einträge. LegalLayout.jsx nutzt dieselbe Funktion — ein Wortlaut, eine Stelle.
export function legalMeta(titel) {
  return {
    title: `${titel} – auslage`,
    description: `${titel} von auslage, Marina Zaiser, Berndorf.`,
  };
}

// `gesperrt: true` heißt: Diese Seite liegt hinter der Coming-Soon-Sperre und
// zeigt die Platzhalterseite, solange `comingSoon` oben auf true steht.
// Die Rechtstexte sind nie gesperrt — die Impressumspflicht gilt unabhängig
// davon, ob die Seite fertig ist.
export const routes = [
  { pfad: "/", datei: "index.html", gesperrt: true, meta: pageMeta.home },
  {
    pfad: "/preise",
    datei: "preise.html",
    gesperrt: true,
    meta: { title: pricingPage.title, description: pricingPage.metaDescription },
  },
  {
    pfad: "/warum-eine-website",
    datei: "warum-eine-website.html",
    gesperrt: true,
    meta: pageMeta.warumWebsite,
  },
  {
    pfad: "/warum-auslage",
    datei: "warum-auslage.html",
    gesperrt: true,
    meta: pageMeta.warumAuslage,
  },
  { pfad: "/fragen", datei: "fragen.html", gesperrt: true, meta: pageMeta.fragen },
  { pfad: "/impressum", datei: "impressum.html", meta: legalMeta("Impressum") },
  { pfad: "/datenschutz", datei: "datenschutz.html", meta: legalMeta("Datenschutz") },
  { pfad: "/agb", datei: "agb.html", meta: legalMeta("AGB") },
  // `ausIndex: true`: Diese Seite gehört nicht in die Suchergebnisse und nicht
  // in die Sitemap. Der AVV ist ein Vertrag, kein Aushang — der Footer-Link ist
  // am 18.08. entfernt worden, übergeben wird die Seite beim Onboarding.
  // Das `noindex` allein reicht nicht als Weglassen aus der Sitemap, sobald die
  // Adresse irgendwo verlinkt wird; umgekehrt wäre ein `Disallow` in der
  // robots.txt falsch, weil ein gesperrter Pfad gar nicht gecrawlt wird und
  // Google das `noindex` dann nie liest (Susi, 19.08.2026).
  { pfad: "/avv", datei: "avv.html", ausIndex: true, meta: legalMeta("AVV") },
];

// Die 404-Seite steht bewusst NICHT in `routes`: In App.jsx hängt sie an
// `path="*"` und hat keine eigene Adresse, die abzugleichen wäre. Das
// Prerendering rendert sie trotzdem einmal fertig nach dist/404.html — von dort
// liefert Cloudflare sie mit dem Status 404 aus (`not_found_handling` steht in
// wrangler.jsonc auf "404-page"). Vorher kam bei einer erfundenen Adresse die
// Startseite mit Status 200 zurück; mit vollem Text dahinter sähe Google
// beliebig viele Kopien genau der Seite, die ranken soll.
export const notFoundRoute = {
  pfad: "/404",
  datei: "404.html",
  ausIndex: true,
  meta: {
    title: "Seite nicht gefunden – auslage",
    description: "Diese Seite gibt es nicht. Zurück zur Startseite von auslage.",
  },
};
