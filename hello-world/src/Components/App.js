// Dependencies
import React, { Component } from 'react';

// Components
import Header from '../Components/Global/Header';
import Content from '../Components/Global/Content'
import Footer from '../Components/Global/Footer'

// Data

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
