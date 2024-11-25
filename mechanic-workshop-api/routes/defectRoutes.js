// mechanic-workshop-api/routes/defectRoutes.js
const express = require('express');
const { createDefect, getDefectsByCar, getAllDefects } = require('../controllers/defectController');

const router = express.Router();

// Criar defeito para carro
router.post('/', createDefect);

// Obter defeitos de um carro específico
router.get('/:carId', getDefectsByCar);

// Obter todos os defeitos
router.get('/', getAllDefects);

module.exports = router;
