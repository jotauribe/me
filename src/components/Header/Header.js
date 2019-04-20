import React from "react";
import styled from "styled-components";

import Identity from "../Identity";
import About from "../about";
import Photo from "../Photo";
import Button from "../button";
import Networks from "../Networks";
import Icon from "../Icon";
import Section from "../Section";

const HeaderContent = styled.div`
  flex-basis: 60%;
  flex-grow: 0;
  z-index: 10;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const HeaderBackground = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  overflow: hidden;
`;

const HeaderActions = styled.div`
  padding: 8px;
  text-align: left;
  display: flex;
`;

export default function Header() {
  return (
    <Section className="header">
      <HeaderContent className="header__content">
        <Identity className="hola bebe" />
        <About />
        <HeaderActions className="header__actions">
          <Networks />
          <Button style={{ paddingRight: "8px" }}>
            Download CV
            <Icon
              name="download"
              height="20px"
              width="20px"
              fill="#ffffff"
              style={{ marginLeft: "8px" }}
            />
          </Button>
        </HeaderActions>
      </HeaderContent>
      <HeaderBackground className="header__photo">
        <Photo imgUrl="/profile-photo.png" />
      </HeaderBackground>
    </Section>
  );
}
