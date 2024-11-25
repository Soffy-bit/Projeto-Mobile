// mechanic-workshop-api/routes/carRoutes.js
const express = require('express');
const {
  createCar,
  getAllCars,
  getCarByLicensePlate,
  updateCarStatus,
  addDefectToCar,
} = require('../controllers/carController');

const router = express.Router();

// Criar carro
router.post('/', createCar);

// Obter todos os carros
router.get('/', getAllCars);

// Obter carro por placa
router.get('/:licensePlate', getCarByLicensePlate);

// Atualizar status do carro
router.put('/:licensePlate/status', updateCarStatus);

// Adicionar defeito a um carro
router.post('/:licensePlate/defect', addDefectToCar);

module.exports = router;
