import React, { useState } from 'react';
import StatsWidget from '/components/StatsWidget';
import HideCorrectlyAnsweredToggle from '/components/HideCorrectlyAnsweredToggle';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const WidgetBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={modalStyles}>
        <p className="mb-5">Czy chcesz usunąć poprawnie rozwiązane pytania z pamięci lokalnej?</p>
        <div className="w-full flex justify-between">
          <button onClick={() => setIsModalOpen(false)} className="px-3 py-1 rounded-lg bg-gray-400 text-white">
            Anuluj
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('computer-networks-caq');
              setIsModalOpen(false);
            }}
            className="px-3 py-1 rounded-lg bg-red-400 text-white"
          >
            Tak, usuwam!
          </button>
        </div>
      </Modal>

      <div className="w-full md:w-[500px] text-center fixed bottom-4 left-1/2 -translate-x-1/2 py-2 rounded-lg text-white font-bold flex justify-center gap-4">
        <StatsWidget />
        <HideCorrectlyAnsweredToggle />
        <div className="flex items-center justify-center bg-red-500 px-3 rounded-lg border-[1px] border-white">
          <button onClick={() => setIsModalOpen(true)}>🗑️</button>
        </div>
      </div>
    </>
  );
};

export default WidgetBar;
