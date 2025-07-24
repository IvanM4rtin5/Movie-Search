import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Configuração do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', error);
    
    if (error.code === 'ECONNABORTED') {
      throw new Error('Timeout: A requisição demorou muito para responder.');
    }
    
    if (error.response) {
      // Erro do servidor (4xx, 5xx)
      const message = error.response.data?.error || 'Erro no servidor';
      throw new Error(message);
    } else if (error.request) {
      // Erro de rede
      throw new Error('Erro de conexão. Verifique se o servidor está rodando.');
    } else {
      // Outro tipo de erro
      throw new Error('Erro inesperado na requisição.');
    }
  }
);

export const getAllMovies = async () => {
  try {
    const response = await api.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
};

export const searchMovies = async (searchTerm) => {
  try {
    const response = await api.get(`/movies/search?q=${encodeURIComponent(searchTerm)}`);
    return response.data;
  } catch (error) {
    console.error('Erro na pesquisa:', error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filme:', error);
    throw error;
  }
};

export default api;