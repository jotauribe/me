import React from "react";
import styled from "styled-components";

const TimelinePointComponent = styled.div`
  position: relative;

  &:nth-child(even) {
    padding-top: 188px;
  }

  &&::after {
    content: " ";
    height: 100%;
    width: 4px;
    background-color: var(--theme-color-accent);
    display: block;
    position: absolute;
    top: 0;
    ${props => (props.left ? "right: -4px;" : "")}
  }
`;

const TimelinePointInner = styled.div`
  position: relative;
  display: flex;
  ${props => (props.left ? "flex-direction: row-reverse;" : "")}
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;

  &&::before {
    content: " ";
    height: 16px;
    width: 16px;
    top: calc(50% - 8px);
    border-radius: 50%;
    border: 4px solid var(--theme-color-accent);
    background-color: var(--theme-color-content);
    display: block;
    position: absolute;
    z-index: 10;
    ${props => (props.left ? "right: -10px;" : "left: -6px;")}
  }
`;

const TimeLabel = styled.span`
  font-family: "Open Sans Condensed";
  font-weight: 700;
  font-size: 16px;
  bottom: 10%;
  right: 10%;
  color: var(--theme-color-accent);
  padding-right: 20px;
  padding-left: 20px;
  flex-shrink: 0;
  position: absolute;
`;

function TimelinePoint({ children, className = "", time, ...props }) {
  return (
    <TimelinePointComponent
      className={"timeline__point " + className}
      {...props}
    >
      <TimelinePointInner className="timeline__point__inner" {...props}>
        {time && <TimeLabel>{time}</TimeLabel>}
        {children}
      </TimelinePointInner>
    </TimelinePointComponent>
  );
}

TimelinePoint.displayName = "TimelinePoint";
TimelinePoint.Inner = TimelinePointInner;

export default TimelinePoint;
