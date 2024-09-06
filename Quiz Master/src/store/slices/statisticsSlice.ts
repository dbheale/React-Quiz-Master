import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatisticsState } from "../../types/statistics";
import { Difficulty, QuestionType } from "../../types/Question";

const initialState: StatisticsState = {
  totalQuestionsAsked: 0,
  correctAnswers: 0,
  questionsByCategory: {},
  questionsByDifficulty: {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
  },
  questionHistory: [],
};

interface UpdateStatisticsPayload {
  category: string;
  difficulty: Difficulty;
  type: QuestionType;
  correct: boolean;
}

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    updateStatistics: (
      state,
      action: PayloadAction<UpdateStatisticsPayload>
    ) => {
      const { category, difficulty, type, correct } = action.payload;

      state.totalQuestionsAsked += 1;

      if (correct) {
        state.correctAnswers += 1;
      }

      if (!state.questionsByCategory[category]) {
        state.questionsByCategory[category] = { total: 0, correct: 0 };
      }
      state.questionsByCategory[category].total += 1;
      if (correct) {
        state.questionsByCategory[category].correct += 1;
      }

      state.questionsByDifficulty[difficulty].total += 1;
      if (correct) {
        state.questionsByDifficulty[difficulty].correct += 1;
      }

      state.questionHistory.push({
        category,
        difficulty,
        type,
        correct,
      });
    },
    resetStatistics: () => initialState,
  },
});

export const { updateStatistics, resetStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
