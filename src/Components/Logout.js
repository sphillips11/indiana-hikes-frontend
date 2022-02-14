import React from "react";
import Userfront from "@userfront/react";

Userfront.init("vndxvjwn");

const Logout = () => {
  const LogoutButton = Userfront.build({
    toolId: "blrrmm",
  });
  return (
    <div>
      <LogoutButton />
    </div>
  );
};

export default Logout;
