import React from 'react';

// Recebe a nova prop 'onClick'
function ProfileCard({ profile, onClick }) {
  const skillsToShow = profile.habilidadesTecnicas.slice(0, 3);

  return (
    // Adicionamos o 'onClick' na div principal do card 
    // Também atualizamos as cores para funcionarem com o Dark Mode
    <div 
      onClick={onClick} // 
      className="bg-white dark:bg-gray-800 dark:bg-opacity-50 dark:backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl dark:hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <img 
          src={profile.foto} 
          alt={`Foto de ${profile.nome}`}
          className="w-16 h-16 rounded-full border-2 dark:border-gray-600 object-cover" 
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{profile.nome}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{profile.cargo}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skillsToShow.map((skill) => (
          <span 
            key={skill} 
            className="bg-blue-100 dark:bg-blue-600 dark:bg-opacity-30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;