import React from "react";
import styled from "styled-components";

import data from "../../data";
import Section from "../Section";
import Job from "../Job";

const ExperienceBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default function WorkExperience() {
  const jobs = data.experience;

  return (
    <Section className="experience" style={{ width: "50%" }}>
      <Section.Title>EXPERIENCE</Section.Title>
      <ExperienceBody className="experience__body">
        {jobs && jobs.map(job => <Job {...job} />)}
      </ExperienceBody>
    </Section>
  );
}
