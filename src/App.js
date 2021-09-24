import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import pocketContainer from './containers/pocketContainer';

class App extends Component {
  render() {
    console.log("Hello");
    return (
      <div className="App">
        <h1>Hello World</h1>
        <pocketContainer /> 
      </div>
    )
  }
}

export default App
