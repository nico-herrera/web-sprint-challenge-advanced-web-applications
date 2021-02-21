import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { history } from "./history";
const { worker } = require("./mocks/browser");

worker.start();

const rootElement = document.getElementById("root");
ReactDOM.render(<App history={history} />, rootElement);
