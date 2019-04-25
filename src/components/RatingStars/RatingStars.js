import React from "react";

import Icon from "../Icon";

function RatingStars({ stars = 5, starsHeight = 14, starsWidht = 14 }) {
  return (
    <div>
      {Array(stars)
        .fill(0)
        .map(() => (
          <Icon name="star" width={starsWidht} height={starsHeight} />
        ))}
    </div>
  );
}

export default RatingStars;
