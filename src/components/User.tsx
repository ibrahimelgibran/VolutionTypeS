import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const hendleLogin = () => {
    setUser({
      name: "Gibran",
      email: "gibran@example.com",
    });
  };
  const hendleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={hendleLogin}>Login</button>
      <button onClick={hendleLogout}>Logout</button>
      <div>User Name {user?.name}</div>
      <div>User Gmail {user?.email}</div>
    </div>
  );
};
