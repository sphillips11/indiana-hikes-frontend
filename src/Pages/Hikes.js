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
    <div className="bg-green1 vh-100">
      <h1 className="text-center py-5 text-green3">Your Hikes</h1>
      <HikesList hikesList={hikesList} />
    </div>
  );
};

export default Hikes;
