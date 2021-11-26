import React from "react";

function App() {
  return (
    <div>
      <h1>Composite UI demo</h1>
      <iframe src="http://localhost:3001" id="mf-control-panel" />
      <iframe src="http://localhost:3002" id="mf-logistic-reports" />
      <iframe src="http://localhost:3003" id="mf-papermill-overview" />
    </div>
  );
}

export default App;
