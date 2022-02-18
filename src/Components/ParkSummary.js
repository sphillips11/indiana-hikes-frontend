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
    <div className="card rounded m-4 bg-green1 shadow border-5 border-green2">
      <Link to={`parks/${park.slug}`} className="text-decoration-none m-0">
        <div className="card-body d-flex flex-column m-0 pt-4">
          <h6 className="card-title fw-bold text-green3 text-center">
            {park.name}
          </h6>
          <h6 className="card-subtitle mb-2 text-green3 text-center">
            {park.city}, {park.state}{" "}
            <span>
              {visited && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="checkmark fs-5 text-green2 float-none"
                />
              )}
            </span>
          </h6>
          <div>
            <h6 className="pt-3 pb-0 px-2 text-green2">Trail Ratings:</h6>
            <ul className="list-group list-group-flush px-2">
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
              {park.rugged_trails && (
                <li className="list-group-item">Rugged</li>
              )}
              {park.very_rugged_trails && (
                <li className="list-group-item">Very Rugged</li>
              )}
            </ul>
          </div>
        </div>
        <div className="fs-4 pt-3">
          <span className="text-warning position-absolute bottom-0 start-10">
            {park.challenge && "\u2605"}
          </span>
          <span className="position-absolute bottom-0 end-0 pe-3">
            {park.accessibility && "\u267F"}{" "}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ParkSummary;
