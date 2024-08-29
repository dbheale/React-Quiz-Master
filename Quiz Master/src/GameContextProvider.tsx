import { createContext, PropsWithChildren, useState, FC } from "react";
import { Game } from "./types/Game";
import { GameOptions } from "./types/GameOptions";
import { ActiveQuestion } from "./types/ActiveQuestion";
import { Questions } from "./types/QuestionData";
import { Question } from "./types/Question";

const defaultOptions = {
  questionCount: 5,
  timeLimit: 1,
};

const defaultGame = {
  options: defaultOptions,
  activeQuestion: { question: undefined, number: undefined },
  reset: () => {},
  setGameOptions: () => {},
  nextQuestion: () => {},
  setAnswer: (_: number, __: boolean) => {},
  getResults: () => 0,
};

export const GameContext = createContext<Game>(defaultGame);

const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [answers, setAnswers] = useState<boolean[]>(new Array<boolean>());

  const [gameOptions, setGameOptions] = useState<GameOptions>(
    defaultGame.options
  );

  const [questionSet, setQuestions] = useState<Question[]>(
    new Array<Question>()
  );

  const [activeQuestion,setActiveQuestion] = useState<ActiveQuestion>(
    defaultGame.activeQuestion
  );

  const resetQuestions = (options: GameOptions) => {
    const questions = Questions.filter(
      (f) => f.category === options.category &&
        f.difficulty === options.difficulty &&
        f.type === options.type
    );
  
    // randomize it
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  
    questions.length = options.questionCount;
  
    setQuestions(questions);

    setActiveQuestion({ question: questions[0], number: 1 });
  }

  const setOptions = (options: GameOptions) => {
    setGameOptions(options);

    resetQuestions(options);
  };

  const incrementQuestion = (current: ActiveQuestion | undefined) => {
    if (current?.number !== undefined) {
      return {
        question: questionSet[current.number],
        number: current.number + 1,
      };
    }
    return { question: questionSet[0], number: 1 };
  };

  const setAnswer = (number: number, answer: boolean) => {
    answers[number - 1] = answer;
    setAnswers(answers);
  };

  return (
    <GameContext.Provider
      value={{
        options: gameOptions,
        setGameOptions: setOptions,
        nextQuestion: () => setActiveQuestion(incrementQuestion),
        reset: () => setActiveQuestion(incrementQuestion(undefined)),
        setAnswer: setAnswer,
        getResults: () => answers.filter((f) => f === true).length,
        activeQuestion: activeQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;