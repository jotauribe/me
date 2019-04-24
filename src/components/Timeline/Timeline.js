import React from "react";
import styled from "styled-components";

import TimelinePoint from "./TimelinePoint";

const TimelineComponent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex-basis: 50%;
  }
`;

const isEven = n => n % 2 === 0;

function Timeline({ children }) {
  return (
    <TimelineComponent className="timeline">
      {React.Children.map(children, (child, i) => {
        if (child.type.displayName !== TimelinePoint.displayName)
          return <TimelinePoint left={isEven(i)}>{child}</TimelinePoint>;
        else return React.cloneElement(child, { left: !isEven(i) });
      })}
    </TimelineComponent>
  );
}

Timeline.Point = TimelinePoint;

export default Timeline;
