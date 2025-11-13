import { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Header from './components/Header';
import ProfileModal from './components/ProfileModal';
import SearchBar from './components/SearchBar';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const [selectedProfile, setSelectedProfile] = useState(null);

  const [filters, setFilters] = useState({
    area: '',
    localizacao: '',
    tecnologia: '',
  });

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
    let tempProfiles = [...profiles]; 

    if (filters.area) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.area.toLowerCase().includes(filters.area.toLowerCase())
      );
    }
    if (filters.localizacao) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.localizacao.toLowerCase().includes(filters.localizacao.toLowerCase())
      );
    }
    if (filters.tecnologia) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.habilidadesTecnicas.some((skill) =>
          skill.toLowerCase().includes(filters.tecnologia.toLowerCase())
        )
      );
    }
    setFilteredProfiles(tempProfiles);
  }, [filters, profiles]); 

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]); 

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleProfileClick = (profile) => setSelectedProfile(profile);
  const handleCloseModal = () => setSelectedProfile(null);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return (
    <div 
      className={`min-h-screen p-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <SearchBar 
        handleFilterChange={handleFilterChange} 
        isDarkMode={isDarkMode} 
      />

      <ProfileList 
        profiles={filteredProfiles} 
        onProfileClick={handleProfileClick}
        isDarkMode={isDarkMode}
      />

      <ProfileModal 
        profile={selectedProfile} 
        onClose={handleCloseModal} 
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;