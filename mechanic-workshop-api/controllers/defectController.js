// mechanic-workshop-api/controllers/defectController.js
const Defect = require('../models/defectModel');
const Car = require('../models/carModel');

// Criar defeito para um carro
const createDefect = async (req, res) => {
  const { carId, description } = req.body;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado' });
    }

    const defect = new Defect({ carId, description });
    await defect.save();
    res.status(201).json({ message: 'Defeito registrado com sucesso', defect });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter defeitos de um carro específico
const getDefectsByCar = async (req, res) => {
  const { carId } = req.params;

  try {
    const defects = await Defect.find({ carId });
    if (defects.length === 0) {
      return res.status(404).json({ message: 'Nenhum defeito encontrado para este carro' });
    }
    res.status(200).json(defects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter todos os defeitos registrados
const getAllDefects = async (req, res) => {
  try {
    const defects = await Defect.find();
    res.status(200).json(defects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDefect, getDefectsByCar, getAllDefects };
