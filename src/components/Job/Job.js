import React from "react";
import styled from "styled-components";

import Card from "../Card";
import TechStack from "../TechStack";

const JobTitle = styled.div`
  flex-shrink: 0;
  font-weight: 800;
  max-width: 100%;
`;

const Period = styled.div`
  color: var(--theme-color-secondary);
  font-size: 10px;
  font-family: "Open Sans";
  flex-shrink: 0;
  width: 100%;
`;

const Abstract = styled.p`
  font-family: "Open Sans";
  font-size: 14px;
  margin: 0;
`;

//TODO: extract span as component

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
        <Period>{period}</Period>
        <JobTitle>{position.toUpperCase()}</JobTitle>
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
        />
        @{company}
      </span>
      <Card.Body className="job__info">
        <Abstract>{abstract}</Abstract>
        <TechStack techStack={techStack} />
      </Card.Body>
    </Card>
  );
}
