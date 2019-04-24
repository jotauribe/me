import React from "react";
import styled from "styled-components";

import data from "../../data";
import Section from "../Section";
import Lang from "./Lang";

const LangsSection = styled(Section)`
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const LangList = styled.div`
  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;

function Skills({ style }) {
  const { languages } = data;

  return (
    <LangsSection style={style}>
      <Section.Title>LANGUAGES</Section.Title>
      <LangList style={{ display: "flex" }}>
        {languages &&
          languages.map(l => (
            <Lang name={l.lang} level={l.level} isNative={l.native} />
          ))}
      </LangList>
    </LangsSection>
  );
}

export default Skills;
