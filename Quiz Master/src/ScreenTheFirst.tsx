import { ChangeEvent, useState } from "react";
import "./ScreenTheFirst.css";
import { DescriptiveSelectList } from "./DescriptiveSelectList";
import { categories, difficulties, types, times } from "./ValueOptions";

const ScreenTheFirst = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [category, setCategory] = useState<string | undefined>();
  const [difficulty, setDifficulty] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [time, setTime] = useState<number | undefined>();

  const numberChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfQuestions(Number.parseInt(e.target.value));
  };

  const categoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const difficultyChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  const typeChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const timeChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime(Number.parseInt(e.target.value));
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
          <button>Start quiz</button>
        </div>
        <div className="card">
          <button>See my statistics</button>
        </div>
      </span>
    </div>
  );
};

export default ScreenTheFirst;