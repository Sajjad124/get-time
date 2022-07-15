import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Time</h1>
        <button>Get Time</button>
      </header>
    </div>
  );
}

export default App;
