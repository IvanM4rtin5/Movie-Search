import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const handleDetailClick = (e) => {
    if (!movie.hasDetails) {
      e.preventDefault();
      alert('Detalhes não disponíveis para este filme.');
    }
  };

  return (
    <div className={`movie-card ${!movie.hasDetails ? 'no-details' : ''}`}>
      <div className="movie-poster">
        {movie.poster ? (
          <img 
            src={movie.poster} 
            alt={`Poster do filme ${movie.title}`}
            onError={(e) => {
            e.target.onerror = null; 
            e.target.src = `https://placehold.co/300x450?text=${encodeURIComponent(movie.title)}`;
            }}
          />
        ) : (
          <div className="poster-placeholder">
            <span>🎬</span>
            <p>Poster não disponível</p>
          </div>
        )}
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        
        {movie.year && (
          <p className="movie-year">📅 {movie.year}</p>
        )}
        
        {movie.genre && (
          <p className="movie-genre">🎭 {movie.genre}</p>
        )}
        
        {movie.director && (
          <p className="movie-director">🎬 {movie.director}</p>
        )}
        
        <div className="movie-actions">
          {movie.hasDetails ? (
            <Link 
              to={`/movie/${movie.id}`} 
              className="details-button"
            >
              Ver Detalhes
            </Link>
          ) : (
            <button 
              className="details-button disabled" 
              onClick={handleDetailClick}
              disabled
            >
              Descrições Indisponíveis
            </button>
          )}
        </div>
        
        {!movie.hasDetails && (
          <div className="no-details-warning">
            ⚠️ Detalhes não disponíveis
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;