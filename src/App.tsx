import React from "react";
import "./App.scss";
import Button from "./components/Button";
import SummaryPanel from "./components/SummaryPanel";
import MemoryIcon from "./assets/images/icon-memory.svg";
import ReactionIcon from "./assets/images/icon-reaction.svg";

function App() {
  return (
    <div className='app'>
      <div className='card'>
        <div className='result'>Result</div>
        <div className='summary'>
          Summary
          <SummaryPanel
            title={"Memory"}
            iconPath={MemoryIcon}
            points={92}
            totalPoints={100}
          />
          <SummaryPanel
            title={"Reaction"}
            iconPath={ReactionIcon}
            points={80}
            totalPoints={100}
          />
          <Button label={"Continue"} />
        </div>
      </div>
    </div>
  );
}

export default App;
