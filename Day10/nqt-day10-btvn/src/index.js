// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { ThemeProvider } from "./context/NqtThemeContext";
import NqtApp from "./NqtApp";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("nqtRoot");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(
  <ThemeProvider>
    <NqtApp />
  </ThemeProvider>
);