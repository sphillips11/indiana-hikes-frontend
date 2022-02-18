import { React, useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="bg-green1 pt-5 vh-100 text-center">
      <h1 className="pt-5 text-green3">
        404 - Uh oh! This page is out for a hike.
      </h1>
      <img
        className="icon mx-auto"
        src="/images/hiker_icon.png"
        alt="Hiker icon"
      />
    </div>
  );
};

export default ErrorPage;
