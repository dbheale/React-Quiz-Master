import ChangePageButton from "../../components/ChangePageButton";
import OptionSummary from "./OptionSummary";
import { Routes } from "../../constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { clearQuestions, startGameThunk } from "../../store/slices/gameSlice";
import { clearGameSettings } from "../../store/slices/settingsSlice";
import { gameAnswersSelector, settingsQuestionCountSelector } from "../../store/selectors";
import { playAudio } from "../../store/slices/audioPlayerSlice";
import { Sounds } from "../../constants/Sounds";
import { useRef } from "react";

const ResultsPartial = () => {
  const dispatch: AppDispatch = useDispatch();
  const answers = useSelector(gameAnswersSelector);
  const questionCount = useSelector(settingsQuestionCountSelector);
  const correctAnswers = answers?.filter((f) => f?.correct === true).length;
  const hasRendered = useRef(false);

  // Just using this so the audio doesn't play on rerender... I don't think it would, but just in case.
  if(!hasRendered.current){

    const sound = correctAnswers > questionCount / 2 ? Sounds.Summary : Sounds.BadSummary;
  
    dispatch(playAudio(sound));

    hasRendered.current = true; 
  }

  const resetQuestions = () => {
    dispatch(clearQuestions());
    dispatch(startGameThunk());
    return true;
  };

  const clearGameData = () => {
    dispatch(clearGameSettings());
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
          page={Routes.Home}
        />
      </span>
    </>
  );
};
export default ResultsPartial;
