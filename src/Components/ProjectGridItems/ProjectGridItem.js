import React from "react";
import "./ProjectGridItem.css";

const ProjectGridItem = (props) => {
  return (
    <div className="gridContainer">
      <div className="gridItem">
        <div className="title">
          <img src={props.src} className="icon" alt="icon"></img>
          <p className="titleText">{props.name}</p>
        </div>
        <div className="description">
          <p className="descriptionText">{props.text}</p>
        </div>
        <div className="projectName">
          <p className="projectNameLine">Science moving bricks</p>
          <p className="timeSince">2 days ago</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectGridItem;
