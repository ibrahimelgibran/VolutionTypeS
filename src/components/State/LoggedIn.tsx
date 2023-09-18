import React, { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const hendleLogin = () => {
    setLoggedIn(true);
  };

  const hendleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={hendleLogin}>Login</button>
      <button onClick={hendleLogout}>Login</button>
      <div>Usr is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  );
};
