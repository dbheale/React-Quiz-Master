import { ChangeEvent, useState } from "react";
import { DescriptiveSelectList } from "../DescriptiveSelectList";
import { categories, difficulties, types, times } from "../ValueOptions";
import { useGameContext } from "../hooks/GameContext";
import { Category, Difficulty, QuestionType } from "../types/Question";
import ChangePageButton from "../components/ChangePageButton";
import "./ScreenTheFirst.css";
import { useDispatch } from "react-redux";
import { playAudio } from "../store/slices/audioPlayerSlice";

const ScreenTheFirst = () => {
  const dispatch = useDispatch();

  const context = useGameContext();

  const [numberOfQuestions, setNumberOfQuestions] = useState(
    context.options?.questionCount
  );
  const [category, setCategory] = useState<Category | undefined>(
    context.options?.category
  );
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>(
    context.options?.difficulty
  );
  const [type, setType] = useState<QuestionType | undefined>(
    context.options?.type
  );
  const [time, setTime] = useState<number>(context.options?.timeLimit ?? 1);

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
  const scream = () =>{
    dispatch(playAudio());
    return true;
  }

  const startGame = () => {
    if (!type || !category || !difficulty) {
      return false;
    }

    context.setGameOptions({
      questionCount: numberOfQuestions ?? 0,
      timeLimit: time,
      type: type,
      category: category,
      difficulty: difficulty,
    });

    return true;
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
        value={time.toString()}
        id={"time"}
        label={"Time"}
        optionValues={times}
      />

      <span className="flex-span">
        <ChangePageButton
          text={"Start quiz"}
          page={"quiz"}
          beforeChange={startGame}
        />
        <ChangePageButton
          text={"See my statistics"}
          page={"stats"}
          beforeChange={scream}
        />
      </span>
    </div>
  );
};

export default ScreenTheFirst;
