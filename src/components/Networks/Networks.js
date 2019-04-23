import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

const Networks = styled.div`
  display: flex;

  & > * {
    flex-grow: 0;
    margin-right: 16px;
  }
`;

const NetworkLink = styled(Icon).attrs({ className: "network-link" })`
  opacity: 0.8;
  transition-property: all;
  transition-duration: 200ms;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export default function NetworksComponent({ header, body, footer }) {
  return (
    <Networks className="networks">
      <NetworkLink name="linkedin" fill="#357AB6" />
      <NetworkLink name="github" fill="#171515" />
      <NetworkLink name="twitter" fill="#5DA9DD" />
    </Networks>
  );
}
