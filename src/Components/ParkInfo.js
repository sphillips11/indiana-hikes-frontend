import React from "react";

const ParkInfo = (props) => {
  const park = props.currentPark;

  return (
    <div>
      <h1>Park Details for {park.name}</h1>
      <p>{park.address}</p>
      <p>{park.phone}</p>
      {/* add rest of info */}
    </div>
  );
};

export default ParkInfo;
