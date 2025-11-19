import React from 'react';

function ImpactSection({ isDarkMode }) {
  const Card = ({ title, children }) => (
    <div className={`p-6 rounded-lg shadow-md transition-colors ${
      isDarkMode
        ? 'bg-gray-800 border border-gray-700'
        : 'bg-white border border-gray-200'
    }`}>
      <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{children}</p>
    </div>
  );

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Nosso Impacto no Futuro</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="ODS 10: Redução de Desigualdades">
          Nossa ferramenta trará mais conhecimento e poder de execução para pessoas 
          mais simples, reduzindo ativamente as desigualdades.
        </Card>
        <Card title="ODS 8 & 9: Inovação e Crescimento">
          Trazemos inovação para a indústria, aumentamos a qualidade de vida no trabalho 
          e promovemos o crescimento econômico.
        </Card>
        <Card title="ODS 4: Educação de Qualidade">
          Usuários aprendem na prática a administrar um negócio com nosso guia IA, 
          promovendo educação prática e acessível.
        </Card>
      </div>
    </section>
  );
}

export default ImpactSection;