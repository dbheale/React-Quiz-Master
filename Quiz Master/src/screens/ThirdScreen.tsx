import ChangePageButton from "../components/ChangePageButton";
import OptionSummary from "../OptionSummary";
import { useGameContext } from "../hooks/GameContext";

const ThirdScreen = () => {
  const gameContext = useGameContext();
  const correctAnswers = gameContext.getResults();
  const resetQuestions = () => {
    gameContext.reset();
    return true;
  };
  return (
    <>
      <p>Quiz conquered! 🎉</p>
      <p>
        Thanks for hanging in there. Now, let's see how many brain cells
        survived—here are your results!
      </p>
      <p>
        You answered {correctAnswers} out of{" "}
        {gameContext.options?.questionCount} questions correct.
      </p>
      <OptionSummary />
      <span className="flex-span">
        <ChangePageButton
          text={"Restart"}
          beforeChange={resetQuestions}
          page={"/quiz"}
        />
        <ChangePageButton text={"Choose another quiz"} page={"/"} />
      </span>
    </>
  );
};
export default ThirdScreen;
