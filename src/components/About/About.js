import React from "react";
import styled from "styled-components";

import data from "../../data";

const AboutComponent = styled.div`
  text-align: left;
  letter-spacing: 0.5px;
  font-family: "Open Sans Condensed";
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 24px;
  margin: 0;

  @media print {
    && {
      max-width: calc(100%-40px);
    }
  }
`;

export default function About() {
  const { about } = data;
  return <AboutComponent className="about">{about}</AboutComponent>;
}
