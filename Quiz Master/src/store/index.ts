import { configureStore } from "@reduxjs/toolkit";
import { promptReducer } from "./slices/promptSlice";
import audioPlayerReducer from "./slices/audioPlayerSlice";


export const store = configureStore({
    reducer: {
        audioPlayer: audioPlayerReducer,
        prompt: promptReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store