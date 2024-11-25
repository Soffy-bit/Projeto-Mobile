// mechanic-workshop-api/models/carModel.js
const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  licensePlate: { type: String, required: true, unique: true },
  owner: { type: String, required: true },
  status: { type: String, required: true },
  defects: [String], // Lista de defeitos
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
