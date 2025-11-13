import React from 'react';
import FeatureCard from './FeatureCard'; // O card individual do carrossel

const features = [
  {
    title: "Automação de Tarefas",
    description: "Automatize processos lineares como emissão de notas fiscais, controle de estoque e compra de matéria prima.",
    cite: [46, 54, 55],
    icon: 'AutoIcon' // Usaremos strings para ícones por simplicidade
  },
  {
    title: "IA como Assistente",
    description: "Um modelo de IA treinado para sua indústria, que age como um parceiro, aconselhando as melhores decisões para o seu negócio.",
    cite: [52],
    icon: 'AIIcon'
  },
  {
    title: "Relatórios e Aprendizado",
    description: "Receba relatórios claros que explicam o 'porquê' das coisas, ajudando você a aprender administração na prática.",
    cite: [23, 74],
    icon: 'ReportIcon'
  },
  {
    title: "Ferramentas Específicas",
    description: "Funções únicas para cada comércio, como a cotação automática de peças para uma indústria de usinagem.",
    cite: [56, 73],
    icon: 'ToolIcon'
  }
];

function FeaturesCarousel({ isDarkMode }) {
  
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Funcionalidades Principais</h2>
      
      {/* NOTA SOBRE O CARROSSEL:
        Para fazer isso deslizar, você precisará de uma biblioteca como 'Swiper' ou 'react-slick'.
        Abaixo, estou criando o layout dos slides. A biblioteca cuidará da "mágica" do deslizamento.
        Por enquanto, eles aparecerão em um grid.
      */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.title} 
            feature={feature} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>
      
      <p className={`text-center mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        (Em uma versão futura, esta seção será um carrossel deslizante)
      </p>

    </section>
  );
}

export default FeaturesCarousel;