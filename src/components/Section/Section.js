import React from "react";
import styled from "styled-components";

const SectionComponent = styled.div`
  background-color: var(--theme-color-raised-content);
  border: 20px solid white;
  border-top-width: 16px;
  border-bottom-width: 16px;
`;

const SectionTitle = styled.div.attrs({ className: "section__title" })`
  font-family: "Open Sans Condensed";
  font-size: 24px;
  font-weight: 900;
  line-height: 1em;
  width: 100%;
  margin-bottom: 24px;
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
