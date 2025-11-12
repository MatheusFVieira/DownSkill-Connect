// src/App.jsx
import { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Header from './components/Header';
import ProfileModal from './components/ProfileModal';
import SearchBar from './components/SearchBar'; // 1. Importar o SearchBar

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // --- (Estados do Modal e Dark Mode - deixe como estão) ---
  const [isDarkMode, setIsDarkMode] = useState(false); // (Não vai funcionar por agora)
  const [selectedProfile, setSelectedProfile] = useState(null);

  // --- 2. NOVO ESTADO para guardar os filtros ---
  const [filters, setFilters] = useState({
    area: '',
    localizacao: '',
    tecnologia: '',
  });

  // --- Efeito para buscar dados (igual) ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setProfiles(data);
        setFilteredProfiles(data); // Inicialmente, os filtrados são todos
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  // --- 3. NOVO EFEITO para aplicar os filtros ---
  // Este efeito vai rodar sempre que 'profiles' ou 'filters' mudar
  useEffect(() => {
    let tempProfiles = [...profiles]; // Começa com a lista completa

    // Aplica o filtro de Área
    if (filters.area) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.area.toLowerCase().includes(filters.area.toLowerCase())
      );
    }

    // Aplica o filtro de Localização
    if (filters.localizacao) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.localizacao.toLowerCase().includes(filters.localizacao.toLowerCase())
      );
    }

    // Aplica o filtro de Tecnologia (que é um array)
    if (filters.tecnologia) {
      tempProfiles = tempProfiles.filter((profile) =>
        profile.habilidadesTecnicas.some((skill) =>
          skill.toLowerCase().includes(filters.tecnologia.toLowerCase())
        )
      );
    }

    // Atualiza a lista que será exibida
    setFilteredProfiles(tempProfiles);

  }, [filters, profiles]); // Dependências: re-filtre se os filtros ou os perfis mudarem

  
  // --- Funções (Modal e Dark Mode - deixe como estão) ---
  const toggleDarkMode = () => {
    // setIsDarkMode(!isDarkMode); // (Não vai funcionar por agora)
    alert("O Dark Mode será implementado depois!");
  };
  const handleProfileClick = (profile) => setSelectedProfile(profile);
  const handleCloseModal = () => setSelectedProfile(null);

  // --- 4. NOVA FUNÇÃO para atualizar o estado dos filtros ---
  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return (
    // Se o seu CSS estiver com o @import, o fundo já deve estar escuro
    <div className="min-h-screen bg-gray-900 text-white p-8">
      
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* 5. Adicionar o SearchBar ao App */}
      <SearchBar handleFilterChange={handleFilterChange} />
      
      <ProfileList profiles={filteredProfiles} onProfileClick={handleProfileClick} />
      
      <ProfileModal 
        profile={selectedProfile} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;