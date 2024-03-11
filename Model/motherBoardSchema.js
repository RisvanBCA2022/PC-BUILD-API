const mongoose = require('mongoose');

const motherboardSchema = new mongoose.Schema({
  name: { type: String,},
  price: { type: Number,},
  socket: { type: String,},
  form_factor: { type: String, },
  max_memory: { type: Number,  },
  memory_slots: { type: Number, },
  color: { type: String }
});

const Motherboard = mongoose.model('Motherboard', motherboardSchema);

module.exports = Motherboard;
