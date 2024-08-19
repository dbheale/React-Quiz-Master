import { useGameContext } from "./hooks/GameContext";


const ProgressBar = () => {
  const context = useGameContext();
  return (
    <div>
      <span>{context.activeQuestion?.number}/{context.options.questionCount}</span>
    </div>
  );
};

export default ProgressBar;
