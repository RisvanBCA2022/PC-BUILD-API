const mongoose = require('mongoose');

const ramSchema = new mongoose.Schema({
  name: { type: String, },
  price: { type: Number,},
  speed: { type: [Number] },
  modules: { type: [Number] }, 
  price_per_gb: { type: Number }, 
  color: { type: String },
  first_word_latency: { type: Number },
  cas_latency: { type: Number }
});

const RAM = mongoose.model('RAM', ramSchema);

module.exports = RAM;
