import React from "react";
import styled from "styled-components";

const ProfilePhoto = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(246, 247, 251, 1) 10%,
      transparent 50%
    ),
  url("${props => props.imgUrl}");
  background-blend-mode: hard-light;
  background-position: 80%;
  background-repeat: no-repeat;
  height: 500px;
  filter: brightness(2);
  opacity: 0.5;
`;

export default function Photo({ imgUrl }) {
  return <ProfilePhoto className="photo" imgUrl={imgUrl} />;
}
