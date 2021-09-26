//vendor
import React, { useState } from "react";
//router
import { AppRouter } from "./router/AppRouter";
//context
import { UserContext } from "./userContext.js/userContext";
export const App = () => {
  const [userState, setUserState] = useState("");

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
