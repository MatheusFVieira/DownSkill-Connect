import React from 'react';

function ProfileCard({ profile, onClick, isDarkMode }) {
  const skillsToShow = profile.habilidadesTecnicas.slice(0, 3);

  return (
    <div 
      onClick={onClick} 
      className={`p-6 rounded-lg shadow-lg border cursor-pointer hover:shadow-xl transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 bg-opacity-50 backdrop-blur-sm border-gray-700 hover:bg-gray-700'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={profile.foto} 
          alt={`Foto de ${profile.nome}`}
          className={`w-16 h-16 rounded-full border-2 object-cover ${
            isDarkMode ? 'border-gray-600' : 'border-gray-200'
          }`} 
        />
        <div>
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {profile.nome}
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {profile.cargo}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skillsToShow.map((skill) => (
          <span 
            key={skill} 
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              isDarkMode
                ? 'bg-blue-600 bg-opacity-30 text-blue-300'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;