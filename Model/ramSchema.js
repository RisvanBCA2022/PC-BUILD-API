const mongoose = require('mongoose');

const ramSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    imageUrl: { type: String, required: true },

    capacity: { type: Number, required: true },
    speed: { type: Number, required: true },
    latency: { type: Number, required: true },
    price: { type: Number, required: true },
  });

  const RAM = mongoose.model('RAM', ramSchema);
module.exports={RAM}