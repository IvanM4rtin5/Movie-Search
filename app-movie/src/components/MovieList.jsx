import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="no-movies">
        <h3>Nenhum filme encontrado</h3>
        <p>Tente ajustar sua pesquisa ou verifique sua conexão.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;