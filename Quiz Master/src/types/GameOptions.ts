import { Difficulty, QuestionType } from "./Question";


export type GameOptions = {
  questionCount: number;
  timeLimit: number;
  category?: string;
  difficulty?: Difficulty;
  type?: QuestionType;
}
