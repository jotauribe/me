import React from "react";
import styled from "styled-components";

import data from "../../data";
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
  const { networks } = data;

  return (
    <Networks className="networks">
      {networks &&
        networks.map(n => <NetworkLink name={n.name} fill={n.color} />)}
    </Networks>
  );
}
