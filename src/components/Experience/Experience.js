import React from "react";
import styled from "styled-components";

import data from "../../data";
import Section from "../Section";
import Job from "../Job";
import Timeline from "../Timeline";

const ExperienceBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export default function WorkExperience() {
  const jobs = data.experience;

  return (
    <Section className="experience">
      <Section.Title>EXPERIENCE</Section.Title>
      <ExperienceBody className="experience__body">
        <Timeline>
          {jobs &&
            jobs.map(job => (
              <Timeline.Point>
                <Job {...job} />
              </Timeline.Point>
            ))}
        </Timeline>
      </ExperienceBody>
    </Section>
  );
}
