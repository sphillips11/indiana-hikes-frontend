import { React, useEffect } from "react";
import HikerInfo from "../Components/HikerInfo";

const HikerDetails = (props) => {
  const currentHiker = props.currentHiker;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <HikerInfo currentHiker={currentHiker} />
    </div>
  );
};

export default HikerDetails;
