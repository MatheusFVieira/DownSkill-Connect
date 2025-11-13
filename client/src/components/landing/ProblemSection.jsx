import React from 'react';

// Um ícone simples para ilustração
const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.01" />
  </svg>
);

function ProblemSection({ isDarkMode }) {
  return (
    <section className={`p-8 rounded-lg shadow-lg ${
      isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <AlertIcon />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">O Desafio do "UpSkilling" no Brasil</h2>
          <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Muitos falam em "UpSkilling", mas a realidade brasileira é outra. 
            Aprender leva tempo, e muitas pessoas não têm esse tempo, pois estão ocupadas 
            garantindo o seu sustento. [cite: 11]
          </p>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Além disso, a educação de baixa qualidade dificulta a adoção de novas tecnologias, 
            mesmo em negócios bem-sucedidos, criando uma grande lacuna digital. [cite: 38]
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;