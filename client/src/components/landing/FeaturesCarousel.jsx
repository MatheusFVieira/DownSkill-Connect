import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Automação de Tarefas",
    description: "Automatize processos lineares como emissão de notas fiscais, controle de estoque e compra de matéria prima.",
    icon: 'AutoIcon'
  },
  {
    title: "IA como Assistente",
    description: "Um modelo de IA treinado para sua indústria, que age como um parceiro, aconselhando as melhores decisões para o seu negócio.",
    icon: 'AIIcon'
  },
  {
    title: "Relatórios e Aprendizado",
    description: "Receba relatórios claros que explicam o 'porquê' das coisas, ajudando você a aprender administração na prática.",
    icon: 'ReportIcon'
  },
  {
    title: "Ferramentas Específicas",
    description: "Funções únicas para cada comércio, como a cotação automática de peças para uma indústria de usinagem.",
    icon: 'ToolIcon'
  }
];

function FeaturesCarousel({ isDarkMode }) {
  
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Funcionalidades Principais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.title} 
            feature={feature} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturesCarousel;