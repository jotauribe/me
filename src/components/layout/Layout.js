import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: stretch;
`;

const Slot = styled.div`
  width: 100%;
`;

export default function Layout({ header, body, footer }) {
  return (
    <LayoutWrapper>
      <Slot>{header}</Slot>
      <Slot>{body}</Slot>
      <Slot>{footer}</Slot>
    </LayoutWrapper>
  );
}
