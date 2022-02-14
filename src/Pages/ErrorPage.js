import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <div>404 - Uh oh! This page is out for a hike.</div>;
};

export default ErrorPage;
