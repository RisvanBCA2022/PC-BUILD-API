const mongoose = require('mongoose');

const gpuSchema = new mongoose.Schema({
  name: { type: String},
  price: { type: Number },
  chipset: { type: String},
  memory: { type: Number,},
  core_clock: { type: Number},
  boost_clock: { type: Number, },
  color: { type: String },
  length: { type: Number }
});

const GPU = mongoose.model('GPU', gpuSchema);

module.exports = GPU;
