import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { getAllMovies, searchMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadAllMovies();
  }, []);

  const loadAllMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllMovies();
      setMovies(data);
    } catch (err) {
      setError('Erro ao carregar filmes. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      loadAllMovies();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await searchMovies(term);
      setMovies(data);
    } catch (err) {
      setError('Erro ao pesquisar filmes. Tente novamente.');
      console.error('Erro na pesquisa:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    loadAllMovies();
  };

  return (
    <div className="home-page">
      <SearchBar 
        onSearch={handleSearch} 
        searchTerm={searchTerm}
        onClear={clearSearch}
      />
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={loadAllMovies}>Tentar Novamente</button>
        </div>
      )}
      
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Carregando filmes...</p>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>
              {searchTerm ? 
                `${movies.length} filme(s) encontrado(s) para "${searchTerm}"` : 
                `${movies.length} filme(s) disponível(eis)`
              }
            </p>
          </div>
          
          {movies.length === 0 ? (
            <div className="no-results">
              <h3>Nenhum filme encontrado</h3>
              <p>Tente pesquisar por outro termo ou verifique a conexão.</p>
            </div>
          ) : (
            <MovieList movies={movies} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;