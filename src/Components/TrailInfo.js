import React from "react";
import { Accordion } from "react-bootstrap";

const TrailInfo = (props) => {
  const trail = props.trailData;
  console.log(`trail-${trail.id}`);
  console.log(`description-${trail.id}`);
  return (
    <Accordion>
      <Accordion.Item className="container" eventKey="{trail.id}">
        <Accordion.Header className="row align-items-center">
          <div className="col-md-8 fw-bold">
            <p>{trail.name}</p>
          </div>
          <div className="col-2">
            <p className="badge rounded-pill bg-primary">{trail.rating}</p>
          </div>
          <div className="col-2 ms-auto">
            <p>
              &nbsp;&nbsp;
              {trail.distance} {trail.distance === "1" ? "mile" : "miles"}
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body>{trail.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TrailInfo;
