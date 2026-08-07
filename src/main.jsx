import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Nur die tatsächlich verwendeten Schnitte, und nur das Latin-Subset.
// Ohne "latin-" zieht Fontsource auch Devanagari mit — rund 260 kB Schriften,
// die auf einer deutschsprachigen Seite nie zum Einsatz kommen.
// Poppins 300 ist die Schrift der Wortmarke und trägt alle großen Überschriften.
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/sections.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
