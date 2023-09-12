import React from "react";
import "./ResultCircle.scss";

type Props = {
  points: number;
  totalPoints: number;
};

const ResultCircle = ({ points, totalPoints }: Props): JSX.Element => {
  return (
    <div className='circle'>
      <div className='points'>{points}</div>
      <div className='total'>of {totalPoints}</div>
    </div>
  );
};

export default ResultCircle;
