import React from 'react';

function CTASection({ isDarkMode }) {
  return (
    <section className={`p-12 rounded-lg shadow-xl text-center ${
      isDarkMode ? 'bg-blue-800 bg-opacity-30' : 'bg-blue-50'
    }`}>
      <h2 className="text-4xl font-bold mb-4">Pronto para Simplificar seu Trabalho?</h2>
      <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Junte-se a nós na revolução do DownSkilling e traga o poder da tecnologia 
        para o seu negócio, sem a complexidade.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
        Comece Agora (Simulação)
      </button>
    </section>
  );
}

export default CTASection;