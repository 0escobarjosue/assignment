import React from "react";
import "./teamsBox.css";

const TeamsBox = (props) => {
  return (
    <div className="teamsBox">
      <div className="teamsBoxItem">
        <div className="teamLogoDiv">
          <img src={props.logo} alt="logo" className="teamLogo"></img>
        </div>
        <div className="teamsTextDiv">
          <p className="teamsText">{props.name}</p>
        </div>
      </div>
    </div>
  );
};
export default TeamsBox;
