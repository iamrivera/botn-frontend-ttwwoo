import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from './components/routes/Navbar';
import About from './components/routes/About';
import Home from './components/routes/Home';
import PocketContainer from './containers/PocketContainer.js';
import PocketForm from './components/PocketForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <PocketContainer />
      </div>
    )
  }
}

export default App
