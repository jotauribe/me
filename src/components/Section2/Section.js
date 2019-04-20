import React from "react";
import styled from "styled-components";

const SectionComponent = styled.div`
  display: flex;
  width: auto;
  background-color: var(--theme-color-raised-content);
  border: 40px solid white;
  position: relative;
  flex-wrap: wrap;
`;

const SectionTitle = styled.div.attrs({ className: "section__title" })`
  font-size: 28px;
  font-weight: 900;
  color: gray;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 16px;
  text-align: center;
`;

function Section({ children, className }) {
  return (
    <SectionComponent className={`section ${className}`}>
      {children}
    </SectionComponent>
  );
}

Section.Title = SectionTitle;

export default Section;
