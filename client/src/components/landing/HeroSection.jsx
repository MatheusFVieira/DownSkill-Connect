import React from 'react';

function HeroSection({ isDarkMode }) {
  return (
    <section className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Repensando o Futuro do Trabalho.
      </h1>
      <h2 className={`text-2xl md:text-3xl font-light mb-8 ${
        isDarkMode ? 'text-blue-300' : 'text-blue-600'
      }`}>
        Conheça o DownSkilling: Simplificando a complexidade. 
      </h2>
      <p className={`max-w-3xl mx-auto text-lg mb-8 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        Em vez de exigir que todos aprendam habilidades complexas (UpSkilling), 
        nós usamos a tecnologia para tornar as tarefas difíceis mais fáceis para todos. 
      </p>
    </section>
  );
}

export default HeroSection;