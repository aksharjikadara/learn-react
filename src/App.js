import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Akshar's React App</h2> 
        {/* <p>This is paragraph and new page</p> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://storage.googleapis.com/replit/images/1667056318233_b9b0d25474c1ae4458b8f851d87648c9.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react with Akshar Jikadara
        </a>
      </header>
    </div>
  );
}

export default App;
