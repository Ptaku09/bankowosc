export type Question = {
  question: string;
  image: string;
  answers: Answer[];
};

export type Answer = {
  text: string;
  isCorrect: boolean;
};
