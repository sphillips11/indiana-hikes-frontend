import React from "react";
import { Accordion } from "react-bootstrap";
import HikedTrail from "./HikedTrail";

const HikeInfo = (props) => {
  const hike = props.hikeData;
  const formattedDate = new Date(hike.date).toLocaleDateString();

  const HikedTrails = hike.trails.map((trail) => {
    return <HikedTrail key={trail.id} trailSummary={trail} />;
  });

  return (
    <Accordion>
      <Accordion.Item className="container" eventKey="{hike.id}">
        <Accordion.Header className="row">
          <div className="col-md-8 fw-bold">
            {formattedDate} - {hike.park_id.name}
          </div>
          <div className="col ms-auto">
            You hiked:&nbsp;
            {hike.distance} {hike.distance === "1.0" ? "mile" : "miles"}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="fw-bold">Trail(s):</div>
          <ul>{HikedTrails}</ul>
          <span className="fw-bold">Notes:</span> {hike.notes}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default HikeInfo;
