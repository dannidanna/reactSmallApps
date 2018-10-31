import React, { Component } from 'react';
import logo from './Imagens/logo.svg';
import './CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo}  alt="logo" />
          <h1>React header </h1>
        </header>
      </div>
    );
  }
}

export default Header;
