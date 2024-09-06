import "./OptionsPartial.css";
import ChangePageButton from "../../components/ChangePageButton";
import { ChangeEvent, useState } from "react";
import { DescriptiveSelectList } from "../../components/DescriptiveSelectList";
import { difficulties, types, times } from "../../constants/ValueOptions";
import { Difficulty, QuestionCounts, QuestionType } from "../../types/Question";
import { useDispatch, useSelector } from "react-redux";
import { playAudio } from "../../store/slices/audioPlayerSlice";
import { Sounds } from "../../constants/Sounds";
import { Routes } from "../../constants/Routes";
import { setGameSettings } from "../../store/slices/settingsSlice";
import { AppDispatch } from "../../store";
import { startGameThunk } from "../../store/slices/gameSlice";
import { categoriesSelector, settingsSelector } from "../../store/selectors";

const OptionsPartial = () => {
  const dispatch: AppDispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const categories = useSelector(categoriesSelector);

  const [numberOfQuestions, setNumberOfQuestions] = useState(settings.questionCount);
  const [category, setCategory] = useState<string | undefined>(settings.category);
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>(settings.difficulty);
  const [type, setType] = useState<QuestionType | undefined>(settings.type);
  const [time, setTime] = useState<number>(settings.timeLimit ?? 1);

  const numberChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumberOfQuestions(Number.parseInt(e.target.value));
  };

  const categoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
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

  const scream = () => {
    dispatch(playAudio(Sounds.Scream));
    return true;
  };

  const startGameValidate = () => {
    dispatch(
      setGameSettings({
        questionCount: numberOfQuestions ?? 5,
        timeLimit: time,
        type: type,
        category: category,
        difficulty: difficulty,
      })
    );

    dispatch(startGameThunk());

    return true;
  };

  return (
    <div className="wrapper">
      <DescriptiveSelectList
        onChange={numberChanged}
        value={numberOfQuestions.toString()}
        id={"questions"}
        label={"Number of Questions"}
        optionValues={QuestionCounts}
      />
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
          page={Routes.Quiz}
          beforeChange={startGameValidate}
        />
        <ChangePageButton
          text={"See my statistics"}
          page={Routes.Statistics}
          beforeChange={scream}
        />
      </span>
    </div>
  );
};

export default OptionsPartial;
