import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./components/App";

const rootNode = document.querySelector("#root");

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  rootNode
);
