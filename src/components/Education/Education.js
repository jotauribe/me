import React from "react";
import styled from "styled-components";

import data from "../../data";
import Section from "../Section";

const Career = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: "Open Sans Condensed";
  color: gray;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1em;
  font-family: "Open Sans Condensed";
  color: gray;
`;

export default function Education({ style }) {
  const { education } = data;

  return (
    <Section style={style}>
      <Section.Title>EDUCATION</Section.Title>
      {education &&
        education.map(e => (
          <div>
            <Career>{e.career.toUpperCase()}</Career>
            <School>{e.institution}</School>
          </div>
        ))}
    </Section>
  );
}
