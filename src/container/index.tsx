import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function handleEvent(event: MessageEvent) {
  if (event.origin !== "http://localhost:3001") {
    return;
  }

  if (event.data) {
    const mfLogisticReports = window.document.getElementById(
      "mf-logistic-reports"
    ) as HTMLIFrameElement;
    const mfPapermillOverview = window.document.getElementById(
      "mf-papermill-overview"
    ) as HTMLIFrameElement;

    mfLogisticReports.contentWindow?.postMessage(
      event.data,
      "http://localhost:3002"
    );
    mfPapermillOverview.contentWindow?.postMessage(
      event.data,
      "http://localhost:3003"
    );
  }
}

window.addEventListener("message", handleEvent);

ReactDOM.render(<App />, document.getElementById("app-root"));
