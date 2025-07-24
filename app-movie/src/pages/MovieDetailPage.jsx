import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMovieById } from '../services/api';

function MovieDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovieDetails();
  }, [id]);

  const loadMovieDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const movieData = await getMovieById(id);
      
      if (!movieData) {
        setError('Filme não encontrado.');
        return;
      }
      
      if (!movieData.hasDetails) {
        setError('Detalhes não disponíveis para este filme.');
        return;
      }
      
      setMovie(movieData);
    } catch (err) {
      setError('Erro ao carregar detalhes do filme.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="movie-detail-page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Carregando detalhes do filme...</p>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-detail-page">
        <div className="error-container">
          <h2>❌ Ops!</h2>
          <p>{error || 'Filme não encontrado.'}</p>
          <div className="error-actions">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Voltar
            </button>
            <Link to="/" className="home-button">
              🏠 Página Inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      <div className="detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Voltar
        </button>
        <Link to="/" className="home-link">
          🏠 Página Inicial
        </Link>
      </div>

      <div className="movie-detail-container">
        <div className="movie-poster-large">
          {movie.poster ? (
            <img 
              src={movie.poster} 
              alt={`Poster do filme ${movie.title}`}
              onError={(e) => {
                e.target.onerror = null; // evita loop infinito
                e.target.src = `https://placehold.co/400x600?text=${encodeURIComponent(movie.title)}`;
              }}
            />
          ) : (
            <div className="poster-placeholder-large">
              <span>🎬</span>
              <p>Poster não disponível</p>
            </div>
          )}
        </div>

        <div className="movie-details">
          <h1 className="movie-title-large">{movie.title}</h1>
          
          <div className="movie-metadata">
            {movie.year && (
              <div className="metadata-item">
                <span className="metadata-label">📅 Ano:</span>
                <span className="metadata-value">{movie.year}</span>
              </div>
            )}
            
            {movie.genre && (
              <div className="metadata-item">
                <span className="metadata-label">🎭 Gênero:</span>
                <span className="metadata-value">{movie.genre}</span>
              </div>
            )}
            
            {movie.director && (
              <div className="metadata-item">
                <span className="metadata-label">🎬 Diretor:</span>
                <span className="metadata-value">{movie.director}</span>
              </div>
            )}
            
            {movie.rating && (
              <div className="metadata-item">
                <span className="metadata-label">⭐ Avaliação:</span>
                <span className="metadata-value">{movie.rating}/10</span>
              </div>
            )}
            
            {movie.duration && (
              <div className="metadata-item">
                <span className="metadata-label">⏱️ Duração:</span>
                <span className="metadata-value">{movie.duration} min</span>
              </div>
            )}
          </div>
          
          {movie.plot && (
            <div className="movie-plot">
              <h3>📖 Sinopse</h3>
              <p>{movie.plot}</p>
            </div>
          )}
          
          {movie.cast && movie.cast.length > 0 && (
            <div className="movie-cast">
              <h3>👥 Elenco Principal</h3>
              <div className="cast-list">
                {movie.cast.map((actor, index) => (
                  <span key={index} className="cast-member">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;