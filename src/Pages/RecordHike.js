import axios from "axios";
import { React, useEffect, useState } from "react";
import NewHikeForm from "../Components/NewHikeForm";
import "../index.css";

const RecordHike = (props) => {
  const currentHiker = props.currentHiker;
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
  const [date, setDate] = useState(new Date());
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/names`)
      .then((response) => {
        setParks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  }, []);

  useEffect(() => {
    if (selectedPark) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/trails/${selectedPark.id}`)
        .then((response) => {
          setTrails(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Uh oh! We're having trouble loading the trails. Please try again later."
          );
        });
    }
  }, [selectedPark]);

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

  return (
    <div className="bg-green1 h-100 pb-5">
      <div className="container d-flex justify-content-center pt-4">
        <NewHikeForm
          currentHiker={currentHiker}
          parks={parks}
          selectedPark={selectedPark}
          setSelectedPark={setSelectedPark}
          date={date}
          setDate={setDate}
          trails={trails}
          setTrails={setTrails}
          recordHike={recordHike}
        />
      </div>
    </div>
  );
};

export default RecordHike;
