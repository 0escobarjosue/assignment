import React from "react";
import "./GreetingBar.css";

const GreetingBar = () => {
  return (
    <div className="GreetingBarcontainer">
      <div className="breadCrums">
        <p className="breadCrumsText">
          {" "}
          <span className="inactive">Home / Dashboard /</span>{" "}
          <span className="active">Workplace</span>
        </p>
      </div>
      <div className="greetingArea">
        <div className="avatarImgDiv">
          <img
            className="avatarImg"
            src="https://img.icons8.com/officel/80/000000/user.png"
            alt="avatar"
          />
        </div>
        <div className="greetingTitleBlock">
          <p className="greetingText">
            Good morning, Serati Ma , I wish you happiness every day!
          </p>
          <p className="jobTitle">
            Interaction expert | Ant gold service-some certain business group-a
            certain plarform department-a certain technical department-UED
          </p>
        </div>
      </div>
    </div>
  );
};
export default GreetingBar;
