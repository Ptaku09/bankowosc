import React from 'react';
import StatsWidget from '/components/StatsWidget';
import ShowCorrectlyAnsweredToggle from '/components/ShowCorrectlyAnsweredToggle';

const WidgetBar = () => {
  return (
    <div className="w-full md:w-[500px] text-center fixed bottom-4 left-1/2 -translate-x-1/2 py-2 rounded-lg text-white font-bold flex justify-around">
      <StatsWidget />
      <ShowCorrectlyAnsweredToggle />
    </div>
  );
};

export default WidgetBar;
