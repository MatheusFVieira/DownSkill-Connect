// Salve como: src/pages/ProfileSearchPage.jsx
// (Recomendo criar uma pasta 'pages' para organizar)

import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; // Importe isso!
import ProfileList from '../components/ProfileList';
import ProfileModal from '../components/ProfileModal';
import SearchBar from '../components/SearchBar';
import Footer from './Footer'; 
// O Header foi removido daqui

// 1. Renomeie a função
function ProfileSearchPage() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({
    area: '',
    localizacao: '',
    tecnologia: '',
  });

  // 2. Receba o isDarkMode do nosso Layout
  const { isDarkMode } = useOutletContext(); 
  
  // O useEffect do DarkMode (localStorage) foi removido daqui

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

  // A função toggleDarkMode foi removida daqui

  const handleProfileClick = (profile) => setSelectedProfile(profile);
  const handleCloseModal = () => setSelectedProfile(null);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  // 3. Remova a div principal e o Header do return
  return (
    <>
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
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default ProfileSearchPage;