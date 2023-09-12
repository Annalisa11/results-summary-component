import React from "react";
import "./SummaryPanel.scss";

export enum Color {
  red = "red",
  orange = "orange",
  green = "green",
  blue = "blue",
}

type Props = {
  title: string;
  points: number;
  totalPoints: number;
  iconPath: string;
  color?: Color;
};

const SummaryPanel = ({
  title,
  points,
  totalPoints,
  iconPath,
  color,
}: Props): JSX.Element => {
  const panelStyle = {};

  return (
    <div className={`panel ${color}`}>
      <img src={iconPath} alt={`${title} icon`} />

      <div className='content'>
        <div className='title' style={panelStyle}>
          {title}
        </div>
        <div className='points'>
          <strong>{points}</strong> / {totalPoints}
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
