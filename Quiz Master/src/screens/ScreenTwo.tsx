import { useContext } from "react";
import { GameContext, GameOptions } from "../GameContext";
import { Questions } from "../Question";
import "./ScreenTwo.css"

export interface ScreenTwoArgs {
  options: GameOptions;
}

const ScreenTwo = (args: ScreenTwoArgs) => {
  const context = useContext(GameContext);

  const questions = Questions.filter(
    (f) =>
      f.category === args.options.category &&
      f.difficulty === args.options.difficulty &&
      f.type === args.options.type
  );

  // randomize it
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  questions.length = args.options.questionCount;
  
  return (
    <div className="wrapper">
      {questions.map((question, i) => (
        <div className="question-wrap">
          <p>{i+1}. {question.question}</p>
          <div className="answer-wrap">
          {question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={question.id}
                value={option}
              />
              {option}
            </label>
          ))}
          </div>
        </div>
      ))}
      <span className="flex-span">
        <div className="card">
          <button onClick={() => context.setPage(0)}>Back</button>
        </div>
        <div className="card">
          <button>Submit</button>
        </div>
      </span>
    </div>
  );
};

export default ScreenTwo;