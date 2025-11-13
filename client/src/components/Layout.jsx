// Salve como: src/components/Layout.jsx (ou src/Layout.jsx)

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Importe seu Header

function Layout() {
  // 1. A lógica do Dark Mode agora vive aqui
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]); 

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // 2. A div principal com as classes de tema fica aqui
    <div 
      className={`min-h-screen p-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      {/* 3. O Header é renderizado aqui, uma única vez */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* 4. O <Outlet> renderiza a página da rota atual 
             (LandingPage ou ProfileSearchPage) 
             e passa o 'isDarkMode' para elas via 'context' */}
      <Outlet context={{ isDarkMode }} />
    </div>
  );
}

export default Layout;