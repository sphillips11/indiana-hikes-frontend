import React from "react";

const HikedTrail = (props) => {
  const trail = props.trailSummary;
  return (
    <li>
      {trail.name} {trail.rating}
    </li>
  );
};

export default HikedTrail;
