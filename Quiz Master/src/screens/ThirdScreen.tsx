import ChangePageButton from "../ChangePageButton";
import OptionSummary from "../OptionSummary";
import { useGameContext } from "../hooks/GameContext";

const ThirdScreen = () => {
  const gameContext = useGameContext();
  const correctAnswers = gameContext.getResults();
  return (
    <>
      <p>Quiz conquered! 🎉</p>
      <p>
        Thanks for hanging in there. Now, let's see how many brain cells
        survived—here are your results!
      </p>
      <p>
        You answered {correctAnswers} out of {gameContext.options?.questionCount}{" "}
        questions correct.
      </p>
      <OptionSummary />
      <span className="flex-span">
        <ChangePageButton text={"Restart"} pageIndex={1} />
        <ChangePageButton text={"Choose another quiz"} pageIndex={0} />
      </span>
    </>
  );
};
export default ThirdScreen;
