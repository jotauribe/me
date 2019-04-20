import React from "react";
import styled from "styled-components";

const IdentitySectionWrapper = styled.div`
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

const Title = styled.div`
  text-align: left;
  letter-spacing: 4px;
  color: gray;
`;

export default function Identity() {
  return (
    <IdentitySectionWrapper className="identity">
      <Name>
        JHONATAN <LastName> URIBE</LastName>{" "}
      </Name>
      <Title>SOFTWARE DEVELOPER</Title>
    </IdentitySectionWrapper>
  );
}
