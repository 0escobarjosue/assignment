import React from "react";
import "./GridHeader.css";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="leftText">
        <p className="headerTextLeft">{props.textLeft}</p>
      </div>
      <div className="rightText">
        <p className="headerTextRight">{props.textRight}</p>
      </div>
    </div>
  );
};
export default Header;
