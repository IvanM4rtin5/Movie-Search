const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');

// GET /api/movies - Buscar todos os filmes
router.get('/movies', async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// GET /api/movies/search?q=termo - Pesquisar filmes
router.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Parâmetro de pesquisa é obrigatório' });
    }

    const movies = await movieService.searchMovies(q);

    const moviesWithMessages = movies.map(movie => {
      if (!movie.hasDetails) {
        return {
          ...movie,
          message: 'Detalhes completos não disponíveis para este filme.'
        };
      }
      return movie;
    });

    res.json(moviesWithMessages);
  } catch (error) {
    console.error('Erro na pesquisa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// GET /api/movies/:id - Buscar detalhes de um filme
router.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado.' });
    }

    if (!movie.hasDetails) {
      return res.status(200).json({
        ...movie,
        message: 'Detalhes completos não disponíveis para este filme.'
      });
    }

    res.json(movie);
  } catch (error) {
    console.error('Erro ao buscar filme:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;