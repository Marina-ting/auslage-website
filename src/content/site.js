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
  areaServed: "Bezirk Baden & Triestingtal",
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
  headline: "Damit dich findet,",
  headlineAccent: "wer dich sucht.",
  // Endfassung Block 1 (Mark, freigegeben von Marina am 18.08.). Gegenüber der
  // Fassung vom 17.08. um die Hälfte gekürzt: der Einstieg "Du willst online
  // gefunden werden" stand doppelt, das sagt die Headline schon. Aus "in rund
  // zwei Wochen" ist "in zwei Wochen" geworden — das "rund" hat nur genuschelt.
  subline:
    "Fehlt es an Zeit, Lust oder Technikwissen? Ich baue die Website für deinen Betrieb und halte sie am Laufen. In zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat.",
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
// Kachel 4 trägt "aus Berndorf" nicht dekorativ: Susi hat den Wegfall des
// regionalen Claims aus dem Kopfbereich genau unter der Bedingung freigegeben,
// dass der Ortsname im sichtbaren Text stehen bleibt. Nicht wegkürzen ohne
// Rückfrage bei ihr.
export const trust = {
  items: [
    { icon: "baukasten", text: "Kein Baukasten zum Selberbefüllen" },
    { icon: "rechnung", text: "Keine Überraschung auf der Rechnung" },
    { icon: "adresse", text: "Deine Internetadresse läuft auf dich" },
    {
      icon: "erfahrung",
      // Zahl aus `proof`, damit sie nur an einer Stelle steht. Wortlaut sonst
      // wie von Marina freigegeben ("und" statt "&", Ort angehängt).
      text: `${proof.jahreErfahrung} mit Websites und Onlinemarketing, aus Berndorf`,
    },
  ],
};

// ─── Block 3: Der Einwand ────────────────────────────────────────────────────
// Arbeitet MIT dem Einwand statt gegen ihn (marketing-psychology): Wer über
// Empfehlung lebt, macht etwas richtig — das wird zuerst bestätigt, bevor der
// Text zeigt, wo die Empfehlung heute trotzdem verloren geht.
// Die Langfassung dieses Blocks steht auf /warum-eine-website.
export const objection = {
  eyebrow: "Brauchst du das überhaupt?",
  heading: "Bei dir läuft alles offline. Wozu dann eine Website?",
  paragraphs: [
    "Dein Name wird weitergegeben und der Nächste sucht ihn am Handy, bevor er anruft. Findet er nichts, landet der Auftrag woanders.",
    "Eine Website ersetzt keine Empfehlung. Sie ist das, was er findet, wenn er deinen Namen bei Google eintippt.",
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
    "Kein Baukasten-Abo, das du selbst befüllst, und keine Rechnung im dritten Monat für etwas, von dem du dachtest, es wäre dabei.",
  items: [
    {
      title: "Wunsch-.at-Domain & Firmen-E-Mail",
      // Umformuliert 18.08.: inkludiert sind mehrere E-Mail-ADRESSEN, aber nur
      // EIN Postfach (Weiterleitung). "ein Postfach darauf" war missverständlich
      // in die andere Richtung. Quelle: Preismodell-Seite, Update 18.08.
      text: "Deine eigene .at-Adresse und die E-Mail-Adressen darauf, die alle in ein Postfach laufen. Registrierung, Gebühren und Verwaltung sind im Paket.",
    },
    {
      title: "Hosting & SSL",
      text: "Die Seite läuft, ist verschlüsselt und braucht von dir keinen Handgriff.",
    },
    {
      title: "Laufende Wartung",
      text: "Updates, Backups, Sicherheits-Checks und Erreichbarkeitsprüfung, ohne dass du davon etwas mitbekommst.",
    },
    {
      title: "Google-Business-Profil",
      text: "Eingerichtet, damit dein Betrieb in der Kartensuche und rechts neben den Suchergebnissen auftaucht.",
    },
    {
      title: "SEO-Grundausstattung",
      text: "Saubere Struktur, Seitentitel und Beschreibungen, damit Google versteht, was dein Betrieb macht.",
    },
    {
      title: "Änderungen inklusive",
      text: "Neue Öffnungszeiten, ein anderer Preis, ein aktuelles Foto: je nach Paket 1 bis 4 Änderungen pro Monat.",
    },
  ],
};

// ─── Glossar (Inline-Marker) ─────────────────────────────────────────────────
// Fünf Fachwörter, die im Text ein aufklappbares ⓘ tragen. Die Auswahl ist
// Susis (20.08.2026), ausgezählt am ausgelieferten HTML: Domain (13×), SEO (7×),
// Hosting (5×), SSL (3×), Google-Business-Profil (3×). Fünf sind die Obergrenze
// und bewusst gesetzt — ab dem sechsten Marker liest sich die Seite wie ein
// Beipackzettel. "Quellcode" und "Backup" stehen absichtlich NICHT hier: an
// ihren Fundstellen erklärt der Satz sie schon mit.
//
// Gesetzt werden die Marker mit der Schreibweise [[schlüssel|sichtbares Wort]]
// direkt im Sichttext; aufgelöst wird sie in src/lib/glossar.jsx. Wer einen
// Schlüssel hier umbenennt, muss auch die Marker im Text nachziehen — ein
// unbekannter Schlüssel lässt still nur das Wort stehen, ohne Erklärung.
//
// Die Texte sind bewusst kurz (zwei bis drei Sätze) und beantworten die Frage
// "was heißt das für mich", nicht "wie funktioniert das technisch".
export const glossar = {
  domain:
    "Die Adresse deiner Website, also das, was jemand in die Adresszeile tippt, um bei dir zu landen: zum Beispiel dein-betrieb.at. Registriert wird sie auf deinen Namen, nicht auf meinen. Gebühren und Verwaltung liegen bei mir, die Domain bei dir.",
  hosting:
    "Der Platz, auf dem deine Website liegt, damit sie Tag und Nacht erreichbar ist. Ohne Hosting gäbe es die Seite nur auf einem Rechner bei mir. Platz, Technik und Gebühren stecken im Monatspreis.",
  ssl:
    "Das kleine Schloss links in der Adresszeile. Es zeigt, dass die Verbindung verschlüsselt ist: Was jemand in dein Kontaktformular tippt, kann unterwegs niemand mitlesen. Fehlt es, warnt der Browser deine Besucher, bevor sie die Seite überhaupt sehen.",
  seo:
    "Kurz für Suchmaschinenoptimierung. Gemeint ist alles, damit Google versteht, was dein Betrieb macht und wo er ist: Seitentitel, Beschreibungen und eine saubere Struktur. Ohne das steht deine Seite zwar im Netz, wird aber kaum gefunden.",
  googleProfil:
    "Der Eintrag, der bei einer Suche rechts neben den Ergebnissen und in Google Maps auftaucht, mit Adresse, Öffnungszeiten, Telefonnummer und Fotos. Er ist von deiner Website unabhängig und wird in jedem Paket mit eingerichtet.",
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
    pitch: "Eine Seite, die dich findbar macht und erreichbar hält.",
    features: [
      "Startseite plus bis zu 2 weitere Bereiche",
      // 18.08.: mehrere Adressen, ein Postfach — siehe included.items[0].
      // Die [[…]]-Marker sind das Inline-Glossar (src/lib/glossar.jsx). Sie
      // stehen nur in der Starter-Liste: Business und Premium sagen "Alles aus
      // Starter", die Wörter kämen also sonst dreimal mit demselben ⓘ.
      // Sichtbar sind sie damit genau auf /preise — die Paketkarten stehen seit
      // dem Startseiten-Umbau vom 17.08. nur noch dort. Kommt eine Karte je
      // zurück auf die Startseite, prüfen: PackageCard zeigt ohne `detailed`
      // nur die ersten vier Zeilen, die SEO-Zeile fiele dann weg.
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
      "Lokale SEO-Basis",
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
        text: "Eigene Seite, damit auch ChatGPT & Co. deinen Betrieb richtig wiedergeben",
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

export const pricingTerms = [
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
      text: `Vergleichbare Websites starten bei anderen Anbietern bei ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig. Bei auslage sind es 200 €. Du musst nicht erst ein halbes Jahresbudget aufmachen, um herauszufinden, ob es dir etwas bringt.`,
      footnote: proof.marktQuelle,
    },
    {
      title: "Zwei Wochen statt zwei Monate",
      text: `Ein großer österreichischer Mitbewerber nennt selbst ${proof.mitbewerbDauer} Umsetzungsdauer. Bei mir ist deine Seite in ${proof.eigeneDauer} online, vorausgesetzt, ich bekomme deine Texte und Fotos zügig.`,
      footnote: proof.mitbewerbQuelle,
    },
    {
      title: "Du redest immer mit mir",
      text: "Kein Ticketsystem, keine wechselnden Ansprechpartner, keine Warteschleife. Du schreibst mir, ich antworte. Das ist der Vorteil eines Ein-Personen-Betriebs, und der einzige Grund, warum Änderungen in 48 Stunden überhaupt möglich sind.",
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
    "Der Preis funktioniert, weil das Angebot schlank ist. Das heißt aber auch: manches ist nicht dabei. Besser, du weißt es jetzt als nach der Auftragsbestätigung.",
  items: [
    {
      title: "Keine Rundum-Agentur",
      text: "Zusatzleistungen sind möglich, wenn dein Betrieb mehr braucht als die Website selbst. Automatisch inklusive sind sie aber nicht. Sie werden separat angeboten und verrechnet, sonst müsste der Grundpreis für alle höher sein.",
    },
    {
      title: "Kein Online-Shop",
      text: "Ich baue Websites, die Anfragen und Kunden in den Betrieb bringen. Einen Webshop mit Lager, Versand und Zahlungsabwicklung nicht. auslage macht dich sichtbar, verkauft aber nicht für dich.",
    },
    {
      title: "Die Texte kommen von dir",
      text: "Du kennst deinen Betrieb, ich nicht. Ich frage, sortiere, formuliere um und mache daraus etwas Lesbares, aber der Inhalt muss von dir kommen. Wer stattdessen fertige Texte vom Anbieter will, ist bei einer größeren Agentur besser aufgehoben.",
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
  heading: "Vier Schritte und keiner kostet dich einen Nachmittag.",
  steps: [
    {
      number: "01",
      title: "Kurz reden",
      text: "Ein Anruf oder ein paar Zeilen. Kostenlos und unverbindlich.",
    },
    {
      number: "02",
      title: "Angebot",
      text: "Fester Preis, festes Paket. Du entscheidest.",
    },
    {
      number: "03",
      title: "Ich baue",
      text: "Du schickst Texte und Fotos, den Rest mache ich.",
    },
    {
      number: "04",
      title: "Live und betreut",
      text: "Online geht die Seite erst mit deinem Ja.",
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
    { label: "Adresse und E-Mail", text: "Wunschadresse auf .at, dazu Adressen wie office@" },
    { label: "Hosting und Sicherheit", text: "läuft verschlüsselt, ohne Handgriff für dich" },
    { label: "Google-Karte", text: "dein Betrieb mit Adresse und Öffnungszeiten" },
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
    "Die Einrichtung zahlst du nicht auf einen Schlag. 200 € am Anfang, den Rest trägt der Monatspreis über die Laufzeit.",
  ],
};

// ─── Block 6: Was dir gehört ─────────────────────────────────────────────────
// Herr Rat: der Block, den ein Miet-Anbieter normalerweise nicht haben kann,
// und deshalb das stärkste Argument der Seite. Risikoumkehr, gehört in den
// Verkaufsteil und nicht in eine FAQ.
// AUSDRÜCKLICH KEINE Vergleichsaussage über Mitbewerber: ein Satz wie "bei
// Mietmodellen ist nach der Kündigung alles weg" ist für EINEN Anbieter geprüft,
// nicht für Mietmodelle allgemein. Der Block trägt nur, was für auslage gilt.
export const ownership = {
  eyebrow: "Was dir gehört",
  heading: "Du mietest die Website. Deine Internetadresse gehört dir.",
  items: [
    {
      label: "Deine Internetadresse",
      text: "läuft vom ersten Tag an auf deinen Namen",
    },
    {
      label: "Deine Inhalte",
      text: "nach Vertragsende kostenlos zurück, Texte, Bilder und Logos als Dateien",
    },
    {
      label: "Die Seite selbst",
      text: "Ablöse ab 100 €, je nach Paket. Danach läuft sie ohne mich weiter.",
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
    "Alle diese Erfahrungen kombiniere ich heute mit KI und Google-Optimierung und baue damit Websites, die für uns arbeiten und nicht umgekehrt. Kein Verkaufs-Blabla, sondern eine Ansprechperson auf Augenhöhe. Du kümmerst dich um dein Tagesgeschäft, ich um Aufbau, Pflege, Auffindbarkeit und Technik deiner Website.",
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
      a: "Weil die Einrichtung sonst nicht 200 € kosten könnte. Die eigentliche Arbeit steckt am Anfang: Aufbau, Domain, Google-Profil, Struktur. Andere Anbieter verrechnen das einmalig mit 1.790 € aufwärts. Ich verteile es über die Laufzeit. Die Bindung ist der Preis dafür, und sie gilt in beide Richtungen: ich bin die 12 Monate auch für dich da.",
    },
    {
      id: "website-mitnehmen",
      q: "Kann ich meine Website mitnehmen, wenn ich kündige?",
      a: "Deine Inhalte ja, und zwar kostenlos: Texte, Bilder, Logos, Firmendaten und alle Anfragen, die über die Website hereingekommen sind, bekommst du nach Vertragsende unentgeltlich in einem gängigen Format. Sag mir binnen drei Monaten Bescheid, dann hast du sie binnen vier Wochen. Den Quellcode gibt es gegen eine einmalige Ablöse: 100 € bei Starter, 150 € bei Business, 250 € bei Premium. Damit darfst du die Website unbefristet selbst weiterbetreiben und weiterentwickeln lassen, von wem du willst. Ausgenommen sind Bestandteile von Dritten wie Schriften, Bildmaterial und Softwarebibliotheken, für die du eigene Lizenzen brauchst — welche das sind, weise ich dir bei der Übergabe aus. Die Domain gehört ohnehin von Anfang an dir.",
    },
    {
      id: "dauer-bis-online",
      q: "Wie lange dauert es, bis meine Website online ist?",
      a: "In der Regel rund zwei Wochen. Was es länger macht, ist fast immer dasselbe: Ich warte auf Texte oder Fotos. Wenn du die parat hast, geht es schnell.",
    },
    {
      id: "baukasten",
      q: "Kann ich das nicht selbst mit einem Baukasten machen?",
      a: "Du kannst die Website bei mir auch einfach monatlich mieten, statt sie selbst zusammenzubauen: Grundsätzlich ja, und für manche ist das genau richtig. Rechne nur ehrlich mit: Der Baukasten kostet auch monatlich, dazu kommen Domain und meist ein Aufpreis fürs eigene Postfach. Der eigentliche Preis sind die Abende, die du damit verbringst, und danach das Nachpflegen, das erfahrungsgemäß nach ein paar Monaten liegen bleibt.",
    },
    {
      id: "hosting-ssl-updates",
      q: "Muss ich mich um Hosting, SSL oder Updates kümmern?",
      a: "Nein. Das ist in jedem Paket enthalten und der Grund, warum es überhaupt ein Monatsmodell ist. Du bekommst davon nichts mit, außer dass die Seite läuft.",
    },
    {
      id: "domain-und-email",
      q: "Sind Domain und E-Mail-Adresse wirklich inklusive?",
      a: "Ja, in allen drei Paketen. Deine Wunsch-.at-Domain, sofern noch frei, und ein Firmen-Postfach darauf. Registrierung und laufende Gebühren übernehme ich, registriert wird sie aber auf dich und nicht auf mich. Nach Vertragsende bekommst du binnen zwei Wochen die Authinfo, mit der du die Domain zu einem Anbieter deiner Wahl mitnimmst; ab dann trägst du die Verlängerungskosten selbst. Nimm den Umzug binnen acht Wochen vor — danach wird die Domain nicht weiter verlängert und kann verfallen.",
    },
    {
      id: "faktenseite-ki",
      q: "Was ist die Faktenseite für KI-Suche im Premium-Paket?",
      a: "Eine zusätzliche Seite, die speziell für KI-Assistenten wie ChatGPT aufbereitet ist, statt für menschliche Besucher. Immer mehr Menschen fragen KI-Tools statt Google, wenn sie einen Betrieb in der Nähe suchen. Diese Seite sorgt dafür, dass die Antwort stimmt: richtige Öffnungszeiten, richtige Leistungen, richtige Adresse.",
    },
    {
      id: "seo-in-den-paketen",
      q: "Wie unterscheidet sich die Suchmaschinenoptimierung in den drei Paketen?",
      a: "In allen drei Paketen ist eine SEO-Grundausstattung dabei: saubere Struktur, Seitentitel und Beschreibungen, damit Google versteht, was dein Betrieb macht. Ab Business kommt die lokale SEO-Basis dazu — wichtig, wenn deine Kunden vor allem aus der Umgebung suchen. Bei Premium betreue ich die SEO laufend weiter und du bekommst zusätzlich eine eigene Faktenseite, extra für KI-Assistenten wie ChatGPT aufbereitet, damit die auch die richtigen Infos über deinen Betrieb ausgeben.",
    },
    {
      id: "zusatzleistungen",
      q: "Was, wenn ich später etwas brauche, das über mein Paket hinausgeht?",
      a: "Dann bekommst du vorher ein Angebot dafür. Es wird nie etwas verrechnet, das du nicht vorher freigegeben hast.",
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
    },
    { label: "Erfahrung", text: "seit 2010 mit Websites und Onlinemarketing." },
    {
      label: "Leistung",
      text: "Websites für lokale Betriebe. Die Website wird gebaut und danach laufend betreut. Der Betrieb mietet sie monatlich, statt sie zu kaufen.",
    },
    {
      label: "Einzugsgebiet",
      text: "das Triestingtal in Niederösterreich. Dazu gehören Kaumberg, Altenmarkt an der Triesting, Furth an der Triesting, Weissenbach an der Triesting, Pottenstein, Berndorf, Hernstein, Hirtenberg, Enzesfeld-Lindabrunn und Leobersdorf.",
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
      text: "In jedem Paket ist eine Wunschadresse mit .at-Endung enthalten, zum Beispiel deinbetrieb.at. Registrierung, Gebühren und Verwaltung übernimmt auslage. Inhaber der Adresse ist der Betrieb selbst.",
    },
    {
      label: "E-Mail",
      text: "Adressen auf der eigenen Internetadresse sind enthalten, zum Beispiel office@deinbetrieb.at. Alle Adressen laufen in ein Postfach.",
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
  stand: "Stand: 19. August 2026",
};

// ─── Kontakt ─────────────────────────────────────────────────────────────────
export const contact = {
  eyebrow: "Erster Schritt",
  // Bleibt ohne Ortsnamen (Marina, 18.08., Nadelöhr "Trägt eine H2 den
  // Ortsnamen Triestingtal?", Option B). Susis Vorschlag war "… von deinem
  // Betrieb im Triestingtal."; der Ortsbezug trägt stattdessen über die
  // Vertrauenskachel "Aus Berndorf, Niederösterreich", den Footer und das
  // Impressum.
  heading: "Erzähl mir von deinem Betrieb.",
  text: "Ein paar Zeilen reichen. Ich schaue mir deinen Betrieb online an und sage dir ehrlich, ob und welches Paket zu dir passt.",
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
    name: "Dein Name",
    company: "Betrieb",
    email: "E-Mail",
    message: "Worum geht's?",
  },
  messagePlaceholder:
    "Was macht dein Betrieb, und was soll die Website können? Ein paar Stichworte genügen.",
  // "submit" gibt es hier nicht mehr: der Absende-Knopf trägt seit 18.08.
  // denselben Wortlaut wie jeder andere CTA der Seite und liest ihn aus `cta`.
  // Solange emailActive false ist, erklärt die Seite offen, dass das Formular
  // ein mailto öffnet, statt so zu tun, als gäbe es ein Backend.
  mailtoNote:
    "Das Formular öffnet dein E-Mail-Programm mit der fertigen Nachricht. Es wird nichts auf dieser Seite gespeichert.",
};

export const ctaBand = {
  heading: "Zwei Wochen von hier bis online.",
  // "Kostenloses Erstgespräch" ist hier rausgeflogen: der Wortlaut war der
  // unterlegene Knopftext-Vorschlag und stand nach der Entscheidung vom 18.08.
  // im Widerspruch zum Knopf daneben.
  text: "Schreib mir ein paar Zeilen. Ohne Verpflichtung und ohne dass dir danach jemand hinterhertelefoniert.",
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
      "Deine Website im Triestingtal: in rund zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat. Domain, Hosting und Wartung inklusive. Aus Berndorf.",
  },
  warumWebsite: {
    title: "Warum dein Betrieb eine Website braucht – auslage",
    description:
      "Bei dir läuft alles über Empfehlung? Wer weiterempfohlen wird, wird gegoogelt. Was eine Website leistet, wenn dein Betrieb von Mundpropaganda lebt. Ehrlich.",
  },
  warumAuslage: {
    title: "Warum auslage: Website mieten statt einmal kaufen",
    description:
      "Website mieten statt einmal kaufen: was das kostet, was inklusive ist, was dir gehört und wo die Grenzen liegen. Ehrlich aufgelistet, auch das Kleingedruckte.",
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
  intro:
    "Deine Website mietest du bei mir zum festen Monatspreis, statt sie einmalig zu kaufen. Keine hohen Startkosten, nach dem ersten Jahr monatlich kündbar. Drei Pakete, alle Preise offen. Kein Angebot auf Anfrage, keine Staffelung nach Betriebsgröße und nichts, was erst im Gespräch dazukommt.",
  anchor: {
    heading: "Zum Einordnen",
    text: `Vergleichbare Websites kosten bei anderen Anbietern ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig, bevor überhaupt eine monatliche Betreuung dazukommt. auslage startet bei 200 € Einrichtung und 50 € im Monat, dafür mit Mindestlaufzeit.`,
    footnote: proof.marktQuelle,
  },
  ablöseHeading: "Wenn du wieder gehst",
  // Getrennt nach AGB §7 (Stand 16.08.): Inhalte unentgeltlich, Entgelt nur für
  // den Quellcode, Domain mit den beiden Bedingungen nach Vertragsende.
  ablöseText:
    "Deine Inhalte gehören dir, kostenlos. Texte, Bilder, Logos, Firmendaten und alle Anfragen, die über die Website hereingekommen sind, bekommst du nach Vertragsende unentgeltlich heraus, in einem gängigen Format zum Weiterverwenden. Sag binnen drei Monaten nach Vertragsende Bescheid, dann hast du sie binnen vier Wochen.",
  ablöseTextQuellcode:
    "Den Quellcode gibt es gegen eine einmalige Ablöse: 100 € bei Starter, 150 € bei Business, 250 € bei Premium. Damit darfst du die Website unbefristet selbst weiterbetreiben, bearbeiten und weiterentwickeln lassen, von wem du willst. Ausgenommen sind Bestandteile von Dritten — Schriften, Bildmaterial, Softwarebibliotheken —, für die du eigene Lizenzen brauchst; welche das sind, weise ich dir bei der Übergabe aus.",
  ablöseTextDomain:
    "Die Domain gehört dir, während der Laufzeit und danach. Nach Vertragsende bekommst du binnen zwei Wochen die Authinfo, mit der du sie zu einem Anbieter deiner Wahl mitnimmst; beim Umzug helfe ich. Ab Vertragsende trägst du die Verlängerungskosten selbst. Wichtig: Nimm den Umzug binnen acht Wochen vor — danach wird die Domain nicht weiter verlängert und kann verfallen.",
  termsHeading: "Das Kleingedruckte, groß geschrieben",
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
