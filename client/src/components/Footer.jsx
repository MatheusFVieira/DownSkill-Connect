import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className={`p-8 mt-24 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Projeto DownSkilling.  Todos os direitos reservados.
        </p>
        <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Este é um projeto conceitual para a Global Solutions. [cite: 1, 28]
        </p>
      </div>
    </footer>
  );
}

export default Footer;