/**
 * Die Auslage: der Betrieb bei Dämmerung, im beleuchteten Schaufenster steht
 * die Website. Kein Foto, keine Personen, keine erfundenen Kundeninhalte —
 * reine Flächen in den Markenfarben (Marinas Entscheidung 17.08., Variante B
 * aus drei gebauten Header-Entwürfen).
 *
 * Die Grafik ist ein Markenelement, nicht nur Dekoration im Header: wird sie
 * geändert, gehört die Änderung in die Branding-Ressource nachgezogen.
 *
 * Bewusst inline statt als Datei: keine zusätzliche Anfrage, die Markenfarben
 * bleiben im Code sichtbar, und die Grafik skaliert verlustfrei.
 */
export default function Shopfront() {
  return (
      <svg
        className="shopfront"
        viewBox="0 0 640 580"
        role="img"
        aria-label="Illustration: ein Betrieb bei Dämmerung, das Schaufenster ist beleuchtet und zeigt die Website."
      >
        <defs>
          <linearGradient id="dusk" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#142c22" />
            <stop offset="55%" stopColor="#1e3d30" />
            <stop offset="100%" stopColor="#2b5548" />
          </linearGradient>
          <radialGradient id="lamp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7d4b6" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#f7d4b6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f7d4b6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="inner" cx="50%" cy="26%" r="78%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffe7cf" stopOpacity="0.55" />
          </radialGradient>
          <linearGradient id="spill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7d4b6" stopOpacity="0.62" />
            <stop offset="70%" stopColor="#f7d4b6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f7d4b6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pane" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3ecdd" />
          </linearGradient>
          <clipPath id="paneClip">
            <rect x="84" y="266" width="348" height="184" rx="8" />
          </clipPath>
          <clipPath id="sceneClip">
            <rect x="0" y="0" width="640" height="580" rx="22" />
          </clipPath>
        </defs>

        <rect x="0" y="0" width="640" height="580" rx="22" fill="url(#dusk)" />

        <g clipPath="url(#sceneClip)">
          {/* Dämmerungsschein oben rechts */}
          <circle cx="560" cy="70" r="150" fill="url(#lamp)" opacity="0.5" />

          {/* Fassade */}
          <rect x="36" y="126" width="568" height="358" fill="#35665a" />
          <rect x="36" y="126" width="568" height="358" fill="none" stroke="#4a7a6b" strokeWidth="2" />
          {/* Gesimse — nur zwei Linien, damit die Wand nicht leer wirkt */}
          <rect x="36" y="126" width="568" height="10" fill="#234636" />
          <rect x="36" y="470" width="568" height="14" fill="#234636" />

          {/* Markise */}
          <path d="M20 196 H620 V232 Q620 242 610 242 H30 Q20 242 20 232 Z" fill="#d9773f" />
          <path d="M20 236 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 q22 18 44 0 V232 H20 Z" fill="#b45a26" />
          <rect x="20" y="192" width="600" height="6" rx="3" fill="#a34f20" opacity="0.5" />

          {/* Wandlampe links */}
          <circle cx="70" cy="176" r="46" fill="url(#lamp)" />
          <rect x="64" y="164" width="12" height="16" rx="4" fill="#f5c9a8" />

          {/* Licht aus dem Fenster */}
          <circle cx="258" cy="358" r="250" fill="url(#lamp)" />

          {/* Lichtschein auf dem Gehsteig */}
          <polygon points="72,456 460,456 576,580 -44,580" fill="url(#spill)" />

          {/* Schaufenster */}
          <rect x="60" y="250" width="412" height="216" rx="12" fill="#234636" />
          <rect x="72" y="262" width="388" height="192" rx="8" fill="url(#pane)" />
          <rect x="72" y="262" width="388" height="192" rx="8" fill="url(#inner)" />
          {/* Heller Rahmen: die Scheibe leuchtet nach außen */}
          <rect x="68" y="258" width="396" height="200" rx="10" fill="none" stroke="#f7d4b6" strokeWidth="3" opacity="0.6" />

          {/* Im Fenster: die Website */}
          <g clipPath="url(#paneClip)">
            <rect x="86" y="278" width="360" height="76" rx="7" fill="#2f5d50" />
            <rect x="102" y="296" width="216" height="9" rx="4.5" fill="#fbf6ee" opacity="0.95" />
            <rect x="102" y="311" width="152" height="9" rx="4.5" fill="#fbf6ee" opacity="0.5" />
            <rect x="102" y="327" width="86" height="16" rx="8" fill="#d9773f" />

            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x={86 + i * 122}
                  y="370"
                  width="110"
                  height="56"
                  rx="7"
                  fill="#f3ecdd"
                  stroke="#e0d8c6"
                  strokeWidth="1.5"
                />
                <rect x={100 + i * 122} y="382" width="66" height="7" rx="3.5" fill="#cfc4ac" />
                <rect x={100 + i * 122} y="396" width="82" height="7" rx="3.5" fill="#e0d8c6" />
              </g>
            ))}
          </g>

          {/* Spiegelung in der Scheibe — eine schräge Lichtbahn */}
          <polygon points="316,262 372,262 212,454 156,454" fill="#ffffff" opacity="0.06" />

          {/* Fensterbank / Ablage — dieselbe Linie wie im Markenicon */}
          <rect x="52" y="456" width="428" height="10" rx="5" fill="#d9773f" />

          {/* Tür */}
          <rect x="492" y="250" width="88" height="234" rx="10" fill="#234636" stroke="#4a7a6b" strokeWidth="2" />
          <rect x="506" y="270" width="60" height="104" rx="6" fill="#3d6a5b" />
          <rect x="506" y="270" width="60" height="104" rx="6" fill="#f5c9a8" opacity="0.24" />
          <circle cx="570" cy="398" r="5" fill="#f5c9a8" opacity="0.85" />

          {/* Gehsteig */}
          <rect x="0" y="484" width="640" height="96" fill="#132a20" />
          <rect x="0" y="484" width="640" height="3" fill="#d9773f" opacity="0.6" />
        </g>
      </svg>
  );
}
