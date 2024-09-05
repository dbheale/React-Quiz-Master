import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProgressBar = () => {
  const answers = useSelector((state: RootState) => state.game.answers);

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
