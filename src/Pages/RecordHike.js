import axios from "axios";
import { React, useEffect } from "react";
import NewHikeForm from "../Components/NewHikeForm";

const RecordHike = (props) => {
  const currentHiker = props.currentHiker;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const recordHike = (newHike) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/hikers/${currentHiker.userId}/hikes`,
        newHike
      )
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Oh no! We're having trouble recording your hike right now.");
      });
  };

  return <NewHikeForm recordHike={recordHike} currentHiker={currentHiker} />;
};

export default RecordHike;
