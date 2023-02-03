import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HideCorrectlyAnsweredContext } from '/providers/HideCorrectlyAnsweredProvider';

const HideCorrectlyAnsweredToggle = () => {
  const { register, watch } = useForm();
  const watchHideCaq = watch('hide-caq', true);
  const { setStatus } = useContext(HideCorrectlyAnsweredContext);

  useEffect(() => {
    watchHideCaq ? setStatus(true) : setStatus(false);
  }, [setStatus, watchHideCaq]);

  return (
    <div className="w-auto text-center py-2 px-3 bg-stone-700 rounded-lg text-white border-[1px] border-white font-bold flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" {...register('hide-caq')} defaultChecked />
        <div className="w-11 h-6 bg-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        <p className="ml-2">ukryj zal.</p>
      </label>
    </div>
  );
};

export default HideCorrectlyAnsweredToggle;
