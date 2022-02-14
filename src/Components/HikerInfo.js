import React from "react";
import { Link } from "react-router-dom";

const HikerInfo = (props) => {
  const hiker = props.currentHiker;
  const formattedDate = new Date(hiker.registered).toLocaleDateString();

  return (
    <div>
      <br />
      <br />
      <h1 className="text-center">
        You've been hiking with us since {formattedDate}!
      </h1>
      <br />
      <br />
      <div className="container bg-light">
        <p>Name: {hiker.name}</p>
        <p>Username: {hiker.username}</p>
        <p>Email: {hiker.email}</p>
      </div>
      <p>
        <Link to={"hikes"}>See your hikes</Link>
      </p>
    </div>
  );
};

export default HikerInfo;
