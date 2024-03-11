const mongoose = require('mongoose');

const motherboardSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    imageUrl: { type: String, required: true },

    socket: { type: String, required: true },
    chipset: { type: String, required: true },
    formFactor: { type: String, required: true },
    price: { type: Number, required: true },
  });

  const Motherboard = mongoose.model('Motherboard', motherboardSchema);

  module.exports = {Motherboard };
