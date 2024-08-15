import {
  createContext,
  PropsWithChildren,
  useState,
  FC
} from "react";
import { Category, Difficulty, QuestionType } from "./Question";

const defaultOptions = {
  questionCount: 5,
  timeLimit: 1,
  category: undefined,
  difficulty: undefined,
  type: undefined,
};

const defaultGame = {
  page: 0,
  setPage: () => {},
  options: defaultOptions,
  setGameOptions: () => {},
};

export const GameContext = createContext<Game>(defaultGame);

export const GameContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [page, setPage] = useState(0);
  const [gameOptions, setGameOptions] = useState<GameOptions>(defaultOptions);

  return (
    <GameContext.Provider
      value={{
        page: page,
        setPage: setPage,
        options: gameOptions,
        setGameOptions: setGameOptions,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export interface Game {
  page: number;
  setPage: (p: number) => void;
  options: GameOptions;
  setGameOptions: (p: GameOptions) => void;
}

export interface GameOptions {
  questionCount: number;
  timeLimit: number;
  category: Category | undefined;
  difficulty: Difficulty | undefined;
  type: QuestionType | undefined;
}

export default GameContextProvider;
