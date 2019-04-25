import React from "react";
import styled from "styled-components";

import data from "../../data";
import Icon from "../Icon";
import Section from "../Section";

const ContactComponent = styled.div`
  font-family: "Open Sans Condensed";
  font-weight: 300;
  font-size: 16px;
`;

const Field = styled.span`
  display: block;
  color: gray;
  font-family: "Open Sans Condensed";
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 4px;
`;

const InlineField = styled(Field)`
  display: inline-block;
`;

export default function Contact({ style = {}, className = "" }) {
  const { location, phone, email, ...props } = data.contact;

  return (
    <Section style={style} className={`contact-info ${className}`}>
      <Section.Title>CONTACT</Section.Title>
      <ContactComponent className="contact" {...props}>
        {location && (
          <Field>
            <Icon name="location" height="24" style={{ marginRight: "12px" }} />
            {location.toUpperCase()}
          </Field>
        )}
        {phone && (
          <InlineField style={{ marginRight: "12px" }}>
            <Icon
              name="telephone"
              height="24"
              style={{ marginRight: "12px" }}
            />
            {phone}
          </InlineField>
        )}
        {email && (
          <InlineField>
            <Icon name="email" height="24" style={{ marginRight: "12px" }} />
            {email.toUpperCase()}
          </InlineField>
        )}
      </ContactComponent>
    </Section>
  );
}
