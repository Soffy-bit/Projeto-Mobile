// mechanic-workshop-api/controllers/carController.js
const Car = require('../models/carModel');

// Criar ou registrar um carro
const createCar = async (req, res) => {
  const { licensePlate, owner, status, defects } = req.body;

  try {
    const carExists = await Car.findOne({ licensePlate });
    if (carExists) {
      return res.status(400).json({ message: 'Carro já registrado' });
    }

    const car = new Car({
      licensePlate,
      owner,
      status,
      defects,
    });

    await car.save();
    res.status(201).json({ message: 'Carro registrado com sucesso', car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter todos os carros
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um carro por placa
const getCarByLicensePlate = async (req, res) => {
  const { licensePlate } = req.params;
  try {
    const car = await Car.findOne({ licensePlate });
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar o status do carro
const updateCarStatus = async (req, res) => {
  const { licensePlate } = req.params;
  const { status } = req.body;

  try {
    const car = await Car.findOneAndUpdate({ licensePlate }, { status }, { new: true });
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado' });
    }
    res.status(200).json({ message: 'Status do carro atualizado', car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Adicionar defeito a um carro
const addDefectToCar = async (req, res) => {
  const { licensePlate } = req.params;
  const { defectDescription } = req.body;

  try {
    const car = await Car.findOne({ licensePlate });
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado' });
    }

    car.defects.push(defectDescription);
    await car.save();
    res.status(200).json({ message: 'Defeito registrado com sucesso', car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCar, getAllCars, getCarByLicensePlate, updateCarStatus, addDefectToCar };
