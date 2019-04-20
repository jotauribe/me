import React from "react";
import styled from "styled-components";

const TechStackComponent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 24px;

  & > * {
    margin-left: 16px;
  }
`;

function TechStack({ techStack }) {
  return (
    <TechStackComponent>
      {techStack &&
        techStack.map(t => (
          <img src={`/logos/${t}.svg`} alt="logo" style={{ height: "100%" }} />
        ))}
    </TechStackComponent>
  );
}

export default TechStack;
