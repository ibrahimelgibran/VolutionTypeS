import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const hendleLogin = () => {
    setUser({
      name: "Gibran",
      email: "gibran@example.com",
    });
  };

  return (
    <div>
      <button onClick={hendleLogin}>Login</button>
      <div>User Name {user?.name}</div>
      <div>User Gmail {user?.email}</div>
    </div>
  );
};
