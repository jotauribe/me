import React from "react";
import styled from "styled-components";

const About = styled.div`
  text-align: left;
  color: gray;
  letter-spacing: 0.5px;
  font-family: "Open Sans Condensed";
  font-weight: 300;
  font-size: 24px;
  margin: 0;

  @media print {
    && {
      max-width: calc(100%-40px);
    }
  }
`;

export default function AboutBuilder() {
  return (
    <About className="about">
      Passionate Software developer. Experience in Backend and Frontend
      development. Node, React and Angular have been my most used tools.
      Sometimes i play with JVM languages though (The place i come from). I
      really enjoy challenges.
    </About>
  );
}
