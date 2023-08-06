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
          <small>Coded by Celine Cambier</small>
        </footer>
      </div>
    </div>
  );
}
