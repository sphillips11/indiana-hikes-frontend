import { React, useEffect } from "react";
import Userfront from "@userfront/react";

const PasswordReset = () => {
  const PasswordResetForm = Userfront.build({
    toolId: "lokkdl",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="mt-5">
      <PasswordResetForm />
    </div>
  );
};

export default PasswordReset;
