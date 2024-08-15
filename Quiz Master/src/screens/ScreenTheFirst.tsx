import { ChangeEvent, useContext, useState } from "react";
import "./ScreenTheFirst.css";
import { DescriptiveSelectList } from "../DescriptiveSelectList";
import { categories, difficulties, types, times } from "../ValueOptions";
import { GameContext } from "../GameContext";
import { Category, Difficulty, QuestionType } from "../Question";

const ScreenTheFirst = () => {
  const context = useContext(GameContext);
  const [numberOfQuestions, setNumberOfQuestions] = useState(context.options.questionCount);
  const [category, setCategory] = useState<Category|undefined>(context.options.category);
  const [difficulty, setDifficulty] = useState<Difficulty|undefined>(context.options.difficulty);
  const [type, setType] = useState<QuestionType|undefined>(context.options.type);
  const [time, setTime] = useState<number>(context.options.timeLimit);

  const numberChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfQuestions(Number.parseInt(e.target.value));
  };

  const categoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  const difficultyChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  const typeChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as QuestionType);
  };

  const timeChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime(Number.parseInt(e.target.value));
  };

  const startGame = () => {
    if (
      !type ||
      !category ||
      !difficulty
    ) {
      return;
    }

    context.setGameOptions({
      questionCount: numberOfQuestions,
      timeLimit: time,
      type: type,
      category: category,
      difficulty: difficulty,
    });

    context.setPage(1);
  };

  return (
    <div className="wrapper">
      <p>
        <label htmlFor="questions">Number of questions: </label>
        <input
          id="questions"
          type="number"
          onChange={numberChanged}
          value={numberOfQuestions}
          min={5}
          max={15}
          step={1}
        />
      </p>
      <DescriptiveSelectList
        onChange={categoryChanged}
        value={category}
        id={"categories"}
        label={"Category"}
        optionValues={categories}
      />
      <DescriptiveSelectList
        onChange={difficultyChanged}
        value={difficulty}
        id={"difficulty"}
        label={"Difficulty"}
        optionValues={difficulties}
      />
      <DescriptiveSelectList
        onChange={typeChanged}
        value={type}
        id={"type"}
        label={"Type"}
        optionValues={types}
      />
      <DescriptiveSelectList
        onChange={timeChanged}
        value={time}
        id={"time"}
        label={"Time"}
        optionValues={times}
      />

      <span className="flex-span">
        <div className="card">
          <button onClick={startGame}>Start quiz</button>
        </div>
        <div className="card">
          <button>See my statistics</button>
        </div>
      </span>
    </div>
  );
};

export default ScreenTheFirst;
