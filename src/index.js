import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Random Number Feed</h1>
      </div>
      <div>
        <h2>RandomNumber</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
