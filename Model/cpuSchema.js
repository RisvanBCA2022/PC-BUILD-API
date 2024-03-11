const mongoose = require('mongoose');

const cpuSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cores: { type: Number, required: true },
  threads: { type: Number, required: true },
  baseClock: { type: Number, required: true },
  boostClock: { type: Number, required: true },
  cache: { type: String },
  TDP: { type: Number, required: true },
  price: { type: Number, required: true },
});
const CPU = mongoose.model('CPU', cpuSchema);

module.exports={CPU}