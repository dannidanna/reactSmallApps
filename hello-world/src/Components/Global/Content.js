import React, { Component } from 'react';
import './CSS/Content.css';

class Content extends Component {
  constructor(){
    super();

    this.state = {
      counter: 0,
      numberOne: 0,
      numberTwo: 0,
      result: 0
    }

    this.handleCounterClick = this.handleCounterClick.bind(this);
    this.handleOnChangeNumberValue =  this.handleOnChangeNumberValue.bind(this);
    this.handleEquals =  this.handleEquals.bind(this);
  }

  componentDidMount(){
  }

  handleCounterClick(e){
    if (e.target.id === "add") {
      this.setState({
        counter: this.state.counter + 1
      });
    } else if (e.target.id === "subs" && this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      this.setState({
        counter: 0
      });
    }
  }

  handleOnChangeNumberValue(e) {
    if(e.target.id === 'numberOne') {
      this.setState({
        numberOne: Number(e.target.value)
      });
    } else {
      this.setState({
        numberTwo: Number(e.target.value)
      });
    }       
  }

  handleEquals(e) {
    this.setState({
      result: this.state.numberOne + this.state.numberTwo
    });

  }

  render() {
    return (
      <div className="Content">
        <h1>Counter: {this.state.counter} </h1>
        <p>
          <button id="add" onClick={this.handleCounterClick}>+</button>
          <button id="subs" onClick={this.handleCounterClick}>-</button>
          <button id="restart" onClick={this.handleCounterClick}>Restart</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id="numberOne" type="number" value={this.state.numberOne} onChange={this.handleOnChangeNumberValue}></input>
          <input id="numberTwo" type="number" value={this.state.numberTwo} onChange={this.handleOnChangeNumberValue}></input>

          <button id="equals" onClick={this.handleEquals}>Result</button>
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default Content;
