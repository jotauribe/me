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
  color: var(--theme-color-accent-secondary);
`;

export default function Education({ style = {}, className = "" }) {
  const { education } = data;

  return (
    <Section style={style} className={`education ${className}`}>
      <Section.Title>EDUCATION</Section.Title>
      {education &&
        education.map(e => (
          <div style={{ padding: "4px" }}>
            <Career>{e.career.toUpperCase()}</Career>
            <School>@{e.institution}</School>
          </div>
        ))}
    </Section>
  );
}
