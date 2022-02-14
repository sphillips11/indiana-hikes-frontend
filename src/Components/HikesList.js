import React from "react";
import HikeInfo from "./HikeInfo";

const HikesList = (props) => {
  const hikes = props.hikesList;
  console.log(hikes);

  const HikesList = hikes.map((hike) => {
    return <HikeInfo key={hike.id} hikeData={hike} />;
  });

  return <div className="container px-4 py-2">{HikesList}</div>;
};

export default HikesList;
