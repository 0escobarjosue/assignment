import React from "react";
import "./GraphBox.css";
import GraphImage from "./graph.PNG";

const GraphBox = () => {
  return (
    <div className="graphBox">
      <div className="headerBarGraph">
        <p className="headerBarGraphTexts">XX index</p>
      </div>
      <div className="graphImg">
        <img className="imgGraph" src={GraphImage} alt="graphBoxImg"></img>
      </div>
    </div>
  );
};

export default GraphBox;
