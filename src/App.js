import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <footer>
        <p>
          This project was coded by Kearabetswe Jabane and is{" "}
          <a
            href="https://github.com/Kearabetswejabane/weather-app"
            target="blank"
          >
            Open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
