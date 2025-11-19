import React from 'react';
import ProfileCard from './ProfileCard';

const SearchXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 opacity-50">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

function ProfileList({ profiles, onProfileClick, isDarkMode }) {

  if (profiles.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-16 px-4 rounded-lg border border-dashed transition-colors text-center ${
        isDarkMode 
          ? 'border-gray-700 text-gray-400 bg-gray-800 bg-opacity-30' 
          : 'border-gray-300 text-gray-500 bg-gray-50'
      }`}>
        <SearchXIcon />
        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Nenhum perfil encontrado
        </h3>
        <p className="max-w-md">
          Não encontramos ninguém com esses critérios. Tente ajustar os filtros de área, localização ou tecnologia.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <ProfileCard 
          key={profile.id} 
          profile={profile} 
          onClick={() => onProfileClick(profile)} 
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

export default ProfileList;