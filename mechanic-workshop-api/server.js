// mechanic-workshop-api/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');
const defectRoutes = require('./routes/defectRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);  // Rota de carros
app.use('/api/defects', defectRoutes); // Rota de defeitos

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro ao conectar com MongoDB:', err));

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


