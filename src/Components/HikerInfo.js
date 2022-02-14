import React from "react";
import { Button } from "react-bootstrap";

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
        <Button href="/reset" variant="danger">
          Reset your password
        </Button>
      </div>
    </div>
  );
};

export default HikerInfo;
