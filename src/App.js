import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import PocketContainer from './containers/PocketContainer.js';

class App extends Component {
  render() {
    console.log("Hello");
    return (
      <div className="App">
        <PocketContainer /> 
      </div>
    )
  }
}

export default App
