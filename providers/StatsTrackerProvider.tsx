import { createContext, ReactNode, useState } from 'react';

type AnswersContextType = {
  points: number;
  answeredQuestions: number;
  stats: string;
  incrementPoints: () => void;
  incrementAnsweredQuestions: () => void;
};

export const StatsTrackerContext = createContext<AnswersContextType>({
  points: 0,
  answeredQuestions: 0,
  stats: '0/0',
  incrementPoints: () => {},
  incrementAnsweredQuestions: () => {},
});

const StatsTrackerProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [stats, setStats] = useState('0/0');

  const incrementPoints = () => {
    setPoints((prev: number) => prev + 1);
    setStats(`${points + 1}/${answeredQuestions}`);
  };

  const incrementAnsweredQuestions = () => {
    setAnsweredQuestions((prev: number) => prev + 1);
    setStats(`${points}/${answeredQuestions + 1}`);
  };

  return (
    <StatsTrackerContext.Provider
      value={{
        points,
        answeredQuestions,
        stats,
        incrementPoints,
        incrementAnsweredQuestions,
      }}
    >
      {children}
    </StatsTrackerContext.Provider>
  );
};

export default StatsTrackerProvider;
