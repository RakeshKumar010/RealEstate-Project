import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ScrollDownButton = () => {
  const scrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-2 right-2 bg-gray-500/70 text-white p-5 rounded-full"
    >
      <FaArrowDown />
    </button>
  );
};

export default ScrollDownButton;
