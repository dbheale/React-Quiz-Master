import { useState } from "react";
import { useGameContext } from "../hooks/GameContext";
import QuestionTimer from "./QuestionTimer";
import ChangePageButton from "./ChangePageButton";

const QuestionRenderer = () => {
  const context = useGameContext();

  if (context.activeQuestion === undefined) return;

  const [answerIsCorrect, setAnswerState] = useState<
    boolean | undefined | null
  >(undefined);

  const onAnswerSelected = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    value?: string
  ) => {
    if (answerIsCorrect !== undefined) return; // not answered yet

    if (
      context.activeQuestion?.question === undefined ||
      context.activeQuestion?.number === undefined
    )
      return; // why is the state messed up?

    let res = false;
    if (e && value) {
      // the event is a user clicking on a button
      res = context.activeQuestion.question.answer == value;
    }

    context.setAnswer(context.activeQuestion.number, res);

    setAnswerState(res);
  };

  const nextQuestion = () => {
    setAnswerState(undefined);
    context.nextQuestion();
  };
  console.log(
    "count {}, number {}",
    context.options?.questionCount ?? 0,
    context.activeQuestion.number ?? 0
  );

  return (
    <div className="question-wrap">
      <p>
        {context.activeQuestion?.number}.{" "}
        {context.activeQuestion.question?.question}
      </p>
      <div className="answer-wrap">
        {context.activeQuestion.question?.options?.map((option, index) => (
          <button
            onClick={(e) => onAnswerSelected(e, option)}
            key={option + index}
          >
            {option}
          </button>
        ))}
      </div>
      {answerIsCorrect === undefined ? (
        <QuestionTimer
          timeInMinutes={context.options?.timeLimit ?? 0.05}
          onExpiry={() => setAnswerState(null)}
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
            {(context.options?.questionCount ?? 0) >
            (context.activeQuestion.number ?? 0) ? (
              <button onClick={nextQuestion}>Next Question =&gt;</button>
            ) : (
              <ChangePageButton text={"View Results"} page={"/results"} />
            )}
          </p>
        </span>
      )}
    </div>
  );
};

export default QuestionRenderer;
