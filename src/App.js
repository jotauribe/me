import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Langs from "./components/Languages";
import Education from "./components/Education";

const ThreeColumnsLayout = styled.div`
  display: flex;
  background-color: transparent;

  & > *:not(:last-child) {
    margin-right: 8px;
  }

  & > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 33.333%;
    max-width: 33.4%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <ThreeColumnsLayout style={{ display: "flex", alignItems: "stretch" }}>
          <Experience />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch"
            }}
          >
            <Skills style={{ marginBottom: "8px" }} />
            <Langs style={{ flexGrow: "1" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch"
            }}
          >
            <Education style={{ marginBottom: "8px" }} />
            <Langs style={{ flexGrow: "1" }} />
          </div>
        </ThreeColumnsLayout>
      </div>
    );
  }
}

export default App;
