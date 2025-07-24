import React, { useState } from 'react';

function SearchBar({ onSearch, searchTerm, onClear }) {
  const [inputValue, setInputValue] = useState(searchTerm || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Pesquisar por título, gênero, diretor ou ano..."
            value={inputValue}
            onChange={handleInputChange}
            className="search-input"
          />
          
          <div className="search-buttons">
            <button type="submit" className="search-button">
              🔍 Pesquisar
            </button>
            
            {inputValue && (
              <button 
                type="button" 
                onClick={handleClear}
                className="clear-button"
              >
                ✕ Limpar
              </button>
            )}
          </div>
        </div>
      </form>
      
      <div className="search-tips">
        <p>💡 <strong>Dica:</strong> Você pode pesquisar por título, gênero, diretor ou ano do filme</p>
      </div>
    </div>
  );
}

export default SearchBar;