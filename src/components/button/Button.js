import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 32px;
  border-radius: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 16px;
  padding-left: 16px;
  font-weight: 700;
  line-height: 20px;
  border: 0;
  background-color: rgba(6, 214, 160, 1);
  display: flex;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: box-shadow 0.8s;

  &:hover {
    box-shadow: 0 4px 6px 0 rgba(60, 64, 67, 0.302),
      0 4px 8px 3px rgba(60, 64, 67, 0.149);
  }
`;

export default function ButtonComponent({ children, style }) {
  return <Button style={style}>{children}</Button>;
}
