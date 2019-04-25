import React from "react";
import styled from "styled-components";

import Identity from "../Identity";
import About from "../About";
import Photo from "../Photo";
import Button from "../Button";
import Networks from "../Networks";
import Icon from "../Icon";
import Section from "../Section";
import Contact from "../Contact";

const HeaderContent = styled.div`
  flex-basis: 60%;
  flex-grow: 0;
  z-index: 10;
  padding: 0 16px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
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
    <Section
      className="header"
      style={{ display: "flex", position: "relative" }}
    >
      <HeaderContent className="header__content">
        <Identity className="identity" />
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
