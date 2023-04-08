import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button(props) {
  const currentRollValue = props.value;

  const handleRoll = () => {
    props.onRoll({ value: getD6Roll(), time: Date.now() });
  };

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
