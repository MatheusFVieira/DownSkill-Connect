// Em: src/components/Header.jsx (Atualizado)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Ícones ---
// (Seus ícones de Sol e Lua permanecem os mesmos)

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

// Ícone de Menu (Hamburger)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Ícone de Fechar (X) - (Consistente com o seu ProfileModal.jsx)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


function Header({ isDarkMode, toggleDarkMode }) {
  // 1. Estado para controlar o menu móvel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Classes de estilo reutilizáveis para os links
  const navLinkClass = `
    font-semibold px-3 py-2 rounded-md transition-colors text-sm
    ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}
  `;

  return (
    // Adicionamos 'relative' para posicionar o menu móvel abaixo dele
    <header className="relative mb-8">
      <div className="flex justify-between items-center">
        
        {/* 1. Logo (agora usa <Link> do React Router) */}
        <Link 
          to="/"
          className={`p-1 rounded transition-colors ${
            isDarkMode ? 'bg-transparent' : 'bg-gray-800'
          }`}
          onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar na logo
        >
          <img
            src="/img.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* 2. Navegação Principal (Desktop) */}
        {/* 'hidden' em telas pequenas, 'flex' em 'md' (médias) ou maiores */}
        <nav className="hidden md:flex space-x-2">
          <Link to="/" className={navLinkClass}>
            Início
          </Link>
          <Link to="/profiles" className={navLinkClass}>
            Buscar Perfis
          </Link>
        </nav>

        {/* 3. Controles da Direita (Toggle e Hamburger) */}
        <div className="flex items-center space-x-2">
          
          {/* Botão de Dark Mode (seu código original) */}
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

          {/* Botão Hamburger (Mobile) */}
          {/* 'md:hidden' esconde este botão em telas médias ou maiores */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md md:hidden transition-colors ${
              isDarkMode
                ? 'text-gray-400 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* 4. Painel do Menu Móvel */}
      {/* Este painel aparece abaixo do header.
        Usamos 'md:hidden' para garantir que ele NUNCA apareça em desktop.
        As classes de transição dão o efeito de "abrir e fechar".
      */}
      <div
        className={`
          absolute top-full left-0 right-0 z-20 mt-2 md:hidden
          transition-all duration-300 ease-in-out transform
          ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}
          origin-top
        `}
      >
        <div className={`p-4 rounded-lg shadow-lg border ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}>
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao navegar
            >
              Início
            </Link>
            <Link 
              to="/profiles" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao navegar
            >
              Buscar Perfis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;