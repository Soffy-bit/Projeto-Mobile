// mechanic-workshop-api/models/defectModel.js
const mongoose = require('mongoose');

const defectSchema = mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Defect = mongoose.model('Defect', defectSchema);
module.exports = Defect;
