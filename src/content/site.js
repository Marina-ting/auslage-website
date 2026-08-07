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

export const business = {
  name: "Auslage",
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
  // office@auslage.io ist noch nicht aktiv. Solange false, weist das Kontaktformular
  // darauf hin und alle mailto-Links bleiben trotzdem funktionsfähig vorbereitet.
  emailActive: false,
  // Telefon, WhatsApp und Maps-Link stehen nicht fest. Komponenten, die diese Werte
  // bräuchten, rendern nicht — bewusst kein Platzhalter.
  phone: null,
  whatsapp: null,
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
  mitbewerbQuelle: "laut FAQ des größten österreichischen Mitbewerbers, 08/2026",

  eigeneDauer: "rund zwei Wochen",
  // Aus Marinas Bio (Notion → Branding / About). Keine gerundete Schätzung.
  jahreErfahrung: "15 Jahre",
};

// ─── Hero ────────────────────────────────────────────────────────────────────
// Headline als rhetorische Frage: greift die Marken-Metapher (Auslage =
// Schaufenster) direkt auf und trifft die Zielgruppe dort, wo sie ihren Betrieb
// schon versteht. Der konkrete Nutzen und der Preisanker stehen in der Subline,
// damit die Überschrift nicht preisgetrieben wirkt.
export const hero = {
  eyebrow: "Websites für Betriebe im Bezirk Baden & Triestingtal",
  headline: "Dein Betrieb hat eine Auslage.",
  headlineAccent: "Im Netz auch?",
  subline:
    "Ich baue und betreue die Website für deinen Betrieb. In rund zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat — mit Domain, Hosting und Wartung. Ohne Technik-Kauderwelsch, mit einer Ansprechperson statt einem Ticketsystem.",
  primaryCta: { label: "Jetzt Auslage sichern", href: "/#kontakt" },
  secondaryCta: { label: "Pakete & Preise ansehen", href: "/preise" },
  // Nur Belegbares. Keine Kundenzahlen — die gibt es noch nicht.
  trustItems: [
    "15 Jahre Erfahrung",
    "Aus Berndorf, für den Bezirk",
    "Domain, Hosting & Wartung inklusive",
  ],
};

// ─── Problem ─────────────────────────────────────────────────────────────────
// Verlustaversion statt Gewinnversprechen: der Schmerz ist die verlorene Anfrage,
// nicht die fehlende Website. Bewusst ohne erfundene Prozentzahlen.
export const problem = {
  eyebrow: "Warum das zählt",
  heading: "Wer nicht gefunden wird, wird auch nicht angerufen.",
  body: "Wer heute einen Installateur, ein Wirtshaus oder einen Friseur sucht, tippt zuerst am Handy. Was dabei auftaucht, entscheidet, wer den Auftrag bekommt — nicht, wer die bessere Arbeit macht.",
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
      text: "Sie ist da und sieht ordentlich aus — nur taucht sie bei Google nirgends auf.",
    },
  ],
  closing:
    "In allen drei Fällen ruft der Kunde bei jemand anderem an. Meistens bei einem Betrieb, der nicht besser ist. Nur besser sichtbar.",
};

// ─── In jedem Paket enthalten ────────────────────────────────────────────────
// Wert-Stapel vor dem Preis: erst zeigen, was drin ist, dann was es kostet.
export const included = {
  eyebrow: "In jedem Paket",
  heading: "Alles, was eine Website zum Laufen braucht — inklusive.",
  intro:
    "Kein Baukasten-Abo, das du selbst befüllst, und keine Rechnung im dritten Monat für etwas, von dem du dachtest, es wäre dabei.",
  items: [
    {
      title: "Wunschdomain & Firmen-E-Mail",
      text: "Deine eigene Adresse und ein Postfach darauf. Registrierung läuft auf dich, nicht auf mich.",
    },
    {
      title: "Hosting & SSL",
      text: "Die Seite läuft, ist verschlüsselt und braucht von dir keinen Handgriff.",
    },
    {
      title: "Laufende Wartung",
      text: "Updates, Backups, Sicherheits-Checks und Erreichbarkeitsprüfung — ohne dass du davon etwas mitbekommst.",
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
      text: "Neue Öffnungszeiten, ein anderer Preis, ein aktuelles Foto — je nach Paket 1 bis 4 Änderungen pro Monat.",
    },
  ],
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
      "Wunschdomain & Firmen-E-Mail-Postfach",
      "Hosting, SSL & laufende Wartung",
      "Google-Business-Profil eingerichtet",
      "SEO-Grundausstattung",
      "Kontakt per Telefon-, Mail- und WhatsApp-Link",
      "1 Änderungswunsch pro Monat, umgesetzt in 5 Werktagen",
    ],
    ablöse: "100 €",
  },
  {
    name: "Business",
    setup: "300 €",
    monthly: "100 €",
    forWhom: "KMU mit mehreren Leistungen",
    pitch: "Der Betrieb mit allem, was er anbietet — und ein Formular, das Anfragen bringt.",
    recommended: true,
    recommendLabel: "Passt für die meisten Betriebe",
    features: [
      "Alles aus Starter",
      "Leistungen, Über uns und mindestens ein weiterer Bereich",
      "Kontaktformular",
      "Öffnungszeiten, Adresse & Routenlink",
      "Lokale SEO-Basis",
      "2 Änderungswünsche pro Monat, umgesetzt in 3 Werktagen",
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
      "Buchungstool eingebunden",
      "Interaktive Karte, datenschutzfreundlich per Klick geladen",
      "Laufende SEO-Betreuung",
      "Eigene Faktenseite für KI-Suche (ChatGPT & Co.)",
      "4 Änderungswünsche pro Monat, umgesetzt in 48 Stunden",
    ],
    ablöse: "250 €",
  },
];

export const pricingTerms = [
  "Mindestlaufzeit 12 Monate, danach automatische Verlängerung um jeweils weitere 12 Monate.",
  "Kündbar mit 3 Monaten Frist zum Ende der jeweiligen Laufzeit.",
  "Jahreszahlung auf Wunsch, mit 10 % Rabatt auf das Monatshonorar.",
  "Änderungswünsche gelten für den laufenden Monat und verfallen am Monatsende.",
  "Größere Erweiterungen — neue Bereiche oder Funktionen — werden vorher angeboten und separat verrechnet.",
  "Kleinunternehmerin gemäß § 6 Abs. 1 Z 27 UStG, daher keine Umsatzsteuer.",
];

// ─── Warum Auslage ───────────────────────────────────────────────────────────
export const why = {
  eyebrow: "Warum Auslage",
  heading: "Vier Gründe, die sich nachrechnen lassen.",
  items: [
    {
      title: "Der Einstieg tut nicht weh",
      text: `Vergleichbare Websites starten in Österreich bei ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig. Bei Auslage sind es 200 €. Du musst nicht erst ein halbes Jahresbudget aufmachen, um herauszufinden, ob es dir etwas bringt.`,
      footnote: proof.marktQuelle,
    },
    {
      title: "Zwei Wochen statt zwei Monate",
      text: `Der größte Mitbewerber im Land nennt selbst ${proof.mitbewerbDauer} Umsetzungsdauer. Bei mir ist deine Seite in ${proof.eigeneDauer} online — vorausgesetzt, ich bekomme deine Texte und Fotos zügig.`,
      footnote: proof.mitbewerbQuelle,
    },
    {
      title: "Du redest immer mit mir",
      text: "Kein Ticketsystem, keine wechselnden Ansprechpartner, keine Warteschleife. Du schreibst mir, ich antworte. Das ist der Vorteil eines Ein-Personen-Betriebs, und der einzige Grund, warum Änderungen in 48 Stunden überhaupt möglich sind.",
    },
    {
      title: "Barrierefrei von Anfang an",
      text: "Gute Lesbarkeit, klare Struktur, bedienbar auch per Tastatur. Nicht als Aufpreis und nicht nachträglich draufgesetzt, sondern weil eine Website, die manche Menschen aussperrt, ihre Aufgabe nicht erfüllt.",
    },
  ],
};

// ─── Was Auslage nicht ist ───────────────────────────────────────────────────
// Pratfall-Effekt: eine offen genannte Schwäche macht die übrigen Behauptungen
// glaubwürdiger. Diese Abgrenzungen stehen so auch in der Wettbewerbsanalyse —
// der niedrige Grundpreis ist genau deshalb möglich.
export const limits = {
  eyebrow: "Ehrlich gesagt",
  heading: "Was Auslage nicht ist.",
  intro:
    "Der Preis funktioniert, weil das Angebot schlank ist. Das heißt aber auch: manches ist nicht dabei. Besser, du weißt es jetzt als nach der Auftragsbestätigung.",
  items: [
    {
      title: "Keine Rundum-Agentur",
      text: "Fotoshooting, Logo-Entwicklung und Google-Ads-Betreuung mache ich, aber sie sind nicht im Paket. Sie werden separat angeboten und verrechnet — sonst müsste der Grundpreis für alle höher sein.",
    },
    {
      title: "Die Texte kommen von dir",
      text: "Du kennst deinen Betrieb, ich nicht. Ich frage, sortiere, formuliere um und mache daraus etwas Lesbares — aber der Inhalt muss von dir kommen. Wer stattdessen fertige Texte vom Anbieter will, ist bei einer größeren Agentur besser aufgehoben.",
    },
    {
      title: "Kein Online-Shop",
      text: "Ich baue Websites, die Anfragen und Kunden in den Betrieb bringen. Einen Webshop mit Lager, Versand und Zahlungsabwicklung nicht.",
    },
    {
      title: "Keine Bindung ohne Gegenleistung",
      text: "12 Monate Mindestlaufzeit sind eine Bindung, das verschweige ich nicht. Sie ist der Grund, warum die Einrichtung 200 € kostet statt 2.000 €. Wer sich nicht binden will, zahlt bei anderen Anbietern die Einrichtung voll — auch ein legitimer Weg.",
    },
  ],
};

// ─── Ablauf ──────────────────────────────────────────────────────────────────
// Startenergie senken: der erste Schritt kostet den Kunden fast nichts.
export const process = {
  eyebrow: "So läuft es ab",
  heading: "Drei Schritte, und keiner davon kostet dich einen Nachmittag.",
  steps: [
    {
      number: "01",
      title: "Kurz reden",
      text: "Ein Anruf oder ein paar Zeilen per Mail. Ich frage, was dein Betrieb macht und wer anrufen soll. Kostenlos, unverbindlich, kein Termin beim Notar.",
    },
    {
      number: "02",
      title: "Ich baue",
      text: "Du schickst mir Texte und Fotos, um alles Technische kümmere ich mich. Zwischendurch zeige ich dir den Stand, du sagst, was anders soll.",
    },
    {
      number: "03",
      title: "Online und betreut",
      text: "Die Seite geht live, das Google-Profil steht. Ab da läuft die Wartung, und Änderungen sagst du mir einfach.",
    },
  ],
};

// ─── Über Marina ─────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "Wer dahintersteckt",
  heading: "Ich bin Marina.",
  paragraphs: [
    "Ich bin in Berndorf aufgewachsen, war ein paar Jahre in der Steiermark — und dann ziemlich klar wieder zurück. Seit 15 Jahren mache ich Websites, Online-Shops, SEO und Marketing.",
    "Auslage gibt es aus einem einfachen Grund: Viele Betriebe hier im Bezirk sind online kaum zu finden. Nicht, weil ihnen die Kunden fehlen, sondern weil eine gute Website bisher teuer und kompliziert war. Das wollte ich ändern.",
    "Was du bekommst, ist eine Website, die etwas bringt — ohne dass du ein Vermögen ausgibst oder dich selbst durch die Technik kämpfst. Und jemanden, der den Bezirk kennt, weil sie von hier ist.",
  ],
  photo: "/images/marina-portrait.jpg",
  photoAlt: "Marina Zaiser",
  signature: "Marina Zaiser · Berndorf",
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Reihenfolge nach Einwandstärke: Geld und Bindung zuerst, Technik danach.
export const faq = {
  eyebrow: "Was meistens gefragt wird",
  heading: "Die Fragen, die vor der Zusage kommen.",
  items: [
    {
      q: "Warum 12 Monate Mindestlaufzeit?",
      a: "Weil die Einrichtung sonst nicht 200 € kosten könnte. Die eigentliche Arbeit steckt am Anfang — Aufbau, Domain, Google-Profil, Struktur. Andere Anbieter verrechnen das einmalig mit 1.790 € aufwärts. Ich verteile es über die Laufzeit. Die Bindung ist der Preis dafür, und sie gilt in beide Richtungen: ich bin die 12 Monate auch für dich da.",
    },
    {
      q: "Kann ich meine Website mitnehmen, wenn ich kündige?",
      a: "Ja. Gegen eine einmalige Ablöse-Gebühr — 100 € bei Starter, 150 € bei Business, 250 € bei Premium — bekommst du Quellcode und Inhalte in einem Format, mit dem jeder andere Dienstleister weiterarbeiten kann. Die Domain gehört ohnehin von Anfang an dir.",
    },
    {
      q: "Wie lange dauert es, bis meine Website online ist?",
      a: "In der Regel ein bis zwei Wochen. Was es länger macht, ist fast immer dasselbe: Ich warte auf Texte oder Fotos. Wenn du die parat hast, geht es schnell.",
    },
    {
      q: "Kann ich das nicht selbst mit einem Baukasten machen?",
      a: "Grundsätzlich ja, und für manche ist das genau richtig. Rechne nur ehrlich mit: Der Baukasten kostet auch monatlich, dazu kommen Domain und meist ein Aufpreis fürs eigene Postfach. Der eigentliche Preis sind die Abende, die du damit verbringst — und danach das Nachpflegen, das erfahrungsgemäß nach ein paar Monaten liegen bleibt.",
    },
    {
      q: "Muss ich mich um Hosting, SSL oder Updates kümmern?",
      a: "Nein. Das ist in jedem Paket enthalten und der Grund, warum es überhaupt ein Monatsmodell ist. Du bekommst davon nichts mit, außer dass die Seite läuft.",
    },
    {
      q: "Sind Domain und E-Mail-Adresse wirklich inklusive?",
      a: "Ja, in allen drei Paketen. Deine Wunschdomain, sofern noch frei, und ein Firmen-Postfach darauf. Die Domain wird auf dich registriert, nicht auf mich.",
    },
    {
      q: "Was, wenn ich später etwas brauche, das über mein Paket hinausgeht?",
      a: "Dann bekommst du vorher ein Angebot dafür. Es wird nie etwas verrechnet, das du nicht vorher freigegeben hast.",
    },
    {
      q: "Kann ich jährlich statt monatlich zahlen?",
      a: "Ja, mit 10 % Rabatt auf das Monatshonorar.",
    },
  ],
};

// ─── Kontakt ─────────────────────────────────────────────────────────────────
export const contact = {
  eyebrow: "Erster Schritt",
  heading: "Erzähl mir von deinem Betrieb.",
  text: "Ein paar Zeilen reichen. Ich schaue mir an, wie dein Betrieb online gerade dasteht, und sage dir ehrlich, ob und welches Paket Sinn ergibt. Antwort innerhalb von 24 Stunden.",
  // Risikoumkehr: alle drei Punkte sind Zusagen, die Marina tatsächlich einhält.
  reassurance: [
    "Antwort innerhalb von 24 Stunden",
    "Kostenlos und unverbindlich",
    "Kein Verkaufsgespräch, wenn es nicht passt",
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
  submit: "Anfrage senden",
  // Solange emailActive false ist, erklärt die Seite offen, dass das Formular
  // ein mailto öffnet, statt so zu tun, als gäbe es ein Backend.
  mailtoNote:
    "Das Formular öffnet dein E-Mail-Programm mit der fertigen Nachricht — es wird nichts auf dieser Seite gespeichert.",
};

export const ctaBand = {
  heading: "Zwei Wochen von hier bis online.",
  text: "Kostenloses Erstgespräch, ohne Verpflichtung und ohne dass dir danach jemand hinterhertelefoniert.",
  cta: { label: "Jetzt Auslage sichern", href: "/#kontakt" },
};

// ─── Navigation & Footer ─────────────────────────────────────────────────────
export const nav = [
  { label: "Warum", href: "/#warum" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Fragen", href: "/#fragen" },
];

export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "AVV", href: "/avv" },
];

export const brandAssets = {
  logoLight: "/images/auslage-logo.png",
  logoDark: "/images/auslage-logo-dark.png",
};

// ─── Preisseite ──────────────────────────────────────────────────────────────
export const pricingPage = {
  title: "Preise & Pakete – Auslage",
  metaDescription:
    "Drei Pakete für lokale Betriebe im Bezirk Baden und Triestingtal: ab 200 € Einrichtung und 50 € im Monat, inklusive Domain, Hosting, Wartung und Änderungen.",
  eyebrow: "Preise",
  heading: "Was es kostet, und was dafür drin ist.",
  intro:
    "Drei Pakete, alle Preise offen. Kein Angebot auf Anfrage, keine Staffelung nach Betriebsgröße und nichts, was erst im Gespräch dazukommt.",
  anchor: {
    heading: "Zum Einordnen",
    text: `Vergleichbare Websites kosten in Österreich ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig, bevor überhaupt eine monatliche Betreuung dazukommt. Auslage startet bei 200 € Einrichtung und 50 € im Monat — dafür mit Mindestlaufzeit.`,
    footnote: proof.marktQuelle,
  },
  ablöseHeading: "Wenn du wieder gehst",
  ablöseText:
    "Am Ende der Laufzeit bekommst du auf Wunsch Quellcode und Inhalte deiner Website übergeben, in einem Format, mit dem jeder andere Dienstleister weiterarbeiten kann. Dafür fällt einmalig eine Ablöse-Gebühr an. Die Domain gehört von Anfang an dir und bleibt bei dir.",
  termsHeading: "Das Kleingedruckte, groß geschrieben",
};
