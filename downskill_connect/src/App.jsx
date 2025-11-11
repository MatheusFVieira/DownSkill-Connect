import { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Header from './components/Header';
import ProfileModal from './components/ProfileModal';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setProfiles(data);
        setFilteredProfiles(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);


  // Função para ligar/desligar o Dark Mode 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8 transition-colors duration-300">
      
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> {/*  */}

      <ProfileList profiles={filteredProfiles} onProfileClick={handleProfileClick} />

      <ProfileModal 
        profile={selectedProfile} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;