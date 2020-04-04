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
        <p>
          <h1>Today is {newDate}!</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
