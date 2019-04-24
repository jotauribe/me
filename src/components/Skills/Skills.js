import React from "react";
import styled from "styled-components";

import data from "../../data";
import Section from "../Section";
import SkillGroup from "./SkillGroup";

const SkillsSection = styled(Section)`
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

function Skills({ style }) {
  const { skillSets } = data;

  return (
    <SkillsSection style={style}>
      <Section.Title>SKILLS</Section.Title>
      {skillSets &&
        skillSets.map(skillSet => (
          <SkillGroup
            name={skillSet.skillCategory}
            skills={skillSet.skills}
            color={skillSet.color}
            bgColor={skillSet.bgColor}
          />
        ))}
    </SkillsSection>
  );
}

export default Skills;
