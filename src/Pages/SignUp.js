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
    <div className="pt-5 bg-green1 vh-100">
      <SignupForm />
    </div>
  );
};

export default SignUp;
