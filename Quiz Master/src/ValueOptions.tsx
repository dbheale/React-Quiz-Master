import { OptionValue } from "./DescriptiveSelectList";

export const categories: Array<OptionValue> = [
  {
    label: undefined,
    value: undefined,
    description: undefined,
  },
  {
    label: "Programming Languages",
    value: "pl",
    description: "Questions about syntax, features, and uses of languages like Python, Java, C++, and JavaScript.",
  },
  {
    label: "Data Structures and Algorithms",
    value: "dsa",
    description: "Focused on concepts like arrays, linked lists, trees, sorting algorithms, and complexity analysis.",
  },
  {
    label: "Web Development",
    value: "wd",
    description: "Topics include HTML, CSS, JavaScript, front-end frameworks, and web protocols.",
  },
];

export const difficulties: Array<OptionValue> = [
  {
    label: undefined,
    value: undefined,
    description: undefined,
  },
  {
    label: "Easy",
    value: "e",
    description: "Oh come on, you really need the easiest setting?",
  },
  {
    label: "Medium",
    value: "m",
    description: "You should know these...",
  },
  {
    label: "Hard",
    value: "h",
    description: "I hope you know your stuff.",
  }
];

export const types: Array<OptionValue> = [
  {
    label: undefined,
    value: undefined,
    description: undefined,
  },
  {
    label: "Multiple Choice",
    value: "mc",
    description: "Choose one of 4 possible answers.",
  },
  {
    label: "True/False",
    value: "tf",
    description: "It's either true or false!",
  },
];

export const times: Array<OptionValue> = [
  {
    label: undefined,
    value: undefined,
    description: undefined,
  },
  {
    label: "1m",
    value: 1,
    description: "You have 1 minute for every question.",
  },
  {
    label: "2m",
    value: 2,
    description: "You have 2 minutes for every question.",
  },
  {
    label: "5m",
    value: 5,
    description: "You have 5 minutes for every question.",
  },
];

