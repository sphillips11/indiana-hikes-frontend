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
    <div className="pt-5 bg-green1 vh-100">
      <LoginForm />
    </div>
  );
};

export default Login;
