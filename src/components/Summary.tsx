import React from "react";
import "./Summary.scss";
import SummaryPanel, { Color } from "./SummaryPanel";
import { DataItem } from "../App";
import Button from "./Button";

type Props = {
  data: DataItem[];
};

const Summary = ({ data }: Props): JSX.Element => {
  return (
    <div className='summary'>
      <div className='header'>Summary</div>

      {data.map(({ category, score, icon, color }) => {
        return (
          <SummaryPanel
            title={category}
            iconPath={icon}
            points={score}
            totalPoints={100}
            color={color}
            key={category}
          />
        );
      })}
      <Button label={"Continue"} />
    </div>
  );
};

export default Summary;
