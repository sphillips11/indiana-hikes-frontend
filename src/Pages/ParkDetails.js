import { useParams } from "react-router";
import { React, useEffect, useState } from "react";
import axios from "axios";
import ParkInfo from "../Components/ParkInfo";
import TrailsList from "../Components/TrailsList";

const ParkDetails = (props) => {
  const { parkName } = useParams();
  const [currentPark, setCurrentPark] = useState({});
  const [parksVisited, setParksVisited] = useState(new Set());
  const [currentTrails, setCurrentTrails] = useState([]);
  const [trailsVisited, setTrailsVisited] = useState(new Set());
  const currentHiker = props.currentHiker;
  const loggedIn = props.loggedIn;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${parkName}`)
      .then((response) => {
        setCurrentPark(response.data);
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_URL}/trails/${response.data.id}`
          )
          .then((response2) => {
            setCurrentTrails(response2.data);

            if (loggedIn) {
              axios
                .get(
                  `${process.env.REACT_APP_BACKEND_URL}/hikers/${currentHiker.userId}/hikes/trails/${response.data.id}`
                )

                .then((response3) => {
                  const trailsVisitedSet = new Set();
                  response3.data.forEach((hike) => {
                    hike.trails.forEach((trail) => {
                      trailsVisitedSet.add(trail.id);
                    });
                  });
                  setTrailsVisited(trailsVisitedSet);
                })
                .catch((error) => {
                  console.log(error);
                  alert("Oops! Something went wrong. Please try again later.");
                });
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  }, [parkName, loggedIn, currentHiker]);

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
    <div>
      <section className="container.fluid">
        <ParkInfo
          currentPark={currentPark}
          visited={parksVisited.has(currentPark.id)}
        />
      </section>
      <section className="container.fluid bg-primary py-4">
        <TrailsList
          currentTrails={currentTrails}
          trailsVisited={trailsVisited}
        />
      </section>
    </div>
  );
};

export default ParkDetails;
