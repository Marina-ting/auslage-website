# Deployen — die Kurzanleitung

Für Marina, geschrieben am 18.08.2026. Wenn du das hier nicht mehr brauchst, lösch es.

## Der ganze Vorgang

1. **Terminal im richtigen Ordner öffnen.**
   In VS Code: `Terminal` → `Neues Terminal`. Achte auf den Pfad in der ersten
   Zeile — er muss auf `auslage-website-v2` enden, nicht auf `waas`. Ein
   Ordner zu hoch, und `npm` findet die `package.json` nicht.

2. **Ein Befehl:**

   ```
   npm run deploy
   ```

3. **Warten.** Zwei Minuten etwa. Wenn keine rote Fehlermeldung kommt und am
   Ende eine Cloudflare-URL steht, ist es oben.

4. **Nachschauen:** https://auslage.io/?vorschau=werner
   Mit **Strg + Shift + R** neu laden. Ein normales F5 zeigt dir sonst die
   alte Fassung aus dem Browser-Cache, und du suchst den Fehler im Code,
   während er nur in deinem Browser sitzt. Das ist die häufigste Falle.

## Was dabei passiert

`npm run deploy` ist eine Abkürzung für mehrere Befehle hintereinander:

```
vite build           →  baut die Seite in den Ordner dist/
vite build --ssr     →  baut eine zweite, kleine Fassung für Schritt 3
node scripts/…       →  schreibt jede Seite fertig nach dist/ (siehe unten)
wrangler deploy      →  schiebt den Inhalt von dist/ zu Cloudflare
```

Jeder Schritt läuft nur, wenn der davor **fehlerfrei** durchgelaufen ist.

Am Ende steht eine Zeile wie „Prerendering: 9 Seiten geschrieben". Kommt sie
nicht, ist etwas schiefgegangen und es geht auch nichts hoch.

### Was das Prerendering macht

Die Seite baut sich normalerweise erst im Browser zusammen. Wer kein
JavaScript ausführt, sah deshalb auf jeder Unterseite den Titel der
Startseite: die Link-Vorschauen von WhatsApp, Facebook und LinkedIn zum
Beispiel, und die meisten KI-Assistenten.

Seit 18.08. rendert der Build jede Seite einmal fertig und legt sie als eigene
Datei ab — `dist/preise.html`, `dist/impressum.html` und so weiter. Titel und
Beschreibung stehen damit direkt im ausgelieferten HTML. Am Bildschirm ändert
sich nichts.

Die Liste der Seiten steht in `src/content/site.js` unter `routes`. Wer eine
neue Seite anlegt, trägt sie dort ein — vergisst er es, bricht der Build ab
und sagt, welche fehlt.

**Das ist deine Sicherheitsleine:** Ein kaputter Build kann die Live-Seite
nicht zerstören. Er bricht ab, bevor irgendetwas hochgeht. Oben bleibt dann
die letzte funktionierende Fassung stehen. Du kannst also nichts kaputt
machen, was schon läuft — im schlimmsten Fall ändert sich nichts.

Wohin es geht, steht in `wrangler.jsonc`: Worker-Name `auslage-website`,
ausgeliefert wird der Ordner `dist`.

## Wann du NICHT deployen musst

Zum Anschauen reicht:

```
npm run dev
```

Dann im Browser `http://localhost:5173/?vorschau=werner`. Das läuft nur auf
deinem Rechner, aktualisiert sich beim Speichern von selbst und geht nirgends
hin. Deployen brauchst du nur, wenn es **wirklich auf den Server** soll —
etwa um es jemandem zu zeigen oder am Handy zu prüfen.

## Vorher committen (Empfehlung, kein Muss)

`npm run deploy` nimmt, was gerade im Ordner liegt — nicht, was zuletzt
committet wurde. Deployst du ohne Commit, liegt auf dem Server ein Stand, zu
dem es keinen Punkt in der Historie gibt. Zurückrollen geht dann nicht, weil
es nichts gibt, worauf man zeigen könnte.

In VS Code links auf das Quellcodeverwaltungs-Symbol, Nachricht eintippen,
Häkchen. Dann deployen.

## Wenn etwas schiefgeht

- **`wrangler` will einen Login** → einmalig `npx wrangler login`, es öffnet
  sich der Browser.
- **Rote Fehler beim Build** → lies die **erste** rote Zeile, nicht die
  letzte. Dort steht Datei und Zeilennummer. Die Seite ist nicht betroffen.
- **Die Änderung ist nicht zu sehen** → erst Strg+Shift+R. Wenn sie dann
  immer noch fehlt, war der Build vielleicht in einem anderen Ordner.
- **`.git/index.lock`-Fehler in VS Code** → eine Sitzung hat einen Git-Befehl
  hinterlassen. Die Datei `auslage-website-v2/.git/index.lock` löschen, dann
  geht es wieder.

## Was noch nicht live ist, obwohl es deployt ist

`comingSoon` steht in `src/content/site.js` auf `true`. Besucher ohne den
Schlüssel `?vorschau=werner` sehen die Platzhalterseite. Zusätzlich tragen
alle Seiten ein `robots: noindex,nofollow`, damit Google und Link-Vorschauen
sie nicht aufgreifen.

**Beim echten Go-Live ist nur noch eines zu tun:** `comingSoon` in
`src/content/site.js` auf `false` setzen und neu deployen. Titel,
Beschreibungen und die robots-Zeile ziehen im selben Build von selbst nach.

Bis zum 18.08. musste man dazu auch noch von Hand in `index.html` Zeilen
ein- und auskommentieren. Das ist weggefallen: dieser Teil der Datei wird
beim Bauen ohnehin überschrieben.
