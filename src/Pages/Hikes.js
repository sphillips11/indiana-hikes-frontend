import { React, useEffect, useState } from "react";
import axios from "axios";
import HikesList from "../Components/HikesList";

const Hikes = (props) => {
  const currentHiker = props.currentHiker;
  const [hikesList, setHikesList] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/hikers/${currentHiker.userId}/hikes`
      )
      .then((response) => {
        setHikesList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  }, [currentHiker]);

  return (
    <div className="bg-light">
      <br />
      <br />
      <h1 className="text-center">Your Hikes</h1>
      <br />
      <br />
      <section className="container.fluid bg-primary py-4">
        <HikesList hikesList={hikesList} />
      </section>
    </div>
  );
};

export default Hikes;
