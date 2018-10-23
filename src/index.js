import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";

import "./assets/styles/application.sass";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
