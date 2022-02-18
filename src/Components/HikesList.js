import React from "react";
import HikeInfo from "./HikeInfo";

const HikesList = (props) => {
  const hikes = props.hikesList;

  hikes.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });

  const HikesList = hikes.map((hike) => {
    return <HikeInfo key={hike.id} hikeData={hike} />;
  });

  return (
    <>
      {hikes.length ? (
        <div className="container px-4 py-2">{HikesList}</div>
      ) : (
        <div className="">
          <h5 className="text-center text-green3">
            Looks like you haven't recorded any hikes yet
          </h5>
        </div>
      )}
    </>
  );
};

export default HikesList;
