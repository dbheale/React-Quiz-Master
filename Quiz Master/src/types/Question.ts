import { OptionValue } from "../components/DescriptiveSelectList";

export type Question = {
  id: number;
  category: string;
  difficulty: string;
  type: string;
  question: string;
  answer: string;
  reason?: string;
  options: string[];
};

export type Difficulty = "easy" | "medium" | "hard";
export type QuestionType = "multiple" | "boolean";

export const QuestionCounts: OptionValue[] = Array.from(
  { length: 11 },
  (_, index) => index + 5
).map<OptionValue>((v) => ({
  value: v,
  label: v.toString(),
  description: `You'll have ${v} questions to answer`,
}));