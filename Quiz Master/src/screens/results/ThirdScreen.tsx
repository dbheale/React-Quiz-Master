import ChangePageButton from "../../components/ChangePageButton";
import OptionSummary from "./OptionSummary";
import { Routes } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { clearQuestions, startGameThunk } from "../../store/slices/gameSlice";
import { clearGameSettings } from "../../store/slices/settingsSlice";

const ThirdScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.game.answers);
  const questionCount = useSelector((state: RootState) => state.settings.questionCount);
  const correctAnswers = answers?.filter(f => f?.correct === true).length;
  const resetQuestions = () => {
    dispatch(clearQuestions());
    dispatch(startGameThunk());
    return true;
  };

  const clearGameData = () => {
    dispatch(clearGameSettings())
    dispatch(clearQuestions());
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
        You answered {correctAnswers} out of {questionCount} questions correct.
      </p>
      <OptionSummary />
      <span className="flex-span">
        <ChangePageButton
          text={"Restart"}
          beforeChange={resetQuestions}
          page={"/quiz"}
        />
        <ChangePageButton
          text={"Choose another quiz"}
          beforeChange={clearGameData}
          page={Routes.Home} />
      </span>
    </>
  );
};
export default ThirdScreen;
