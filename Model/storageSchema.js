const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    capacity: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
  });
const Storage = mongoose.model('Storage', storageSchema);

module.exports={Storage}