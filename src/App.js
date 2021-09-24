import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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
