import React from 'react';
import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Current count: 0</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      <Firstcomponent />
    </div>
  );
}

export default App;
