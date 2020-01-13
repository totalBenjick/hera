import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);
