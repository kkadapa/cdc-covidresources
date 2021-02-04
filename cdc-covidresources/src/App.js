import logo from './logotype.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.cdc.gov/coronavirus/2019-ncov/communication/toolkits/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          COVID-19 One-Stop Shop Toolkits
        </a>
      </header>
    </div>
  );
}

export default App;
