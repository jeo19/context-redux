import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.instanceCounter = 1;
    this.state = {
      stateCounter: 1,
    };
  }
  setStateCounter = () => {
    this.setState({
      stateCounter: this.state.stateCounter + 1,
    });
    console.log(this.state.stateCounter);
  };
  setInstanceCounter = () => {
    this.instanceCounter = this.instanceCounter + 1;
    console.log(this.instanceCounter);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          State Counter: {this.state.stateCounter}{' '}
          <button onClick={this.setStateCounter}>Inc State</button>
        </div>

        <div>
          Instance Counter: {this.instanceCounter}
          <button onClick={this.setInstanceCounter}>Inc Instance</button>
        </div>
      </div>
    );
  }
}
