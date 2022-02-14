import React from "react";
import { Accordion } from "react-bootstrap";
import "./TrailInfo.css";

const TrailInfo = (props) => {
  const trail = props.trailData;

  return (
    <Accordion>
      <Accordion.Item className="my-3" eventKey="{trail.id}">
        <Accordion.Header className="align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 fw-bold">
                <p>{trail.name}</p>
              </div>
              <div className="col-md-4">
                <span className="badge rounded-pill bg-primary">
                  {trail.rating}{" "}
                </span>
                <span>
                  {" "}
                  &nbsp;&nbsp;
                  {trail.distance} {trail.distance === "1" ? "mile" : "miles"}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body>{trail.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TrailInfo;
