import "./Summary.scss";
import SummaryPanel from "../SummaryPanel";
import { DataItem } from "../../App";
import Button from "../button";

type Props = {
  data: DataItem[];
};

const Summary = ({ data }: Props): JSX.Element => {
  return (
    <div className='summary'>
      <h2>Summary</h2>

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
