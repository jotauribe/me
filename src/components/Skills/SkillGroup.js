import React from "react";
import styled from "styled-components";

import SkillBar from "./SkillBar";

const SkillsContainer = styled.div`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  color: gray;

  & > * {
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const SkillGroupName = styled.div`
  flex-basis: 100%;
  font-family: "Open Sans Condensed";
  font-size: 20px;
  font-weight: 700;
`;

function SkillGroup({ name, skills, color, bgColor }) {
  return (
    <SkillsContainer>
      <SkillGroupName>{name.toUpperCase()}</SkillGroupName>
      {skills &&
        skills.map(s => (
          <SkillBar
            level={s.level}
            skill={s.name}
            color={color}
            bgColor={bgColor}
          />
        ))}
    </SkillsContainer>
  );
}

export default SkillGroup;
