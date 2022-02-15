import React from "react";
import "./ParkSummary.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const ParkSummary = (props) => {
  const park = props.parkData;
  const visited = props.visited;

  return (
    <div className="card rounded px-2 m-3">
      <Link to={`parks/${park.slug}`}>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title text-center fw-bold">
            {park.name}{" "}
            {visited && (
              <FontAwesomeIcon icon={faCheckCircle} className="checkmark" />
            )}
          </h6>
          <h6 className="card-subtitle text-center mb-2">
            {park.city}, {park.state}
          </h6>
          <div className="card-header">Trail Ratings:</div>
          <ul className="list-group list-group-flush list-group-success">
            {park.accessible_trails && (
              <li className="list-group-item">Accessible</li>
            )}
            {park.easy_trails && <li className="list-group-item">Easy</li>}
            {park.moderate_trails && (
              <li className="list-group-item">Moderate</li>
            )}
            {park.difficult_trails && (
              <li className="list-group-item">Difficult</li>
            )}
            {park.more_difficult_trails && (
              <li className="list-group-item">More Difficult</li>
            )}
            {park.moderately_rugged ? (
              <li className="list-group-item">Moderately Rugged</li>
            ) : null}
            {park.rugged_trails && <li className="list-group-item">Rugged</li>}
            {park.very_rugged_trails && (
              <li className="list-group-item">Very Rugged</li>
            )}
          </ul>
          <div className="d-flex justify-content-between mt-auto fs-4">
            <div className="text-warning">{park.challenge && "\u2605"}</div>
            <div>{park.accessibility && "\u267F"} </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ParkSummary;
