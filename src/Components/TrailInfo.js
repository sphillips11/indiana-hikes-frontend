import React from "react";

const TrailInfo = (props) => {
  const trail = props.trailData;

  return (
    <div>
      <p>{trail.name}</p>
      <p>{trail.distance}</p>
      <p>{trail.rating}</p>
      <p>{trail.description}</p>
    </div>
  );
};

export default TrailInfo;
