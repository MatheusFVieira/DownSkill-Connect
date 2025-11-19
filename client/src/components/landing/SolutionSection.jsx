import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);


function SolutionSection({ isDarkMode }) {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Nossa Solução: O DownSkilling</h2>
      <p className={`max-w-3xl mx-auto text-lg mb-8 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        Nossa proposta é o oposto. Em vez de treinar pessoas para tarefas complicadas, 
        nós **simplificamos as tarefas** através de automação e tecnologia.
      </p>
      
      <div className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${
        isDarkMode 
          ? 'bg-gray-800 bg-opacity-50 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <CheckIcon />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-2">Um ERP Popular e Intuitivo</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              Criamos softwares (como um ERP) tão intuitivos que pessoas de 
              **qualquer nível de escolaridade** conseguem usar.
              Nossa ferramenta guia o usuário, automatiza tarefas repetitivas e 
              ajuda ativamente a tomar decisões para o negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;