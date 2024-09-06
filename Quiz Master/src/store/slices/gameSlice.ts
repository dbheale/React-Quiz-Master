import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Answer, Game } from "../../types/Game";
import { RootState } from "..";
import { Question } from "../../types/Question";
import { ActiveQuestion } from "../../types/ActiveQuestion";
import { playAudio, Sounds } from "./audioPlayerSlice";

const initialState: Game = {
  answers: new Array(),
  loading: true
};

type response = {
  response_code: number;
  results: Array<responseQuestion>
}

type responseQuestion = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

const shuffleArray = (array: any[]) => {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const startGameThunk = createAsyncThunk<
  void,
  void,
  { state: RootState }
>("game/startGameThunk", async (_, { dispatch, getState }) => {

  const settings = getState().settings;
  
  let url = `https://opentdb.com/api.php?amount=${settings.questionCount}`

  if (settings.type) {
    url = url.concat(`&type=${settings.type}`)
  }

  if (settings.difficulty) {
    url = url.concat(`&difficulty=${settings.difficulty}`)
  }

  if (settings.category) {
    url = url.concat(`&category=${settings.category}`)
  }

  const result = await fetch(url)
  const data:response = await result.json()

  if (data && 'results' in data) {
    const questions = data.results.map((r, index) => ({ 
      id: index,
      category: r.category,
      difficulty: r.difficulty,
      type: r.type,
      question: r.question,
      answer: r.correct_answer,
      options: shuffleArray([...r.incorrect_answers, r.correct_answer]) }));

    dispatch(startGame(questions));
  }
});

// Thunk for answering a question
export const answerQuestionThunk = createAsyncThunk<
  void,
  string,
  { state: RootState }
>("game/answerQuestionThunk", async (answer, { dispatch, getState }) => {
  const state = getState().game;

  console.log("Question has been answered.", answer);

  if (
    state.activeQuestion &&
    state.questions
  ) {
    const currentIndex = state.activeQuestion.id;
    const isCorrect = answer === state.activeQuestion?.answer;
    const audio = isCorrect ? Sounds.Correct : Sounds.Wrong;
    const newAnswers = [
      ...state.answers.slice(0, currentIndex),
      {
        questionId: state.activeQuestion.id,
        correct: isCorrect,
        value: answer,
      },
      ...state.answers.slice(currentIndex + 1),
    ];
    console.log("Answers: ", newAnswers);

    dispatch(updateAnswers(newAnswers));

    dispatch(playAudio(audio));
  }
});

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<Question[]>) => {
      state.answers = new Array<Answer | undefined>(
        action.payload.length
      ).fill(undefined);
      state.questions = action.payload;
      state.activeQuestion = action.payload[0];
    },
    updateAnswers: (
      state,
      action: PayloadAction<Array<Answer | undefined>>
    ) => {
      state.answers = action.payload;
    },
    updateActiveQuestion: (state, action: PayloadAction<Question>) => {
      state.activeQuestion = action.payload;
    },
    clearQuestions: (state) => {
      state.activeQuestion = undefined;
      state.questions = undefined;
      state.answers = new Array();
    }
  },
  extraReducers: (builder) => {
    builder.addCase(startGameThunk.fulfilled, (state) => {
      state.loading = false;
      console.log("Game started");
    });
    builder.addCase(startGameThunk.pending, (state) => {
      state.loading = true;
      console.log("Game starting");
    });
    builder.addCase(answerQuestionThunk.fulfilled, () => {
      console.log("Question answered");
    });

    builder.addCase(answerQuestionThunk.pending, () => {
      console.log("Question is being answered...");
    });
    builder.addCase(answerQuestionThunk.rejected, (_, action) => {
      console.log("Answer submission failed", action.error.message);
    });
  },
});

export const { startGame, updateAnswers, updateActiveQuestion, clearQuestions } =
  gameSlice.actions;
export default gameSlice.reducer;
