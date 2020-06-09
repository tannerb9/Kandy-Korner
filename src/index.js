import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import KandyKounter from "./components/KandyKounter";
import "./index.css";

ReactDOM.render(
  <Router>
    <KandyKounter />
  </Router>,
  document.getElementById("root")
);
