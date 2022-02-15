import React from "react";
import ParkSummary from "./ParkSummary";

const ParksList = (props) => {
  const parks = props.parksData;
  const parksVisited = props.parksVisited;

  parks.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const ParksList = parks.map((park) => {
    return (
      <ParkSummary
        key={park.id}
        parkData={park}
        visited={parksVisited.has(park.id)}
      />
    );
  });

  return (
    <div className="row justify-content-center h-100 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
      {ParksList}
    </div>
  );
};

export default ParksList;
