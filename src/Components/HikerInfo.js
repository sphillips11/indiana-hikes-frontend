import React from "react";
import { Button } from "react-bootstrap";
import "../index.css";

const HikerInfo = (props) => {
  const hiker = props.currentHiker;
  const formattedDate = new Date(hiker.createdAt).toLocaleDateString();

  return (
    <div>
      <h1 className="text-center text-green3 py-5">
        You've been hiking with us since {formattedDate}!
      </h1>
      <div className="container bg-green1 text-green3 border border-3 rounded p-4 m-5 w-25 mx-auto shadow">
        <p>Name: {hiker.name}</p>
        <p>Email: {hiker.email}</p>
        <div className="text-center">
          <Button href="/reset" className="bg-green2 border-0 text-green1">
            Reset your password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HikerInfo;
