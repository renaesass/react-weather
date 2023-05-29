import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Copenhagen" />

        <footer>
          This project was coded by{" "}
          <a
            className="links"
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renae Sass
          </a>{" "}
          and is{" "}
          <a
            className="links"
            href="https://github.com/renaesass/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            className="links"
            href="https://peppy-pothos-020c0e.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
