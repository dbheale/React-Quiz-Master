import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameOptions } from "../../types/GameOptions";

const initialState: GameOptions = {
  questionCount: 5,
  timeLimit: 1,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGameSettings: (state, action: PayloadAction<GameOptions>) => {
      state.category = action.payload.category;
      state.difficulty = action.payload.difficulty;
      state.questionCount = action.payload.questionCount;
      state.timeLimit = action.payload.timeLimit;
      state.type = action.payload.type;
    },
    clearGameSettings: () => initialState,
  },
});

export const { setGameSettings, clearGameSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
