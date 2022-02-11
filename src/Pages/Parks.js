import React from "react";
import ParksList from "../Components/ParksList";
import { useEffect, useState } from "react";
import axios from "axios";

const Parks = () => {
  const [parksData, setParksData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-backend.herokuapp.com")
      .then((response) => {
        console.log(response);
        setParksData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // alert("Oops! Something went wrong. Please try again later.");
        console.log(parksData);
      });
  }, []);

  return (
    <div className="bg-light">
      <h1 className="text-center">Indiana State Parks</h1>
      <section className="container">
        <ParksList parksData={parksData} />
      </section>
    </div>
  );
};

export default Parks;
