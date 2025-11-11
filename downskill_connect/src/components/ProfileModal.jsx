import React from 'react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

function ProfileModal({ profile, onClose }) {
  // Se não há perfil selecionado, não renderiza nada
  if (!profile) return null;

  // Função para simular ações
  const handleSimulatedAction = (message) => {
    alert(`${message} (Simulação)`);
  };

  return (
    // 1. O Fundo Escuro (Backdrop)
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      onClick={onClose} // Fecha ao clicar fora do modal
    >
      {/* 2. O Conteúdo do Modal (Card) */}
      <div 
        className="bg-gray-800 text-white w-full max-w-3xl rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche ele
      >
        {/* Cabeçalho do Modal com botão de fechar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-800">
          <h2 className="text-2xl font-bold">Perfil Detalhado</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 space-y-6">
          {/* Seção: Resumo e Foto */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={profile.foto} 
              alt={`Foto de ${profile.nome}`}
              className="w-32 h-32 rounded-full border-4 border-gray-600 object-cover flex-shrink-0" 
            />
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold">{profile.nome}</h3>
              <p className="text-lg text-blue-300">{profile.cargo}</p>
              <p className="text-sm text-gray-400 mt-1">{profile.localizacao}</p>
              <p className="mt-4 text-gray-300">{profile.resumo}</p>
            </div>
          </div>

          {/* Seção: Habilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Habilidades Técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {profile.habilidadesTecnicas.map(skill => (
                  <span key={skill} className="bg-blue-600 bg-opacity-30 text-blue-300 text-xs px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map(skill => (
                  <span key={skill} className="bg-green-600 bg-opacity-30 text-green-300 text-xs px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Adicione mais seções aqui (Experiências, Projetos) se existirem no seu db.json */}

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
              onClick={() => handleSimulatedAction(`'${profile.nome}' recomendado!`)}
            >
              Recomendar Profissional
            </button>
            <button 
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
              onClick={() => handleSimulatedAction(`Mensagem enviada para '${profile.nome}'!`)}
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;