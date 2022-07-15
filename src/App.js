import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  
  const updateTime = () => {
    let ctime = new Date().toLocaleTimeString();
    setTime(ctime);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{ctime}</h1>
        <button onClick={updateTime}>Get Time</button>
      </header>
    </div>
  );
}

export default App;
