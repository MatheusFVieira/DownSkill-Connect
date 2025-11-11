import React from 'react';
import ProfileCard from './ProfileCard';

// Recebe a nova prop 'onProfileClick'
function ProfileList({ profiles, onProfileClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <ProfileCard 
          key={profile.id} 
          profile={profile} 
          onClick={() => onProfileClick(profile)} // Passa a função com o perfil específico
        />
      ))}
    </div>
  );
}

export default ProfileList;