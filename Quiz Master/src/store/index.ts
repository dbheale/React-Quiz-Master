import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import audioPlayerReducer from "./slices/audioPlayerSlice";
import settingsReducer from "./slices/settingsSlice";
import gameReducer from "./slices/gameSlice";
import categoriesReducer from "./slices/categoriesSlice";
import statisticsReducer from "./slices/statisticsSlice";

// Persist configuration for the statistics slice
const statisticsPersistConfig = {
  key: 'statistics',
  storage,
};

// Persisted reducer for statistics
const persistedStatisticsReducer = persistReducer(statisticsPersistConfig, statisticsReducer);

// Single store configuration with all reducers
export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    settings: settingsReducer,
    game: gameReducer,
    categories: categoriesReducer,
    statistics: persistedStatisticsReducer,  // Persisted statistics slice
  },
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
