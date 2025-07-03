import React, { useEffect, useState } from 'react';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='flex items-center'>
      {theme === 'light' ? (
        <BsToggleOff
          onClick={toggleTheme}
          className='text-3xl cursor-pointer drop-shadow transition-all duration-300 text-gray-500 hover:text-black'
        />
      ) : (
        <BsToggleOn
          onClick={toggleTheme}
          className='text-3xl cursor-pointer drop-shadow transition-all duration-300 text-green-400 hover:text-green-600'
        />
      )}
    </div>
  );
};

export default Darkmode;
