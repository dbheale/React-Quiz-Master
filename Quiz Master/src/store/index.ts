import { configureStore } from "@reduxjs/toolkit";
import audioPlayerReducer from "./slices/audioPlayerSlice";
import settingsReducer from "./slices/settingsSlice";
import gameReducer from "./slices/gameSlice";
import categoriesReducer from "./slices/categoriesSlice";


export const store = configureStore({
    reducer: {
        audioPlayer: audioPlayerReducer,
        settings: settingsReducer,
        game: gameReducer,
        categories: categoriesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store