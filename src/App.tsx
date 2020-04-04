import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const today:any = new Date(); 
  const date = { weekday: 'long' };
  const newDate = today.toLocaleDateString('en-US', date);
  const startQ:any = new Date('03/16/2020');
  const diffDate = Math.abs(today - startQ);
  const totalDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Today is {newDate}</h1>
          <h1>It has been {totalDays} since we were sane</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
