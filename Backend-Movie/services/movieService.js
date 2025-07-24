const fs = require("fs").promises
const path = require("path")

let moviesCache = null
let lastFetch = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutos em millisegundos

// Função para transformar os campos do JSON externo
function normalizeMovieData(rawSearch, rawDetails) {
  const detailsMap = new Map(rawDetails.map((d) => [d.imdbID, d]))

  return rawSearch.map((movie, idx) => {
    const detail = detailsMap.get(movie.imdbID) || {}
    return {
      id: idx + 1,
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
      genre: detail.Genre || null,
      director: detail.Director || null,
      plot: detail.Plot || null,
      hasDetails: !!detailsMap.get(movie.imdbID),
    }
  })
}

async function fetchMovieData() {
  const now = Date.now()

  if (moviesCache && now - lastFetch < CACHE_DURATION) {
    return moviesCache
  }

  const filePath = path.join(__dirname, "../data/movieData.json")
  const data = await fs.readFile(filePath, "utf-8")
  const json = JSON.parse(data)
  moviesCache = normalizeMovieData(json["search results"], json.movieDetails)
  lastFetch = now
  return moviesCache
}

// Buscar todos os filmes
async function getAllMovies() {
  return await fetchMovieData()
}

// Pesquisar filmes por termo
async function searchMovies(searchTerm) {
  const movies = await fetchMovieData()
  const term = searchTerm.toLowerCase()

  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(term) ||
      (movie.genre && movie.genre.toLowerCase().includes(term)) ||
      (movie.director && movie.director.toLowerCase().includes(term)) ||
      (movie.year && movie.year.toString().includes(term))
  )
}

// Buscar filme por ID
async function getMovieById(id) {
  const movies = await fetchMovieData()
  const movieId = parseInt(id)
  return movies.find((m) => m.id === movieId) || null
}

module.exports = {
  getAllMovies,
  searchMovies,
  getMovieById,
}
