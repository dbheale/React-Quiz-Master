export type Question = {
    id: string;
    category: Category;
    difficulty: Difficulty;
    type: QuestionType;
    question: string;
    answer: string;
    reason: string;
    options: string[];
  }
  
  export type Category = "pl" | "dsa" | "wd";
  export type Difficulty = "e" | "m" | "h";
  export type QuestionType = "mc" | "tf";