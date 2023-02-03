import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type CorrectlyAnsweredContextType = {
  isHidden: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
};

export const HideCorrectlyAnsweredContext = createContext<CorrectlyAnsweredContextType>({
  isHidden: true,
  setStatus: () => {},
});

const StatsTrackerProvider = ({ children }: { children: ReactNode }) => {
  const [isCorrectlyAnsweredHidden, setIsCorrectlyAnsweredHidden] = useState(true);

  return (
    <HideCorrectlyAnsweredContext.Provider
      value={{
        isHidden: isCorrectlyAnsweredHidden,
        setStatus: setIsCorrectlyAnsweredHidden,
      }}
    >
      {children}
    </HideCorrectlyAnsweredContext.Provider>
  );
};

export default StatsTrackerProvider;
