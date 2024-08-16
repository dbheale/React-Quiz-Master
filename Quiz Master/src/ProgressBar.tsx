import { useContext } from "react";
import { GameContext } from "./GameContext";

const ProgressBar = () => {
  const context = useContext(GameContext);
  return (
    <div>
      <span>{context.activeQuestion?.number}/{context.options.questionCount}</span>
    </div>
  );
};

export default ProgressBar;
