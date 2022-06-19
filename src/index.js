import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.REACT_APP_ROUTER_BASE_NAME}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
