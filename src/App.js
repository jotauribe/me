import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Experience />
      </div>
    );
  }
}

export default App;
