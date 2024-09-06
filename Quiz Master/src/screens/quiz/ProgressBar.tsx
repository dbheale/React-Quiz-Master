import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProgressBar = () => {
  const answers = useSelector((state: RootState) => state.game.answers);

  console.log(answers);
  return (
    <div className="progress-wrap">
      {answers?.slice().reverse().map((q) => {
        if (!q) {
          return <div key={q} className="question"></div>;
        }
        return (
          <div
            className={q.correct ? "question correct" : "question incorrect"}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
