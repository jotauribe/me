import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const TwoColumnsLayout = styled.div`
  display: flex;
  background-color: transparent;

  & > *:not(:last-child) {
    margin-right: 24px;
  }

  & > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    max-width: 50%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <TwoColumnsLayout style={{ display: "flex", alignItems: "stretch" }}>
          <Experience />
        </TwoColumnsLayout>
      </div>
    );
  }
}

export default App;
