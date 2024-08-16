import { useContext, useState } from "react";
import { GameContext } from "../GameContext";
import QuestionTimer from "../QuestionTimer";
import "./ScreenTwo.css";
import ProgressBar from "../ProgressBar";
import ChangePage from "../ChangePage";

const QuestionRenderer = () => {
  const context = useContext(GameContext);

  if (context.activeQuestion === undefined) return;

  const [answerIsCorrect, setTimerState] = useState<boolean | undefined | null>(
    undefined
  );

  const onAnswerSelected = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | null
  ) => {
    if (answerIsCorrect !== undefined) return;
    if (context.activeQuestion?.question === undefined) return;
    let res = false;
    if (e) {
      res = context.activeQuestion.question.answer == e.currentTarget.innerHTML;
    }
    if (e === null) {
      setTimerState(e);
      return;
    }
    setTimerState(res);
  };

  const nextQuestion = () => {
    setTimerState(undefined);
    context.nextQuestion();
  }

  return (
    <div className="question-wrap">
      <p>
        {context.activeQuestion?.number}.{" "}
        {context.activeQuestion.question?.question}
      </p>
      <div className="answer-wrap">
        {context.activeQuestion.question?.options?.map((option, index) => (
          <button onClick={onAnswerSelected} key={option + index}>
            {option}
          </button>
        ))}
      </div>
      {answerIsCorrect === undefined ? (
        <QuestionTimer
          timeInMinutes={context.options.timeLimit}
          onExpiry={() => onAnswerSelected(null)}
        />
      ) : (
        <span>
          <p className="answer">
            {answerIsCorrect === null ? (
              <span>Time's up! {context.activeQuestion.question?.reason}</span>
            ) : answerIsCorrect ? (
              <span>Correct!</span>
            ) : (
              <span>{context.activeQuestion.question?.reason}</span>
            )}
            {context.options.questionCount > (context.activeQuestion.number ?? 0)
            ? <button onClick={nextQuestion}>Next Question =&gt;</button>
            : <button onClick={() => context.setPage(2)}>View Results</button>}
          </p>
        </span>
      )}
    </div>
  );
};

const ScreenTwo = () => {
  return (
    <div className="wrapper">
      <QuestionRenderer />
      <span className="flex-span">
        <ChangePage text={"End quiz"} pageIndex={0} />
        <ProgressBar />
      </span>
    </div>
  );
};

export default ScreenTwo;
