import { ActiveQuestion } from "./ActiveQuestion";
import { GameOptions } from "./GameOptions";


export type Game = {
  options?: GameOptions;
  activeQuestion?: ActiveQuestion;
  reset: () => void;
  getResults: () => number;
  nextQuestion: () => void;
  setGameOptions: (p: GameOptions) => void;
  setAnswer: (number: number, correct: boolean) => void;
}
