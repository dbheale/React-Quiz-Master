import { useSelector } from "react-redux";
import { types, times, difficulties } from "../../constants/ValueOptions";
import { RootState } from "../../store";

const OptionSummary = () => {
  const gameSettings = useSelector((state: RootState) => state.settings);
  return (
    <div className="config-summary">
      <p>Config</p>
      <p>
        Type: {types.find((f) => f.value == gameSettings?.type)?.label ?? "Any"}
      </p>
      <p>
        Category: {gameSettings?.category ?? "Any"}
      </p>
      <p>
        Time: {times.find((f) => f.value == gameSettings?.timeLimit)?.label ?? "Any"}
      </p>
      <p>
        Difficulty:{" "}
        {
          difficulties.find((f) => f.value == gameSettings?.difficulty)
            ?.label ?? "Any"
        }
      </p>
    </div>
  );
};
export default OptionSummary;
