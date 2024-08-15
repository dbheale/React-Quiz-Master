import { Category, Difficulty, QuestionType } from "./Question";

export interface GameOptions {
  questionCount: number;
  timeLimit: number;
  category: Category;
  difficulty: Difficulty;
  type: QuestionType;
}
