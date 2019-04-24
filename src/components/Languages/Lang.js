import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

const Lang = styled.div`
  width: auto;
  text-align: center;
`;

const LangFlag = styled.div`
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

function Skills({ name, level, isNative }) {
  return (
    <Lang>
      <LangFlag>{name}</LangFlag>
      <div>
        {Array(level)
          .fill("")
          .map(() => (
            <Icon name="star" width="14" height="14" />
          ))}
      </div>
      {isNative && <span style={{ fontSize: "12px" }}>Native</span>}
    </Lang>
  );
}

export default Skills;
