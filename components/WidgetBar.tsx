import React from 'react';
import StatsWidget from '/components/StatsWidget';
import HideCorrectlyAnsweredToggle from '/components/HideCorrectlyAnsweredToggle';

const WidgetBar = () => {
  return (
    <div className="w-full md:w-[500px] text-center fixed bottom-4 left-1/2 -translate-x-1/2 py-2 rounded-lg text-white font-bold flex justify-around">
      <StatsWidget />
      <HideCorrectlyAnsweredToggle />
    </div>
  );
};

export default WidgetBar;
