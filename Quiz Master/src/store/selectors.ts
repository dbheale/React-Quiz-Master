import { RootState } from ".";

export const audioSelector = (state: RootState) => state.audioPlayer;
export const audioPlayingSelector = (state: RootState) => state.audioPlayer.isPlaying;

export const gameSelector = (state: RootState) => state.game;
export const gameLoadingSelector = (state: RootState) => state.game.loading;
export const gameAnswersSelector = (state: RootState) => state.game.answers;

export const settingsSelector = (state: RootState) => state.settings;
export const settingsTimeLimitSelector = (state: RootState) => state.settings.timeLimit;
export const settingsQuestionCountSelector = (state: RootState) => state.settings.questionCount;

export const categoriesSelector = (state: RootState) => state.categories.categories;

export const statisticsSelector = (state: RootState) => state.statistics;
export const categoryStatisticsSelector = (state: RootState) => state.statistics.questionsByCategory