// src/components/SearchBar.jsx
import React from 'react';

// Vamos receber 'handleFilterChange' como prop
function SearchBar({ handleFilterChange }) {
  
  // Esta função interna vai pegar o NOME e o VALOR de qualquer campo que mudar
  const onChange = (e) => {
    const { name, value } = e.target;
    handleFilterChange(name, value);
  };

  return (
    <nav className="p-4 mb-6 bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Filtro de Área */}
        <input
          type="text"
          name="area" // O 'name' é importante para sabermos qual filtro mudou
          placeholder="Filtrar por Área (ex: Logística)"
          className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          onChange={onChange}
        />
        
        {/* Filtro de Cidade */}
        <input
          type="text"
          name="localizacao" // Deve ser igual ao nome da chave no db.json
          placeholder="Filtrar por Cidade (ex: São Paulo/SP)"
          className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          onChange={onChange}
        />

        {/* Filtro de Tecnologia */}
        <input
          type="text"
          name="tecnologia" // Este vai precisar de uma lógica especial
          placeholder="Filtrar por Tecnologia (ex: React)"
          className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          onChange={onChange}
        />
        
        {/* (O ícone de busca pode ser adicionado aqui depois) */}
      </div>
    </nav>
  );
}

export default SearchBar;