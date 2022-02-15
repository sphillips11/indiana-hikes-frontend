import React from "react";
import TrailInfo from "./TrailInfo";

const TrailsList = (props) => {
  const trails = props.currentTrails;
  const trailsVisited = props.trailsVisited;

  const TrailsList = trails.map((trail) => {
    return (
      <TrailInfo
        key={trail.id}
        trailData={trail}
        visited={trailsVisited.has(trail.id)}
      />
    );
  });

  return <div className="container px-4 py-2">{TrailsList}</div>;
};

export default TrailsList;
