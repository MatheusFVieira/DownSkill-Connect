import React from 'react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

function ProfileModal({ profile, onClose, isDarkMode }) {
  if (!profile) return null;

  const handleSimulatedAction = (message) => {
    alert(`${message} (Simulação)`);
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all backdrop-blur-sm ${
        isDarkMode
          ? 'bg-gray-900 bg-opacity-50'
          : 'bg-white bg-opacity-30'
      }`}
      onClick={onClose} 
    >

      <div 
        className={`w-full max-w-3xl rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto ${
          isDarkMode
            ? 'bg-gray-800 text-white'
            : 'bg-white text-gray-900'
        }`}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className={`flex justify-between items-center p-4 border-b sticky top-0 z-10 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold">Perfil Detalhado</h2>
          <button onClick={onClose} className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}>
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 space-y-6">

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={profile.foto} 
              alt={`Foto de ${profile.nome}`}
              className={`w-32 h-32 rounded-full border-4 object-cover flex-shrink-0 ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`} 
            />
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold">{profile.nome}</h3>
              <p className={`text-lg ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{profile.cargo}</p>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{profile.localizacao}</p>
              <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{profile.resumo}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold text-lg mb-2 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Habilidades Técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {profile.habilidadesTecnicas.map(skill => (
                  <span key={skill} className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'bg-blue-600 bg-opacity-30 text-blue-300'
                      : 'bg-blue-100 text-blue-800'
                  }`}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`font-semibold text-lg mb-2 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map(skill => (
                  <span key={skill} className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'bg-green-600 bg-opacity-30 text-green-300'
                      : 'bg-green-100 text-green-800'
                  }`}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold text-lg mb-3 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Experiências</h4>
            <div className="space-y-4">
              {profile.experiencias.map((exp, index) => (
                <div key={index}>
                  <h5 className="font-semibold">{exp.cargo}</h5>
                  <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.empresa}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.inicio} - {exp.fim}</p>
                  <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-semibold text-lg mb-3 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Projetos</h4>
            <div className="space-y-4">
              {profile.projetos.map((proj, index) => (
                <div key={index}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{proj.titulo}</a>
                  <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{proj.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-semibold text-lg mb-3 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Formação</h4>
            <div className="space-y-2">
              {profile.formacao.map((form, index) => (
                <div key={index}>
                  <h5 className="font-semibold">{form.curso}</h5>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{form.instituicao} - {form.ano}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold text-lg mb-2 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Certificações</h4>
              <ul className={`list-disc list-inside text-sm space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {profile.certificacoes.map(cert => (<li key={cert}>{cert}</li>))}
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold text-lg mb-2 border-b pb-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>Idiomas</h4>
              <ul className={`list-inside text-sm space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {profile.idiomas.map(idioma => (
                  <li key={idioma.idioma}><strong>{idioma.idioma}:</strong> {idioma.nivel}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
              onClick={() => handleSimulatedAction(`'${profile.nome}' recomendado!`)}
            >
              Recomendar Profissional
            </button>
            
            <button 
              className={`font-bold py-2 px-4 rounded w-full sm:w-auto ${
                isDarkMode
                  ? 'bg-gray-600 hover:bg-gray-700 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
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