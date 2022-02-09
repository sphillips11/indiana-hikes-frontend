import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import ParkInfo from "../Components/ParkInfo";
import TrailsList from "../Components/TrailsList";

const ParkDetails = () => {
  const { parkName } = useParams();

  const [currentPark, setCurrentPark] = useState({});
  const [currentTrails, setCurrentTrails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-backend.herokuapp.com/${parkName}`)
      .then((response) => {
        setCurrentPark(response.data);
        axios
          .get(`https://ih-backend.herokuapp.com/trails/${response.data.id}`)
          .then((response) => {
            console.log(response);
            setCurrentTrails(response.data);
          })
          .catch((error) => {
            console.log(error);
            // alert("Oops! Something went wrong. Please try again later.");
          });
      })
      .catch((error) => {
        console.log(error);
        // alert("Oops! Something went wrong. Please try again later.");
      });
  }, []);

  return (
    <div>
      <section className="container">
        <ParkInfo currentPark={currentPark} />
      </section>
      <Link></Link>
      <section className="container">
        <TrailsList currentTrails={currentTrails} />
      </section>
    </div>
  );
};

export default ParkDetails;