import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// These lines import the CSS files from the original template.
// You can keep them or modify them as you see fit.
// Make sure these files exist in your public/css folder or update the path.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
