import React, { useContext } from 'react';
import { StatsTrackerContext } from '/providers/StatsTrackerProvider';

const StatsWidget = () => {
  const { stats } = useContext(StatsTrackerContext);

  return (
    <div className="w-44 text-center fixed bottom-4 left-1/2 -translate-x-1/2 bg-purple-600 py-2 rounded-lg text-white font-bold border-[1px] border-white shadow-xl">
      Score: {stats}
    </div>
  );
};

export default StatsWidget;
