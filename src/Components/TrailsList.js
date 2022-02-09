import React from "react";
import TrailInfo from "./TrailInfo";

const TrailsList = (props) => {
  const trails = props.currentTrails;

  const TrailsList = trails.map((trail) => {
    return <TrailInfo key={trail.id} trailData={trail} />;
  });

  return <div>{TrailsList}</div>;
};

export default TrailsList;
