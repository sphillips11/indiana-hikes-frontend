import React from "react";
import ParksList from "../Components/ParksList";

const Parks = (props) => {
  const parksData = props.parksData;

  return (
    <div className="bg-light">
      <h1>All the parks!</h1>
      <section className="container">
        <ParksList parksData={parksData} />
      </section>
    </div>
  );
};

export default Parks;
