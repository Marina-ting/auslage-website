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

`npm run deploy` ist eine Abkürzung für zwei Befehle hintereinander:

```
vite build      →  baut die Seite in den Ordner dist/
wrangler deploy →  schiebt den Inhalt von dist/ zu Cloudflare
```

Der zweite läuft nur, wenn der erste **fehlerfrei** durchgelaufen ist.

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
Schlüssel `?vorschau=werner` sehen die Platzhalterseite. Zusätzlich trägt
`index.html` ein `robots: noindex,nofollow`, damit Google und
Link-Vorschauen die Seite nicht aufgreifen.

**Beim echten Go-Live gehören beide zusammen umgestellt** — `comingSoon` auf
`false` UND in `index.html` die robots-Zeile raus samt der auskommentierten
Titel/Description-Zeilen hinein. Nur eines von beidem zu ändern, ist der
Fehler, der wehtut.
