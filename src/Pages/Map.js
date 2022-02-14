import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

const Map = () => {
  const { parkName } = useParams();
  const title = `${parkName}-map`;
  const [currentParkMap, setCurrentParkMap] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-backend.herokuapp.com/${parkName}/map`)
      .then((response) => {
        setCurrentParkMap(response.data.map);
      })
      .catch((error) => {
        console.log(error);
        // alert("Oops! Something went wrong. Please try again later.");
      });
  }, []);

  return (
    <div className="container-fluid h-100">
      <iframe
        title={title}
        src={`${currentParkMap}#view=fitH`}
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Map;
