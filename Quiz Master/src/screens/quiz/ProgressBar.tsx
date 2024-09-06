import { useSelector } from "react-redux";
import { gameAnswersSelector } from "../../store/selectors";

const ProgressBar = () => {
  const answers = useSelector(gameAnswersSelector);

  return (
    <div className="progress-wrap">
      {answers
        ?.slice()
        .reverse()
        .map((q, i) =>
          q ? (
            <div key={"q_" + q.questionId} className={q.correct ? "question correct" : "question incorrect"}></div>
          ) : (
            <div key={"uq_" + i} className="question"></div>
          )
        )}
    </div>
  );
};

export default ProgressBar;
