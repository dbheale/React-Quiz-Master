import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const Sounds = {
  Scream: "./src/assets/scream.mp3",
  OneMinute: "./src/assets/one-minute-left.mp3",
  Correct: "./src/assets/correct.mp3",
  Wrong: "./src/assets/wrong.mp3",
  Start: "./src/assets/game-start.mp3",
  Summary: "./src/assets/summary.mp3",
}

interface AudioPlayerState {
  src: string;
  isPlaying: boolean;
}

const initialState: AudioPlayerState = {
  src: "",
  isPlaying: false,
};

const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    playAudio: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
      state.isPlaying = true;
    },
    resetAudio: (state) => {
      state.src = "";
      state.isPlaying = false;
    },
  },
});

export const { playAudio, resetAudio } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;
