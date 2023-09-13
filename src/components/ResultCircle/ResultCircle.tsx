import "./ResultCircle.scss";

type Props = {
  points: number;
  totalPoints: number;
};

const ResultCircle = ({ points, totalPoints }: Props): JSX.Element => {
  return (
    <div className='circle'>
      <p className='points'>{points}</p>
      <p className='total'>of {totalPoints}</p>
    </div>
  );
};

export default ResultCircle;
