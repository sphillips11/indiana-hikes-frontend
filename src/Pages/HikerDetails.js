import { React, useEffect } from "react";
import HikerInfo from "../Components/HikerInfo";

const HikerDetails = (props) => {
  const currentHiker = props.currentHiker;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="bg-green1 vh-100">
      <HikerInfo currentHiker={currentHiker} />
    </div>
  );
};

export default HikerDetails;
