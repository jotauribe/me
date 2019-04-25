import React from "react";
import styled from "styled-components";

const Skill = styled.div`
  width: 100%;
  height: 1.5em;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  background-color: ${props =>
    props.bgColor ? props.bgColor : "var(--theme-color-accent-50)"};
  border-radius: 3px;
`;

const SkillLevel = styled.div`
  width: ${props => props.level}%;
  height: 100%;
  font-weight: 700;
  background-color: var(--theme-color-accent);
  background-color: ${props =>
    props.color ? props.color : "var(--theme-color-accent-50)"};
  opacity: 1;
  color: white;
  padding: 0 24px;
  text-align: left;
`;

function SkillBar({ level, skill, color, bgColor }) {
  console.log({ color });
  return (
    <Skill className="skill-bar" color={color} bgColor={bgColor}>
      <SkillLevel level={level} color={color} bgColor={bgColor}>
        {skill}
      </SkillLevel>
    </Skill>
  );
}

export default SkillBar;
