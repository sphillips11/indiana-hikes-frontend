import React from "react";
import { Accordion } from "react-bootstrap";

const TrailInfo = (props) => {
  const trail = props.trailData;
  console.log(`trail-${trail.id}`);
  console.log(`description-${trail.id}`);
  return (
    <Accordion>
      <Accordion.Item className="container" eventKey="{trail.id}">
        <Accordion.Header className="row">
          <div className="col-8 fw-bold">{trail.name}</div>
          <div className="col">
            <span className="badge rounded-pill bg-primary">
              {trail.rating}
            </span>
            <span className="ms-auto">
              &nbsp;&nbsp;
              {trail.distance} {trail.distance === "1" ? "mile" : "miles"}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>{trail.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TrailInfo;
