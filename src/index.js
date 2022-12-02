import React from "react";
import ReactDOM from "react-dom/client";

// App Component
import App from "./app/App";

// Global css file (index.css)
import "./index.css";

//toast
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
    <ToastContainer />
  </React.Fragment>
);
