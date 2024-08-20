import { useState } from "react";
import QuestionTimer from "../QuestionTimer";
import "./ScreenTwo.css";
import ProgressBar from "../ProgressBar";
import ChangePageButton from "../ChangePageButton";
import { useGameContext } from "../hooks/GameContext";

const QuestionRenderer = () => {
  const context = useGameContext();

  if (context.activeQuestion === undefined) return;

  const [answerIsCorrect, setAnswerState] = useState<boolean | undefined | null>(
    undefined
  );

  const onAnswerSelected = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | null
  ) => {
    if (answerIsCorrect !== undefined) return; // not answered yet

    if (context.activeQuestion?.question === undefined
      || context.activeQuestion?.number === undefined) return; // why is the state messed up?

    let res = false;
    if (e) { // the event is a user clicking on a button
      res = context.activeQuestion.question.answer == e.currentTarget.innerHTML;
    }
    context.setAnswer(context.activeQuestion.number, res);
    if (e === null) { // timed out so the event is null
      setAnswerState(e);
      return;
    }
    setAnswerState(res);
  };

  const nextQuestion = () => {
    setAnswerState(undefined);
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
              <span>Correct! {context.activeQuestion.question?.reason}</span>
            ) : (
              <span>Wrong! {context.activeQuestion.question?.reason}</span>
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
        <ChangePageButton text={"End quiz"} pageIndex={0} />
        <ProgressBar />
      </span>
    </div>
  );
};

export default ScreenTwo;
