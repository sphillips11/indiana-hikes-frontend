import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faRoute,
  faCheckCircle,
  faPhone,
  faEarthAfrica,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const ParkInfo = (props) => {
  const park = props.currentPark;
  const visited = props.visited;
  const encodedAddress = encodeURIComponent(
    `${park.street_address}, ${park.city}, ${park.state}`
  );
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=" + encodedAddress;

  return (
    <div className="bg-green1">
      <h1 className="text-center pt-5 pb-2">
        {visited && (
          <FontAwesomeIcon icon={faCheckCircle} className="text-green2" />
        )}{" "}
        &nbsp;&nbsp;&nbsp;
        <span className="text-green3">{park.name}</span> &nbsp;&nbsp;&nbsp;{" "}
        {park.accessibility && "\u267F"}
      </h1>
      <br />
      <section className="container mx-5 mb-5">
        <div className="row justify-content-evenly">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <p className="text-green2">
              {park.street_address}
              <br />
              {park.city}, {park.state} {park.zip}
            </p>
            <p>
              <em>{park.note}</em>
            </p>
            <p>
              <a
                href={`tel:${park.phone}`}
                className="text-decoration-none text-green2"
              >
                <FontAwesomeIcon icon={faPhone} /> {park.phone}
              </a>
            </p>

            <p>
              <a
                href={park.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-green2"
              >
                <FontAwesomeIcon icon={faEarthAfrica} /> &nbsp;Park Website
              </a>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <p>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-green2"
              >
                <FontAwesomeIcon icon={faRoute} /> &nbsp;Directions (GoogleMaps)
              </a>
            </p>
            <p>
              <Link
                to={"map"}
                target="_blank"
                className="text-decoration-none text-green2"
              >
                <FontAwesomeIcon icon={faMap} /> &nbsp;Trail Map
              </Link>
            </p>

            {park.challenge && (
              <p>
                <span className="text-warning fs-5">{`\u2605`} </span>
                <span className="text-green2">{park.challenge_name}</span>
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="container.fluid bg-green2 text-green1 p-5">
        <h5 className="mx-4">Description</h5>
        <p className="mx-4">{park.description}</p>
        {park.challenge && (
          <section className="container.fluid rounded bg-warning text-green3 p-5 m-5 ">
            <h5>
              <span>{`\u2605 `}</span>
              {park.challenge_name}
            </h5>
            <p>{park.challenge_description}</p>
          </section>
        )}
      </section>
    </div>
  );
};

export default ParkInfo;
