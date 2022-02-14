import React, { useEffect } from "react";
import Userfront from "@userfront/react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Welcome = () => {
  const currentHiker = Userfront.user;
  const newHiker = {
    id: currentHiker.userId,
    name: currentHiker.name,
    email: currentHiker.email,
  };

  useEffect(() => {
    axios
      .post("https://ih-backend.herokuapp.com/hikers/", newHiker)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Uh oh! We're having trouble setting up your profile right now.");
      });
  });

  return (
    <div className="text-center">
      <br />
      <br />
      <h1>Welcome, {currentHiker.name}!</h1>
      <h4>We're glad you're here.</h4>
      <br />
      <Button href="/" variant="warning">
        Explore!
      </Button>
    </div>
  );
};

export default Welcome;