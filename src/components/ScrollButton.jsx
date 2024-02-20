import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [isBottom, setIsBottom] = useState(false);

  const scrollPage = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <button
      onClick={scrollPage}
      className="fixed bottom-2 right-2 bg-gray-500/70 text-white p-5 rounded-full"
    >
      {isBottom ? <FaArrowUp /> : <FaArrowDown />}
    </button>
  );
};

export default ScrollButton;
