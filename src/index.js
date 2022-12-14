import React from "react";
import ReactDOM from "react-dom/client";

// App Component
import App from "./app/App";

// Global css file (index.css)
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
