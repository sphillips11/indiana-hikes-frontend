import { useParams } from "react-router";
import { React, useEffect, useState } from "react";
import axios from "axios";
import HikerInfo from "../Components/HikerInfo";

const HikerDetails = () => {
  const { hikerId } = useParams();
  const [currentHiker, setCurrentHiker] = useState({});

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-backend.herokuapp.com/hikers/${hikerId}`)
      .then((response) => {
        setCurrentHiker(response.data);
        // console.log(currentHiker);
      })
      .catch((error) => {
        console.log(error);
        // alert("Oops! Something went wrong. Please try again later.");
      });
  }, []);

  return (
    <div>
      <HikerInfo currentHiker={currentHiker} />
    </div>
  );
};

export default HikerDetails;
