import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles, onProfileClick, isDarkMode }) {
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