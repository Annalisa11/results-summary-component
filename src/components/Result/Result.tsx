import "./Result.scss";
import ResultCircle from "../ResultCircle";

type Props = {
  points: number;
  totalPoints: number;
};

const Result = ({ points, totalPoints }: Props): JSX.Element => {
  return (
    <div className='result'>
      <h2>Your Result</h2>

      <ResultCircle points={points} totalPoints={totalPoints} />
      <div className='description'>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken the tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
