import { Question } from "./Question";


export type Game = {
  activeQuestion?: Question;
  questions?: Array<Question>;
  answers: Array<Answer|undefined>;
  loading: boolean;
}

export type Answer = {
  questionId: number;
  value: string;
  correct: boolean;
}
