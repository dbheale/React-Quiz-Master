import { Difficulty, QuestionType } from "./Question";

export interface QuestionStatistic {
  category: string;
  difficulty: Difficulty;
  type: QuestionType;
  correct: boolean;
}

export interface StatisticsState {
  totalQuestionsAnswered: number;
  correctAnswers: number;
  questionsByCategory: {
    [category: string]: {
      total: number;
      correct: number;
      label: string;
    };
  };
  questionsByDifficulty: {
    easy: { total: number; correct: number; label: string };
    medium: { total: number; correct: number; label: string };
    hard: { total: number; correct: number; label: string };
  };
  questionsByType: {
    boolean: { total: number; correct: number; label: string };
    multiple: { total: number; correct: number; label: string };
  };
  questionHistory: QuestionStatistic[];
}