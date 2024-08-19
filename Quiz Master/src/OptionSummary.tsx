import { useGameContext } from "./hooks/GameContext";
import { types, categories, times, difficulties } from "./ValueOptions";

const OptionSummary = () => {
  const gameContext = useGameContext();
  return (
    <div className="config-summary">
      <p>Config</p>
      <p>
        Type: {types.find((f) => f.value == gameContext.options.type)?.label}
      </p>
      <p>
        Category:{" "}
        {categories.find((f) => f.value == gameContext.options.category)?.label}
      </p>
      <p>
        Time:{" "}
        {times.find((f) => f.value == gameContext.options.timeLimit)?.label}
      </p>
      <p>
        Difficulty:{" "}
        {
          difficulties.find((f) => f.value == gameContext.options.difficulty)
            ?.label
        }
      </p>
    </div>
  );
};
export default OptionSummary;