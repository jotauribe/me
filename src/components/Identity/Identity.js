import React from "react";
import styled from "styled-components";

const IdentityComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: 900;
  text-align: left;
  margin: 0;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
`;

const LastName = styled.div`
  color: gray;
  margin-left: 8px;
`;

const Profession = styled.div`
  text-align: left;
  letter-spacing: 4px;
  padding: 0 4px;
  color: gray;
`;

export default function Identity({ firstname, lastname, profession }) {
  return (
    <IdentityComponent className="identity">
      <Name className="identity__name">
        JHONATAN <LastName> URIBE</LastName>{" "}
      </Name>
      <Profession className="identity__profession">
        SOFTWARE DEVELOPER
      </Profession>
    </IdentityComponent>
  );
}
