import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className={`p-8 mt-24 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 DownSkilling.  Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;