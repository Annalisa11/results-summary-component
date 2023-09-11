import React from "react";
import "./SummaryPanel.scss";

type Props = {
  title: string;
  points: number;
  totalPoints: number;
  iconPath: string;
};

const SummaryPanel = ({
  title,
  points,
  totalPoints,
  iconPath,
}: Props): JSX.Element => {
  return (
    <div className='panel'>
      <img src={iconPath} alt='memory icon' />

      <div className='content'>
        <div className='title'>{title}</div>
        <div className='points'>
          <strong>{points}</strong> / {totalPoints}
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
