import React from "react";
import styled from "styled-components";

const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CardHeader = styled.div.attrs({ className: "card__header" })`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CardBody = styled.div.attrs({ className: "card__body" })`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

function Card({ children, className }) {
  return (
    <CardComponent className={`card ${className}`}>{children}</CardComponent>
  );
}

Card.displayName = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
