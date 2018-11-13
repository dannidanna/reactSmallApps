// Dependencis
import React, { Component } from 'react';
import PropTypes  from 'prop-types';

//Asserts
import logo from './Imagens/logo.svg';
import './CSS/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo}  alt="logo" />
          <h1>{title} </h1>
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
