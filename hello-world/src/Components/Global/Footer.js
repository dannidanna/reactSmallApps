// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './CSS/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired
  }

  render() {
    const copyright = this.props.copyright;
    return (
      <div className="Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
