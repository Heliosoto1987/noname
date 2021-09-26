//vendor
import React from "react";
//styles
import "../../styles/landing.css";
//components
import { NavBar } from "../NavBar/NavBar";

export const LandingScreen = (props) => {
  return (
    <>
      <NavBar props={props} />
      <div className="landing">
        <h1 className="landing__title">Bienvenidos</h1>
      </div>

      <h2 className="rosters__title">Rosters:</h2>
      <div className="rosters">
        <div className="rosters__flexul">
          <div className="rosters__ul">
            <div className="rosters__div">Equipo A:</div>
            <li className="rosters__li">Carryoff</li>
            <li className="rosters__li">swag</li>
            <li className="rosters__li">Saxman</li>
            <li className="rosters__li">Deykar</li>
            <li className="rosters__li">style</li>
            <li className="rosters__li">iLubb</li>
            <li className="rosters__li">Boruto</li>
            <li className="rosters__li">Luisfer</li>
            <li className="rosters__li">Kalaw</li>
          </div>

          <div className="rosters__ul">
            <div className="rosters__div"> Equipo B:</div>
            <li className="rosters__li">Grillo</li>
            <li className="rosters__li">Sanbau</li>
            <li className="rosters__li">Carolina</li>
            <li className="rosters__li">Alvaro</li>
            <li className="rosters__li">carlosss</li>
            <li className="rosters__li">Todox</li>
            <li className="rosters__li">Willy</li>
            <li className="rosters__li">rumano</li>
            <li className="rosters__li">Abril</li>
          </div>
        </div>
      </div>
      <div className="landing__photo"></div>
    </>
  );
};
