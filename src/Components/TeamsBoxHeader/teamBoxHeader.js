import React from "react";
import "./teamBoxHeader.css";

const TeamBoxHeader = (props) => {
  return (
    <div className="headerContainerText">
      <div className="leftText">
        <p className="headerTextLeft">{props.headerName}</p>
      </div>
    </div>
  );
};
export default TeamBoxHeader;
