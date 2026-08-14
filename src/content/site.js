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
// Headline als rhetorische Frage übers Suchverhalten statt über die Marken-
// Metapher (Auslage = Schaufenster): "Dein Betrieb hat eine Auslage" war als
// Prämisse falsch für alle ohne physisches Schaufenster (Handwerker, mobile
// Dienstleister) — der erste Satz widersprach der Realität eines großen Teils
// der Zielgruppe. Jobs-to-be-Done-Framing stattdessen: Kunden wollen gefunden
// werden, nicht "eine Auslage haben". Knüpft direkt an die Problem-Sektion an
// ("Wer nicht gefunden wird, wird auch nicht angerufen."). Marinas Wahl aus
// drei Vorschlägen (marketing-psychology + copywriting Skills), 2026-08-07.
export const hero = {
  eyebrow: "Websites für Betriebe im Bezirk Baden & Triestingtal",
  headline: "Deine Kunden suchen online.",
  headlineAccent: "Finden sie dich?",
  subline:
    "Ich baue und betreue die Website für deinen Betrieb. In rund zwei Wochen online, ab 200 € Einrichtung und 50 € im Monat, mit Domain, Hosting und Wartung. Ohne Technik-Kauderwelsch, mit einer Ansprechperson statt einem Ticketsystem.",
  primaryCta: { label: "Jetzt Auslage sichern", href: "/#kontakt" },
  secondaryCta: { label: "Pakete & Preise ansehen", href: "/preise" },
  // Nur Belegbares. Keine Kundenzahlen — die gibt es noch nicht.
  trustItems: [
    "15 Jahre Erfahrung",
    "Aus Berndorf, Niederösterreich",
    "Domain, Hosting & Wartung inklusive",
  ],
};

// ─── Problem ─────────────────────────────────────────────────────────────────
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
      title: "Wunschdomain & Firmen-E-Mail",
      text: "Deine eigene Adresse und ein Postfach darauf. Die Domain läuft auf deinen Namen, ich übernehme die Einrichtung.",
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
    pitch: "Der Betrieb mit allem, was er anbietet, und ein Formular, das Anfragen bringt.",
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
      {
        text: "Eigene Seite, damit auch ChatGPT & Co. deinen Betrieb richtig wiedergeben",
        tag: "Nur in Premium",
      },
      "Buchungstool eingebunden",
      "Interaktive Karte, datenschutzfreundlich per Klick geladen",
      "Laufende SEO-Betreuung",
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
  "Größere Erweiterungen (neue Bereiche oder Funktionen) werden vorher angeboten und separat verrechnet.",
];

// ─── Warum Auslage ───────────────────────────────────────────────────────────
export const why = {
  eyebrow: "Warum auslage",
  heading: "Drei Gründe, die sich nachrechnen lassen.",
  items: [
    {
      title: "Der Einstieg tut nicht weh",
      text: `Vergleichbare Websites starten in Österreich bei ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig. Bei auslage sind es 200 €. Du musst nicht erst ein halbes Jahresbudget aufmachen, um herauszufinden, ob es dir etwas bringt.`,
      footnote: proof.marktQuelle,
    },
    {
      title: "Zwei Wochen statt zwei Monate",
      text: `Der größte Mitbewerber im Land nennt selbst ${proof.mitbewerbDauer} Umsetzungsdauer. Bei mir ist deine Seite in ${proof.eigeneDauer} online, vorausgesetzt, ich bekomme deine Texte und Fotos zügig.`,
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
export const process = {
  eyebrow: "So läuft es ab",
  heading: "Drei Schritte, und keiner davon kostet dich einen Nachmittag.",
  steps: [
    {
      number: "01",
      title: "Kurz reden",
      text: "Ein Anruf oder ein paar Zeilen per Mail. Ich frage, was dein Betrieb macht und was auf der Website stehen soll. Kostenlos und unverbindlich.",
    },
    {
      number: "02",
      title: "Ich baue",
      text: "Du schickst mir Texte und Fotos. Um alles Technische kümmere ich mich. Zwischendurch zeige ich dir den Stand, du sagst mir, was anders sein soll.",
    },
    {
      number: "03",
      title: "Online und betreut",
      text: "Die Seite geht live, das Google-Profil steht. Ab da läuft die Wartung, und Änderungswünsche schickst du mir einfach.",
    },
  ],
};

// ─── Über Marina ─────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "Wer dahintersteckt",
  heading: "Ich bin Marina.",
  // Vier Blöcke mit eigener Mini-Überschrift statt Fließtext-Wand (Marinas Wunsch).
  // Steiermark bewusst raus (Marinas Wunsch, "uninteressant"). "15 Jahre" bleibt
  // konsistent mit proof.jahreErfahrung, aber ohne die private/beruflich-Liste
  // wörtlich zu wiederholen. Baukasten-Erwähnung: sie hat die Alternative selbst
  // benutzt, macht ihre FAQ-Antwort zu "Kann ich das nicht selbst mit einem
  // Baukasten machen?" glaubwürdiger (Authority Bias). Ehrlichkeit/Verlässlichkeit
  // im letzten Block sind Marinas eigene Antwort auf "was ist dir bei Kunden
  // wichtig" — bewusst nicht "persönliche Nähe" nochmal, das steht schon in der
  // Warum-Sektion ("Du redest immer mit mir"). Berndorf/Region erst im dritten
  // Block genannt (Marinas Wunsch) — vorher bleibt der Ort unerwähnt.
  sections: [
    {
      heading: "Früh von Technik gepackt",
      text: "Programmieren hat mich schon in den frühen 2000ern gepackt, dabei war mir klassisches Coding aber schnell zu aufwendig. Geblieben ist die Lust am Tüfteln, bis eine Lösung passt, und am Ausprobieren neuer Tools.",
    },
    {
      heading: "Vom Baukasten zur KI",
      text: "Von frühen Baukasten-Systemen bis zu den KI-Elementen, mit denen ich heute arbeite: Eine Website entsteht damit inzwischen relativ schnell. Seit 15 Jahren beschäftige ich mich mit Websites, Onlineshops und allem, was dazugehört, beruflich vor allem mit Brandbuilding und Marketing.",
    },
    {
      heading: "Warum ausgerechnet hier",
      text: "Berndorf in Niederösterreich und die Region drum herum liegen mir am Herzen. Ich sehe hier viel Potenzial. auslage gibt es deshalb aus einem einfachen Grund: Viele Betriebe hier sind online kaum zu finden. Nicht, weil ihnen die Kunden fehlen, sondern weil eine gute Website bisher teuer und kompliziert war. Das will ich ändern.",
    },
    {
      heading: "Was du bekommst",
      text: "Eine Website, die ehrlich kalkuliert ist, ohne dass du ein Vermögen ausgibst oder dich selbst durch die Technik kämpfen musst. Und eine Ansprechperson, auf die Verlass ist und die die Region kennt, weil sie von hier ist.",
    },
  ],
  photo: "/images/marina-portrait.jpg",
  photoAlt: "Marina Zaiser",
  signature: "Marina Zaiser",
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Reihenfolge nach Einwandstärke: Geld und Bindung zuerst, Technik danach.
export const faq = {
  eyebrow: "Was meistens gefragt wird",
  heading: "Die Fragen, die vor der Zusage kommen.",
  items: [
    {
      q: "Warum 12 Monate Mindestlaufzeit?",
      a: "Weil die Einrichtung sonst nicht 200 € kosten könnte. Die eigentliche Arbeit steckt am Anfang: Aufbau, Domain, Google-Profil, Struktur. Andere Anbieter verrechnen das einmalig mit 1.790 € aufwärts. Ich verteile es über die Laufzeit. Die Bindung ist der Preis dafür, und sie gilt in beide Richtungen: ich bin die 12 Monate auch für dich da.",
    },
    {
      q: "Kann ich meine Website mitnehmen, wenn ich kündige?",
      a: "Ja. Gegen eine einmalige Ablöse-Gebühr (100 € bei Starter, 150 € bei Business, 250 € bei Premium) bekommst du Quellcode und Inhalte in einem Format, mit dem jeder andere Dienstleister weiterarbeiten kann. Die Domain gehört ohnehin von Anfang an dir.",
    },
    {
      q: "Wie lange dauert es, bis meine Website online ist?",
      a: "In der Regel ein bis zwei Wochen. Was es länger macht, ist fast immer dasselbe: Ich warte auf Texte oder Fotos. Wenn du die parat hast, geht es schnell.",
    },
    {
      q: "Kann ich das nicht selbst mit einem Baukasten machen?",
      a: "Grundsätzlich ja, und für manche ist das genau richtig. Rechne nur ehrlich mit: Der Baukasten kostet auch monatlich, dazu kommen Domain und meist ein Aufpreis fürs eigene Postfach. Der eigentliche Preis sind die Abende, die du damit verbringst, und danach das Nachpflegen, das erfahrungsgemäß nach ein paar Monaten liegen bleibt.",
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
      q: "Was ist die Faktenseite für KI-Suche im Premium-Paket?",
      a: "Eine zusätzliche Seite, die speziell für KI-Assistenten wie ChatGPT aufbereitet ist, statt für menschliche Besucher. Immer mehr Menschen fragen KI-Tools statt Google, wenn sie einen Betrieb in der Nähe suchen. Diese Seite sorgt dafür, dass die Antwort stimmt: richtige Öffnungszeiten, richtige Leistungen, richtige Adresse.",
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
    "Das Formular öffnet dein E-Mail-Programm mit der fertigen Nachricht. Es wird nichts auf dieser Seite gespeichert.",
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
  title: "Preise & Pakete – auslage",
  metaDescription:
    "Drei Pakete für lokale Betriebe im Bezirk Baden und Triestingtal: ab 200 € Einrichtung und 50 € im Monat, inklusive Domain, Hosting, Wartung und Änderungen.",
  eyebrow: "Preise",
  heading: "Was es kostet, und was dafür drin ist.",
  intro:
    "Drei Pakete, alle Preise offen. Kein Angebot auf Anfrage, keine Staffelung nach Betriebsgröße und nichts, was erst im Gespräch dazukommt.",
  anchor: {
    heading: "Zum Einordnen",
    text: `Vergleichbare Websites kosten in Österreich ${proof.marktSetupVon} bis ${proof.marktSetupBis} einmalig, bevor überhaupt eine monatliche Betreuung dazukommt. auslage startet bei 200 € Einrichtung und 50 € im Monat, dafür mit Mindestlaufzeit.`,
    footnote: proof.marktQuelle,
  },
  ablöseHeading: "Wenn du wieder gehst",
  ablöseText:
    "Am Ende der Laufzeit bekommst du auf Wunsch Quellcode und Inhalte deiner Website übergeben, in einem Format, mit dem jeder andere Dienstleister weiterarbeiten kann. Dafür fällt einmalig eine Ablöse-Gebühr an. Die Domain gehört von Anfang an dir und bleibt bei dir.",
  termsHeading: "Das Kleingedruckte, groß geschrieben",
};
