import React, { useEffect, useState } from "react";
import "./App.scss";
import JSONdata from "./data.json";
//Components
import Button from "./components/button";
import SummaryPanel from "./components/SummaryPanel";
//Assets
import MemoryIcon from "./assets/images/icon-memory.svg";
import ReactionIcon from "./assets/images/icon-reaction.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";
//Types and Enums
import { Color } from "./components/SummaryPanel/SummaryPanel";
import Result from "./components/Result";
import Summary from "./components/Summary";

export interface DataItem {
  category: string;
  score: number;
  icon: string;
  color?: Color;
}

function App() {
  const [data, setData] = useState<DataItem[]>(JSONdata);

  useEffect(() => {
    setData(addColorProperty(data));
    console.log("color use effect");
    console.log(data);
  }, []);

  const addColorProperty = (data: DataItem[]): DataItem[] => {
    return data.map((item) => {
      console.log("addcolor", data);
      switch (item.category) {
        case "Reaction":
          item.color = Color.red;
          item.icon = ReactionIcon;
          break;
        case "Memory":
          item.color = Color.orange;
          item.icon = MemoryIcon;
          break;
        case "Verbal":
          item.color = Color.green;
          item.icon = VerbalIcon;
          break;
        case "Visual":
          item.color = Color.blue;
          item.icon = VisualIcon;
          break;

        default:
          break;
      }
      return item;
    });
  };

  return (
    <div className='app'>
      <div className='card'>
        <Result points={76} totalPoints={100} />
        <Summary data={data} />
      </div>
    </div>
  );
}

export default App;
