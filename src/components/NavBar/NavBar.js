//vendor
import React, { useContext } from "react";
//styles
import "../../styles/navbar.css";
//context
import { UserContext } from "../../userContext.js/userContext";

export const NavBar = ({ props }) => {
  const { userState, setUserState } = useContext(UserContext);

  const handleButton = () => {
    props.history.push("/login");
  };
  const handleButtonOut = () => {
    setUserState("");
  };

  return (
    <>
      <nav className="nav">
        {userState === "" ? (
          <>
            <button onClick={handleButton} className="nav__buttton">
              login
            </button>
          </>
        ) : (
          <>
            <button onClick={handleButtonOut} className="nav__buttton">
              logout
            </button>

            <span className="nav_welcome">Bienvenido:</span>
            <span className="nav__name"> {userState.name}</span>
          </>
        )}
      </nav>
    </>
  );
};
