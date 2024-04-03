import React from 'react'
import './Header.css';
import logo from "../../assets/img/logo_transparent.png";



function header() {
  return (
    
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
  );
}

export default header


