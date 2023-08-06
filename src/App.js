import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary App</h1>
        </header>
        <Dictionary defaultKeyword="wine" />
        <footer className="App-footer">
          <small>
            Coded by <strong>Celine Cambier</strong>, is{" "}
            <a
              href="https://github.com/CelineCambier/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-source
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://spontaneous-sprite-9b35cd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
