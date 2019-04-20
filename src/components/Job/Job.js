import React from "react";
import styled from "styled-components";

import Card from "../Card";

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
          color: "var(--theme-color-accent-secondary)",
          display: "flex"
        }}
      >
        <img
          src={`/logos/${logo.url}`}
          alt="logo"
          style={{
            height: "24px",
            width: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.25)",
            flexShrink: 0,
            flexGrow: 0,

            marginRight: "5px"
          }}
        />{" "}
        @{company}
      </span>
      <Card.Body className="job__info">
        <Abstract>{abstract}</Abstract>
        <TechStack>
          {techStack &&
            techStack.map(t => (
              <img
                src={`/logos/${t}.svg`}
                alt="logo"
                style={{ height: "100%" }}
              />
            ))}
        </TechStack>
      </Card.Body>
    </Card>
  );
}
