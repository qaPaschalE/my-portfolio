// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext"; // 1. Import

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 2. Wrap your App component */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
