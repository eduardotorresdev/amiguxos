import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import reportWebVitals from "./reportWebVitals";
import "./sass/index.sass";

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
} else {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
}

reportWebVitals();
