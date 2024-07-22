import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </React.StrictMode>
);

reportWebVitals();
