type Question = {
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
};

export default Question;
