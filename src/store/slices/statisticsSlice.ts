import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatisticsState } from "../../types/Statistics";
import { Difficulty, QuestionType } from "../../types/Question";
import { decode } from "html-entities";

const initialState: StatisticsState = {
  totalQuestionsAnswered: 0,
  correctAnswers: 0,
  questionsByCategory: {},
  questionsByDifficulty: {
    easy: { total: 0, correct: 0, label: "Easy" },
    medium: { total: 0, correct: 0, label: "Medium" },
    hard: { total: 0, correct: 0, label: "Hard" },
  },
  questionsByType: {
    boolean: { total: 0, correct: 0, label: "True / False" },
    multiple: { total: 0, correct: 0, label: "Multiple Choice" },
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

      state.totalQuestionsAnswered += 1;

      if (correct) {
        state.correctAnswers += 1;
      }

      if (!state.questionsByCategory[category]) {
        state.questionsByCategory[category] = { total: 0, correct: 0, label: decode(category) };
      }
      state.questionsByCategory[category].total += 1;
      if (correct) {
        state.questionsByCategory[category].correct += 1;
      }

      state.questionsByDifficulty[difficulty].total += 1;
      if (correct) {
        state.questionsByDifficulty[difficulty].correct += 1;
      }

      state.questionsByType[type].total += 1;
      if (correct) {
        state.questionsByType[type].correct += 1;
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
