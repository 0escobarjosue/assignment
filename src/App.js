import React from "react";
import NavBarHeader from "./Components/NavHeader/NavBarHeader";
import ProjectGridItem from "./Components/ProjectGridItems/ProjectGridItem";
import Header from "./Components/ProjectsGridHeader/GridHeader";
import GraphBox from "./Components/GraphBox/GraphBox";
import GreetingBar from "./Components/GreetingBar/GreetingBar";
import GreetingBarData from "./Components/GreetingBarData/GreetingBarData";
import GraphInfo from "./Components/GraphInfo/GraphInfo";
import DynamicEntries from "./Components/DynamicEntries/DynamicEntries";
import TeamsBox from "./Components/TeamsBox/teamsBox";
import TeamBoxHeader from "./Components/TeamsBoxHeader/teamBoxHeader";
import "./App.css";
import "./Components/GreetingBar/GreetingBar.css";
import "./Components/GraphBox/GraphBox.css";
import "./Components/GraphInfo/GraphInfo.css";
import "./Components/DynamicEntries/DynamicEntries.css";
import "./Components/TeamsBoxHeader/teamBoxHeader.css";
function App() {
  return (
    <div className="container">
      <NavBarHeader />
      <div className="GreetingBarItems">
        <GreetingBar />
        <div className="GreetingBarDataContainerParent">
          <GreetingBarData header="Number of items" statistic="56" />
          <div className="lineBreakHeader"></div>
          <GreetingBarData header="Team Ranking" statistic="8" outOf="/ 24" />
          <div className="lineBreakHeader"></div>
          <GreetingBarData header="Project visit" statistic="2,223" />
        </div>
      </div>
      <div className="columnOne">
        <div className="projectGridContainer">
          <div className="gridHeader">
            <Header textLeft="Ongoing project" textRight="All items" />
            <div className="GreetingBarItems" />
          </div>
          <div className="projectGridComponents">
            <ProjectGridItem
              src="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Alipay"
              text="It's an inner thing that they can't reach and can't reach."
            />
            <ProjectGridItem
              src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"
              name="Angular"
              text="Hope is a good thing, maybe the best , good thinds will not die."
            />
            <ProjectGridItem
              src="https://img.icons8.com/emoji/48/000000/ant-emoji.png"
              name="Ant Design"
              text="There may be so many pubs in my town, but she walked into my pub."
            />
            <ProjectGridItem
              src="https://img.icons8.com/emoji/48/000000/black-circle-emoji.png"
              name="Ant Design Pro"
              text="At that time, I onlu thought about what I wanted, and I didn't want to."
            />
            <ProjectGridItem
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              name="Bootstrap"
              text="Winter is coming."
            />
            <ProjectGridItem
              src="https://img.icons8.com/cute-clipart/64/000000/react-native.png"
              name="React"
              text="Like a box of chocolates, and the results are often unexpected."
            />
          </div>
        </div>

        <div className="dynamicContainer">
          <div className="dynamicHeader">
            <Header textLeft="dynamic" />
          </div>

          <DynamicEntries
            avatar="https://img.icons8.com/color/48/000000/user.png"
            name="Pay little in "
            highlightOne="high force grid-day mission, the design "
            action="of new projects "
            highlightTwo="iteration June"
            time="2 days ago"
          />
          <DynamicEntries
            avatar="https://img.icons8.com/color/48/000000/matrix-architect.png"
            name="Lin Dongdong "
            highlightOne="in the two girls group "
            action="of new projects "
            highlightTwo="iteration June"
            time="2 days ago"
          />
          <DynamicEntries
            avatar="https://img.icons8.com/color/48/000000/person-female.png"
            name="Stars of a week will be"
            highlightOne="May iterative routine  "
            action="update to a published state "
            time="2 days ago"
          />
          <DynamicEntries
            avatar="https://img.icons8.com/plasticine/100/000000/user.png"
            name="Zhu-right in "
            highlightOne="project performance "
            action="has released "
            highlightTwo="a message"
            time="2 days ago"
          />
          <DynamicEntries
            avatar="https://img.icons8.com/doodle/48/000000/user.png"
            name="Lok in "
            highlightOne="programmer daily "
            action="New Projects "
            highlightTwo="brand iteration"
            time="2 days ago"
          />
        </div>
      </div>
      <div className="columnTwo">
        <div className="GraphBoxContainer">
          <GraphBox />
          <div className="graphInfoBoxes">
            <GraphInfo
              src="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              heading="personal"
              qty="34"
            />
            <div className="lineBreak"></div>
            <GraphInfo
              src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"
              heading="team"
              qty="22"
            />
            <div className="lineBreak"></div>
            <GraphInfo
              src="https://img.icons8.com/emoji/48/000000/yellow-circle-emoji.png"
              heading="department"
              qty="23"
            />
          </div>
        </div>
        <div className="teamsBoxFullContainer">
          <div className="teamsBoxContainerHeader">
            <TeamBoxHeader headerName="teams" />
          </div>
          <div className="teamsBoxContainer">
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Scientific movi..."
            />
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Wu Yanzu"
            />
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Secondary 2 G..."
            />
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Programmer e..."
            />
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="High-force des..."
            />
            <TeamsBox
              logo="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"
              name="Lie to learn co..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
