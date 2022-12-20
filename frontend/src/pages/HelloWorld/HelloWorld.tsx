import React from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

function HelloWorld() {
  return (
    <div className="HelloWorld">
      <header className="HelloWorld-header">
        <img src={logo} className="HelloWorld-logo" alt="logo" />
        <p>
          Edit <code>src/HelloWorld.tsx</code> and save to reload.
        </p>
        <a
          className="HelloWorld-link"
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

export default HelloWorld;
