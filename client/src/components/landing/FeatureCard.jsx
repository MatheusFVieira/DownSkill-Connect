import React from 'react';

// Ícones simples para os cards
const AutoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.023.55m0 0-4.66 2.51m16.5 0a2.25 2.25 0 0 0 1.183-1.981V5.625a2.25 2.25 0 0 0-1.183-1.981l-6.478-3.488a2.25 2.25 0 0 0-2.134 0L5.625 3.644a2.25 2.25 0 0 0-1.183 1.981v8.691M21.75 12.75a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488a2.25 2.25 0 0 1-2.134 0l-6.478-3.488a2.25 2.25 0 0 1-1.183-1.981z" />
  </svg>
);
const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 16.5V21m3.75-18v1.5m0 16.5V21m-9.346-6.852-1.06-1.06m1.06 1.06L6.854 15m2.202-2.202 1.06 1.06m-1.06-1.06 1.06-1.06m6.45 6.45-1.06 1.06m1.06-1.06 1.06 1.06m-2.202-2.202-1.06-1.06m1.06 1.06-1.06 1.06M12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5z" />
  </svg>
);
// ... (crie outros ícones se desejar) ...

const icons = {
  AutoIcon: <AutoIcon />,
  AIIcon: <AIIcon />,
  ReportIcon: <AutoIcon />, // Reutilizando
  ToolIcon: <AIIcon /> // Reutilizando
};

function FeatureCard({ feature, isDarkMode }) {
  return (
    <div className={`p-6 rounded-lg shadow-lg border h-full flex flex-col
                   transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isDarkMode
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200'
    }`}>
      <div className={`mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
        {icons[feature.icon] || <AutoIcon />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {feature.description} 
        <span className="text-xs opacity-60"> [cites: {feature.cite.join(', ')}]</span>
      </p>
    </div>
  );
}

export default FeatureCard;