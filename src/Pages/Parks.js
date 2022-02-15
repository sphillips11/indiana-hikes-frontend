import { React, useEffect, useState } from "react";
import axios from "axios";
import ParksList from "../Components/ParksList";

const Parks = (props) => {
  const [parksData, setParksData] = useState([]);
  const [parksVisited, setParksVisited] = useState(new Set());
  const currentHiker = props.currentHiker;
  const loggedIn = props.loggedIn;
  console.log(currentHiker);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => {
        // console.log(response);
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
          console.log("Parks Visited: ", response.data);
          const parksVisitedSet = new Set();
          response.data.forEach((hike) => {
            console.log("hike: ", hike.park_id.id);
            parksVisitedSet.add(hike.park_id.id);
          });
          setParksVisited(parksVisitedSet);
          console.log("parksVisitedSet: ", parksVisitedSet);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentHiker, loggedIn]);

  return (
    <div>
      <h1 className="text-center">Indiana State Parks</h1>
      <section className="container">
        <ParksList parksData={parksData} parksVisited={parksVisited} />
      </section>
    </div>
  );
};

export default Parks;
