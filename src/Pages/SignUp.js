import { React, useEffect } from "react";
import Userfront from "@userfront/react";

const SignUp = (props) => {
  const SignupForm = Userfront.build({
    toolId: "omddam",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <br />
      <br />
      <SignupForm />
    </div>
  );
};

export default SignUp;
