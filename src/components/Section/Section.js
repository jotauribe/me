import React from "react";
import styled from "styled-components";

const SectionComponent = styled.div`
  background-color: var(--theme-color-raised-content);
  border: 40px solid white;
`;

const SectionTitle = styled.div.attrs({ className: "section__title" })`
  font-size: 24px;
  font-weight: 900;
  color: gray;
  width: 100%;
  margin-bottom: 32px;
  text-align: center;
`;

function Section({ children, className, style }) {
  return (
    <SectionComponent className={`section ${className}`} style={style}>
      {children}
    </SectionComponent>
  );
}

Section.Title = SectionTitle;

export default Section;
