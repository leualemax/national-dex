/* istanbul ignore file */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
registerServiceWorker();
