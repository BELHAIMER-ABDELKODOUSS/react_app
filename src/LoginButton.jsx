import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, getIdTokenClaims } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button
        onClick={async () => {
          const claims = await getIdTokenClaims();
          // if you need the raw id_token, you can access it
          // using the __raw property
          const id_token = claims.__raw;
          console.log(id_token);
        }}
      >
        get id token
      </button>
    </div>
  );
};

export default LoginButton;
