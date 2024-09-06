import { useSelector } from "react-redux";
import { types, times, difficulties } from "../../constants/ValueOptions";
import { categoriesSelector, settingsSelector } from "../../store/selectors";

const OptionSummary = () => {
  const gameSettings = useSelector(settingsSelector);
  const categories = useSelector(categoriesSelector);
  return (
    <div className="config-summary">
      <p>Config</p>
      <p>
        Type: {types.find((f) => f.value == gameSettings?.type)?.label ?? "Any"}
      </p>
      <p>
        Category: {categories.find(f => f.value == gameSettings?.category)?.label ?? "Any"}
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
