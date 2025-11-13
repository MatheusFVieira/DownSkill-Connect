import React from 'react';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);


function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center mb-8">

      <a 
        href="/"
        className={`p-1 rounded transition-colors ${
          isDarkMode ? 'bg-transparent' : 'bg-gray-800' // Fundo escuro no light-mode
        }`}
      >
        <img
          src="/img.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </a>

      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? 'text-yellow-400 bg-gray-700 hover:bg-gray-600'
            : 'text-blue-500 bg-gray-200 hover:bg-gray-300'
        }`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
}

export default Header;