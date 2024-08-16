import {
  createContext,
  PropsWithChildren,
  useState,
  FC
} from "react";
import { Category, Difficulty, QuestionType, Question, Questions } from "./Question";

const defaultOptions = {
  questionCount: 5,
  timeLimit: 1,
  category: undefined,
  difficulty: undefined,
  type: undefined,
};

type ActiveQuestion = {question:Question | undefined, number: number|undefined};

const defaultGame = {
  page: 0,
  setPage: () => {},
  options: defaultOptions,
  setGameOptions: () => {},
  nextQuestion: () => {},
  questions: new Array<Question>(),
  activeQuestion: {question:undefined, number: undefined}
};

export const GameContext = createContext<Game>(defaultGame);

export const GameContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [page, setPage] = useState(defaultGame.page);
  const [gameOptions, setGameOptions] = useState<GameOptions>(defaultGame.options);
  const [questionSet, setQuestions] = useState<Question[]>(defaultGame.questions);
  const [activeQuestion, setActiveQuestion] = useState<ActiveQuestion>(defaultGame.activeQuestion);

  const setOptions = (options: GameOptions) => {

    const questions = Questions.filter(
      (f) =>
        f.category === options.category &&
        f.difficulty === options.difficulty &&
        f.type === options.type
    );
  
    // randomize it
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  
    questions.length = options.questionCount;

    setActiveQuestion({question: questions[0], number: 1});

    setGameOptions(options);

    setQuestions(questions);
  }

  const incrementQuestion = (current: ActiveQuestion | undefined) => {
    if(current?.number !== undefined){
      return { question: questionSet[current.number], number: current.number + 1 }; 
    }
    return { question: questionSet[0], number: 1 }; 
  };


  return (
    <GameContext.Provider
      value={{
        page: page,
        setPage: setPage,
        options: gameOptions,
        setGameOptions: setOptions,
        questions: questionSet,
        nextQuestion: () => setActiveQuestion(incrementQuestion),
        activeQuestion: activeQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );

};

export interface Game {
  page: number;
  setPage: (p: number) => void;
  nextQuestion: () => void;
  options: GameOptions;
  setGameOptions: (p: GameOptions) => void;
  questions: Question[];
  activeQuestion: ActiveQuestion | undefined;
}

export interface GameOptions {
  questionCount: number;
  timeLimit: number;
  category: Category | undefined;
  difficulty: Difficulty | undefined;
  type: QuestionType | undefined;
}

export default GameContextProvider;
