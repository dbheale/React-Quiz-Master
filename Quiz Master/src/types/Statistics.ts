import { Difficulty, QuestionType } from "./Question";

export interface QuestionStatistic {
  category: string; // Category of the question
  difficulty: Difficulty; // Difficulty level (easy, medium, hard)
  type: QuestionType; // Question type
  correct: boolean; // Whether the answer was correct
}

export interface StatisticsState {
  totalQuestionsAsked: number; // Total questions asked
  correctAnswers: number; // Total correct answers
  questionsByCategory: {
    // Statistics by category
    [category: string]: {
      total: number;
      correct: number;
    };
  };
  questionsByDifficulty: {
    // Statistics by difficulty level
    easy: { total: number; correct: number };
    medium: { total: number; correct: number };
    hard: { total: number; correct: number };
  };
  questionHistory: QuestionStatistic[]; // History of individual questions
}
