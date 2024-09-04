import { OptionValue } from "../components/DescriptiveSelectList";

export const difficulties: Array<OptionValue> = [
  {
    label: "Any",
    value: undefined,
    description: undefined,
  },
  {
    label: "Easy",
    value: "easy",
    description: "Oh come on, you really need the easiest setting?",
  },
  {
    label: "Medium",
    value: "medium",
    description: "You should know these...",
  },
  {
    label: "Hard",
    value: "hard",
    description: "I hope you know your stuff.",
  }
];

export const types: Array<OptionValue> = [
  {
    label: "Any",
    value: undefined,
    description: undefined,
  },
  {
    label: "Multiple Choice",
    value: "multiple",
    description: "Choose one of 4 possible answers.",
  },
  {
    label: "True/False",
    value: "boolean",
    description: "It's either true or false!",
  },
];

export const times: Array<OptionValue> = [
  {
    label: "Any",
    value: undefined,
    description: undefined,
  },
  {
    label: "1m",
    value: 1,
    description: "You have 1 minute to answer the questions.",
  },
  {
    label: "2m",
    value: 2,
    description: "You have 2 minutes to answer the questions.",
  },
  {
    label: "5m",
    value: 5,
    description: "You have 5 minutes to answer the questions.",
  },
];

