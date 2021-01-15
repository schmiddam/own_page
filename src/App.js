import pic from './pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="Daemr" alt="daemr" />
        <h3 className="Typewriter">
          I am Damaris Schmid.
        </h3>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/damaris-schmid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Damaris Schmid
        </a>
      </header>
    </div>
  );
}

export default App;
