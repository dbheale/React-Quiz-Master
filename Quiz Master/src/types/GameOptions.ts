import { Category, Difficulty, QuestionType } from "./Question";


export type GameOptions = {
  questionCount: number;
  timeLimit: number;
  category?: Category;
  difficulty?: Difficulty;
  type?: QuestionType;
}
