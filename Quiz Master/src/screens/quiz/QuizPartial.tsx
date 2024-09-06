import "./QuizPartial.css";
import ProgressBar from "./ProgressBar";
import ChangePageButton from "../../components/ChangePageButton";
import QuestionRenderer from "./QuestionRenderer";
import QuestionTimer from "./QuestionTimer";
import { Routes } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearQuestions } from "../../store/slices/gameSlice";
import { clearGameSettings } from "../../store/slices/settingsSlice";
import { settingsTimeLimitSelector } from "../../store/selectors";

const QuizPartial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timeLimit = useSelector(settingsTimeLimitSelector);

  const routeToResults = () => {
    navigate(Routes.Results);
  };
  const clearGameData = () => {
    dispatch(clearGameSettings())
    dispatch(clearQuestions());
  };

  return (
    <div className="wrapper">
      <QuestionRenderer />
      <span className="flex-span">
        <QuestionTimer
          timeInMinutes={timeLimit ?? 1}
          onExpiry={routeToResults}
        />
        <ProgressBar />
        <ChangePageButton
          text={"End quiz"}
          page={Routes.Home}
          prompt={true}
          afterChange={clearGameData}
        />
      </span>
    </div>
  );
};

export default QuizPartial;
