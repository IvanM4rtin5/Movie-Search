import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="app-header">
          <h1>🎬 Movie Search</h1>
          <p>Descubra e explore filmes incríveis</p>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>Desenvolvido para o desafio de estágio de desenvolvimento de software</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;