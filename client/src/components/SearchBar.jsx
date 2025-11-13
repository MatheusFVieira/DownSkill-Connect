import React from 'react';

function SearchBar({ handleFilterChange, isDarkMode }) {
  
  const onChange = (e) => {
    const { name, value } = e.target;
    handleFilterChange(name, value);
  };

  return (
    <nav className={`p-4 mb-6 rounded-lg shadow-md transition-colors ${
      isDarkMode
        ? 'bg-gray-800'
        : 'bg-white border border-gray-200'
    }`}>
      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          name="area"
          placeholder="Filtrar por Área (ex: Logística)"
          className={`flex-1 p-2 rounded placeholder-gray-400 transition-colors ${
            isDarkMode
              ? 'bg-gray-700 text-white border-transparent'
              : 'bg-gray-100 text-gray-900 border border-gray-300'
          }`}
          onChange={onChange}
        />

        <input
          type="text"
          name="localizacao"
          placeholder="Filtrar por Cidade (ex: São Paulo/SP)"
          className={`flex-1 p-2 rounded placeholder-gray-400 transition-colors ${
            isDarkMode
              ? 'bg-gray-700 text-white border-transparent'
              : 'bg-gray-100 text-gray-900 border border-gray-300'
          }`}
          onChange={onChange}
        />

        <input
          type="text"
          name="tecnologia"
          placeholder="Filtrar por Tecnologia (ex: React)"
          className={`flex-1 p-2 rounded placeholder-gray-400 transition-colors ${
            isDarkMode
              ? 'bg-gray-700 text-white border-transparent'
              : 'bg-gray-100 text-gray-900 border border-gray-300'
          }`}
          onChange={onChange}
        />
        
      </div>
    </nav>
  );
}

export default SearchBar;