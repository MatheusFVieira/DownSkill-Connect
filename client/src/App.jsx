// Em: src/App.jsx
// TOTALMENTE MODIFICADO

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage'; // Ou './pages/LandingPage'
import ProfileSearchPage from './components/ProfileSearchPage'; // Ou './pages/ProfileSearchPage'

function App() {
  return (
    <Routes>
      {/* Esta é a "Rota de Layout". 
        O componente 'Layout' será renderizado sempre.
        As rotas 'filhas' (index e /profiles) serão renderizadas 
        onde o <Outlet /> está no Layout.
      */}
      <Route path="/" element={<Layout />}>
        
        {/* A rota 'index' (ou seja, "/") renderiza a LandingPage */}
        <Route index element={<LandingPage />} />
        
        {/* A rota "/profiles" renderiza a página de busca */}
        <Route path="profiles" element={<ProfileSearchPage />} />

        {/* Você pode adicionar outras rotas aqui no futuro */}
        
      </Route>
    </Routes>
  );
}

export default App;