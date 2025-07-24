const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movie');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', movieRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Movie Search API está funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta localhost:${PORT}`);
});