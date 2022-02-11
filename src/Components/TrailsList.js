import React from "react";
import TrailInfo from "./TrailInfo";

const TrailsList = (props) => {
  const trails = props.currentTrails;

  const TrailsList = trails.map((trail) => {
    return (
      <div className="container px-4 py-2">
        <TrailInfo key={trail.id} trailData={trail} />
      </div>
    );
  });

  return <div>{TrailsList}</div>;
};

export default TrailsList;
