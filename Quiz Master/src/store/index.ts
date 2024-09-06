import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import audioPlayerReducer from "./slices/audioPlayerSlice";
import settingsReducer from "./slices/settingsSlice";
import gameReducer from "./slices/gameSlice";
import categoriesReducer from "./slices/categoriesSlice";
import statisticsReducer from "./slices/statisticsSlice";

const statisticsPersistConfig = {
  key: 'statistics',
  storage,
};

const persistedStatisticsReducer = persistReducer(statisticsPersistConfig, statisticsReducer);

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    settings: settingsReducer,
    game: gameReducer,
    categories: categoriesReducer,
    statistics: persistedStatisticsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
    },
  }),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
