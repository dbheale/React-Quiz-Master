import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
