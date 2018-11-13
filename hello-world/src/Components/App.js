// Dependencies
import React, { Component } from 'react';

// Components
import Header from '../Components/Global/Header';
import Content from '../Components/Global/Content'
import Footer from '../Components/Global/Footer'

// Data
import items from '../Components/Data/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Pruebas React" items={items}/>
        <Content />
        <Footer copyright="&copy; Danny test 2018" />
      </div>
    );
  }
}

export default App;
