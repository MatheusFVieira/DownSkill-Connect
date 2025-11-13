// Em: src/components/LandingPage.jsx (ou src/pages/LandingPage.jsx)
// MODIFICADO

import React from 'react';
import { useOutletContext } from 'react-router-dom'; // Importe isso!
// O Header foi removido daqui
import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';
import SolutionSection from './landing/SolutionSection';
import FeaturesCarousel from './landing/FeaturesCarousel';
import ImpactSection from './landing/ImpactSection';
import CTASection from './landing/CTASection';
import Footer from './Footer'; 

function LandingPage() {
  // 1. Remova o useState e useEffect do Dark Mode
  
  // 2. Receba o isDarkMode do Layout
  const { isDarkMode } = useOutletContext();
  
  // A função toggleDarkMode foi removida

  return (
    // 3. Remova a div principal e o Header
    <>
      <main className="mt-8 space-y-24">
        {/* Passe a prop isDarkMode para os componentes filhos */}
        <HeroSection isDarkMode={isDarkMode} />
        <ProblemSection isDarkMode={isDarkMode} />
        <SolutionSection isDarkMode={isDarkMode} />
        <FeaturesCarousel isDarkMode={isDarkMode} />
        <ImpactSection isDarkMode={isDarkMode} />
        <CTASection isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default LandingPage;