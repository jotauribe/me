import React from "react";

import Path from "./Path";

export default function Icon({
  name = "",
  style = {},
  fill = "#6c757d",
  width = "32px",
  height = "32px",
  className = "",
  viewBox = "0 0 24 24"
}) {
  return (
    <svg
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <Path name={name} fill={fill} />
    </svg>
  );
}
