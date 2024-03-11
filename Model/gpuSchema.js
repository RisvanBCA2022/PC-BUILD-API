const mongoose = require('mongoose');


const gpuSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    imageUrl: { type: String, required: true },

    memory: { type: Number, required: true },
    coreClock: { type: Number, required: true },
    boostClock: { type: Number, required: true },
    TDP: { type: Number, required: true },
    price: { type: Number, required: true },
  });

  const GPU = mongoose.model('GPU', gpuSchema);

  module.exports ={GPU}
