import { React, useEffect, useState } from "react";
import axios from "axios";
import ParksList from "../Components/ParksList";

const Parks = () => {
  const [parksData, setParksData] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
    <div>
      <h1 className="text-center">Indiana State Parks</h1>
      <section className="container">
        <ParksList parksData={parksData} />
      </section>
    </div>
  );
};

export default Parks;
