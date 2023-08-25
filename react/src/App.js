import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // State to hold the fetched data
  const [data, setData] = useState(null);

  // Function to fetch data from a URL
  const fetchData = async () => {
    try {
      const currentServerTimeResponse = await fetch('/api/currentTime');
      const currentServerTime = await currentServerTimeResponse.text();
      console.log("Fetched data:", currentServerTime);
      setData(currentServerTime);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Button to fetch data */}
        <br />
        <button onClick={fetchData}>Fetch currentServerTime</button>

        {/* Display fetched data */}
        {data && (
          <div>
            <p><strong>Fetched Data, </strong></p>
            <p>{`currentTime: ${data}`}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
