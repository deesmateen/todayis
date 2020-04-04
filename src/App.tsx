import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date(); 
  const date = { weekday: 'long' };
  const newDate = today.toLocaleDateString('en-US', date);  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Today is {newDate}!</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
