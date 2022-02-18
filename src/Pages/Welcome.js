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
      .post(`${process.env.REACT_APP_BACKEND_URL}/hikers/`, newHiker)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Uh oh! We're having trouble setting up your profile right now.");
      });
  });

  return (
    <div className="text-center pt-5 bg-green1 text-green3 vh-100">
      <h1 className="text-center pt-5">Welcome, {currentHiker.name}!</h1>
      <h4>We're glad you're here.</h4>
      <Button href="/" variant="warning" className="mt-5 text-green3">
        Explore!
      </Button>
    </div>
  );
};

export default Welcome;
