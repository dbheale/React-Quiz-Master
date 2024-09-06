import { createSlice } from '@reduxjs/toolkit';

interface AudioPlayerState {
  src: string;
  isPlaying: boolean;
}

const initialState: AudioPlayerState = {
  src: "./src/assets/scream.mp3",
  isPlaying: false,
};

const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    playAudio: (state) => {
      state.isPlaying = true;
    },
    resetAudio: (state) =>{
      state.isPlaying = false;
    }
  },
});

export const { playAudio, resetAudio } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;
