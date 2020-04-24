import React from "react";
import "./GreetingBarData.css";

const GreetingBarData = (props) => {
  return (
    <div className="GreetingBarDataContainer">
      <div className="dataBox">
        <p className="headerText">{props.header}</p>
        <p className="statistic">
          {props.statistic} <span className="outOf">{props.outOf}</span>
        </p>
      </div>
    </div>
  );
};
export default GreetingBarData;
