import React, { useContext } from 'react';
import { StatsTrackerContext } from '/providers/StatsTrackerProvider';

const StatsWidget = () => {
  const { stats } = useContext(StatsTrackerContext);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-2 rounded-lg text-white font-bold border-[1px] border-white shadow-xl">
      Score: {stats}
    </div>
  );
};

export default StatsWidget;
