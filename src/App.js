import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <body>
        <Search />
        <Forecast />
        <footer>
          <p>
            Created By{" "}
            <a
              className="gitlink"
              href="https://github.com/renaesass/react-weather"
              target="blank"
            >
              Renae Sass{""}
            </a>
            <span>
              View on{" "}
              <a
                href="https://bright-bublanina-9aaecd.netlify.app"
                target="blank"
              >
                GitHub
              </a>
            </span>
          </p>
        </footer>
      </body>
      <div></div>
    </div>
  );
}

export default App;
