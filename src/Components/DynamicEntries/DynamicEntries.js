import React from "react";
import "./DynamicEntries.css";

const DynamicEntries = (props) => {
  return (
    <div className="dynamicBar">
      <div className="userPhoto">
        <img src={props.avatar} alt="avatar" className="imgAvatar"></img>
      </div>
      <div className="entryDiv">
        <p className="entryText">
          {props.name}
          <span className="highlight">{props.highlightOne}</span>
          {props.action}
          <span className="highlight">{props.highlightTwo}</span>
        </p>
        <p className="timeSinceText">{props.time}</p>
      </div>
    </div>
  );
};
export default DynamicEntries;
