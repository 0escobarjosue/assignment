import React from "react";
import "./GraphInfo.css";

const GraphInfo = (props) => {
  return (
    <div className="GraphInfoBox">
      <div className="GraphInfoHeader">
        <div className="imgDiv">
          <img src={props.src} alt="blueDot" className="imgDot" />
        </div>
        <p className="GraphInfoHeaderText">{props.heading}</p>
      </div>
      <div className="GraphInfoData">
        <p className="GraphInfoDataText">{props.qty}</p>
      </div>
    </div>
  );
};

export default GraphInfo;
