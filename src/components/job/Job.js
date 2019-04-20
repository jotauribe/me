import React from "react";
import styled from "styled-components";

import Card from "../card";

const JobTitle = styled.div`
  flex-shrink: 0;
  font-weight: 800;
`;

const Period = styled.div`
  color: gray;
  font-size: 12px;
  font-family: "Open Sans";
  flex-shrink: 0;
`;

const Abstract = styled.p`
  color: gray;
  font-family: "Open Sans Condensed";
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 24px;
  filter: grayscale(0);

  & > * {
    margin-left: 16px;
  }
`;

export default function Job({
  company,
  abstract,
  period,
  logo,
  position,
  techStack
}) {
  return (
    <Card className="job">
      <Card.Header className="job__header">
        <JobTitle>{position.toUpperCase()}</JobTitle>
        <Period>{period}</Period>
      </Card.Header>
      <span
        style={{
          marginBottom: "8px",
          marginTop: "-8px",
          color: "var(--theme-color-accent-secondary)"
        }}
      >
        @{company}
      </span>
      <Card.Body className="job__info">
        <Abstract>{abstract}</Abstract>
        <TechStack>
          {techStack &&
            techStack.map(t => (
              <img
                src={`/icons/${t}.svg`}
                alt="logo"
                style={{ height: "100%" }}
              />
            ))}
        </TechStack>
      </Card.Body>
    </Card>
  );
}
