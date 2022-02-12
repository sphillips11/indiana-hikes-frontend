import React, { useEffect } from "react";
import Header from "../Components/Header";

const ErrorPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header />
      404 - Uh oh! This page is out for a hike.
    </div>
  );
};

export default ErrorPage;
