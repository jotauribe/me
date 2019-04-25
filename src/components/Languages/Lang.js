import React from "react";
import styled from "styled-components";

import RatingStars from "../RatingStars";
import { SkillGroup } from "../Skills";

const LangSkill = styled.div`
  display: flex;
`;

const LangSkillInfo = styled.div`
  width: auto;
  text-align: center;
  margin-right: 16px;
`;

const LangName = styled.div`
  height: 70px;
  width: 70px;
  line-height: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  padding-top: 19px;
  padding-bottom: 19px;
  background-color: var(--theme-color-accent-50);
  color: white;
  font-family: "Open Sans";
  font-weight: 900;
`;

const LangSkillDetails = styled.div`
  width: auto;
  text-align: center;
`;

function Languages({ name, level, isNative, details }) {
  return (
    <LangSkill>
      <LangSkillInfo>
        <LangName>{name}</LangName>
        <RatingStars stars={level} />
        {isNative && <span style={{ fontSize: "12px" }}>Native</span>}
      </LangSkillInfo>
      <LangSkillDetails>
        <SkillGroup {...details} />
      </LangSkillDetails>
    </LangSkill>
  );
}

export default Languages;
