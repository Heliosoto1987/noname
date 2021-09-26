//vendor
import React, { useContext, useEffect } from "react";
//style
import "../../styles/login.css";
import { UserContext } from "../../userContext.js/userContext";
//firebase
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";

export const LoginScreen = (props) => {
  const { userState, setUserState } = useContext(UserContext);
  const handleClickLogin = async () => {
    const resp = await firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((hola) => ({
        name: hola.user.displayName,
        email: hola.user.email,
        uid: hola.user.uid,
      }));

    return await setUserState(resp);
  };

  const handleBack = () => {
    props.history.push("/");
  };
  useEffect(() => {
    if (userState.name?.length > 1) {
      props.history.push("/");
    }
  }, [userState, props.history]);

  return (
    <div className="login">
      <div className="login__box">
        <div className="login__icon">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <p className="login__text">
          <b>Conectate con tu cuenta Google</b>
        </p>
        <button onClick={handleClickLogin} className="login__btn">
          Entrar
        </button>
        <button onClick={handleBack} className="login__btn">
          Volver atras
        </button>
      </div>
    </div>
  );
};
