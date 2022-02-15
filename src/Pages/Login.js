import { React, useEffect } from "react";
import Userfront from "@userfront/react";

const Login = (props) => {
  const LoginForm = Userfront.build({
    toolId: "rloomo",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <br />
      <br />
      <LoginForm />
    </div>
  );
};

export default Login;
