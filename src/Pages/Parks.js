import { React, useEffect, useState } from "react";
import axios from "axios";
import ParksList from "../Components/ParksList";
import "../index.css";

const Parks = (props) => {
  const [parksData, setParksData] = useState([]);
  const [parksVisited, setParksVisited] = useState(new Set());
  const currentHiker = props.currentHiker;
  const loggedIn = props.loggedIn;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => {
        setParksData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/hikers/${currentHiker.userId}/hikes`
        )
        .then((response) => {
          const parksVisitedSet = new Set();
          response.data.forEach((hike) => {
            parksVisitedSet.add(hike.park_id.id);
          });
          setParksVisited(parksVisitedSet);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentHiker, loggedIn]);

  return (
    <div className="bg-green1 mb-5">
      <h1 className="text-center pt-5 pb-4 text-green2">
        Explore Indiana Trails
      </h1>
      <h3 className="text-center text-green3">Indiana State Parks</h3>
      <section className="container">
        <ParksList parksData={parksData} parksVisited={parksVisited} />
      </section>
    </div>
  );
};

export default Parks;
