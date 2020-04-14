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

  const todays = [`Today is ${newDate}`, `It is ${newDate} all day`, `All day its ${newDate}`];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>{todays}</h1>
          <p style={{padding: "0 50px"}}>It has been {totalDays} days since we were sane</p>
        </p>
      </header>
    </div>
  );
}

export default App;
