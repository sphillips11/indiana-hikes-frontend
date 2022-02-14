import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faRoute } from "@fortawesome/free-solid-svg-icons";

const ParkInfo = (props) => {
  const park = props.currentPark;
  const encodedAddress = encodeURIComponent(
    `${park.street_address}, ${park.city}, ${park.state}`
  );
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=" + encodedAddress;

  return (
    <div>
      <section className="container.fluid bg-success p-5">
        <h1 className="text-center">
          {/* if visited, then checkmark */}
          {park.name} &nbsp;&nbsp;&nbsp; {park.accessibility && "\u267F"}
        </h1>
        <br />
        <p>
          {park.street_address}
          <br />
          {park.city}, {park.state} {park.zip}
        </p>
        <p>
          <em>{park.note}</em>
        </p>
        <p>
          <a href={`tel:${park.phone}`}>{park.phone}</a>
        </p>
        <p>
          <a href={park.website} target="_blank" rel="noopener noreferrer">
            Park Website
          </a>
        </p>
        <p>
          <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faRoute} /> Directions (in GoogleMaps)
          </a>
        </p>
        <p>
          <Link to={"map"} target="_blank">
            <FontAwesomeIcon icon={faMap} /> Trail Map
          </Link>
        </p>
        <p>{park.challenge && `\u2605 ${park.challenge_name}`}</p>
      </section>
      <section className="container.fluid bg-info p-5">
        <h5>Description</h5>
        <p>{park.description}</p>
      </section>
      {park.challenge && (
        <section className="container.fluid bg-warning p-5">
          <h5>{park.challenge_name}</h5>
          <p>{park.challenge_description}</p>
        </section>
      )}
    </div>
  );
};

export default ParkInfo;
