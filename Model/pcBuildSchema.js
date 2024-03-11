const mongoose = require('mongoose');

const pcBuildSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    components: {
      cpu: { type: mongoose.Schema.Types.ObjectId, ref: 'CPU' },
      gpu: { type: mongoose.Schema.Types.ObjectId, ref: 'GPU' },
      motherboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Motherboard' },
      ram: { type: mongoose.Schema.Types.ObjectId, ref: 'RAM' },
      storage: { type: mongoose.Schema.Types.ObjectId, ref: 'Storage' },
    },
    totalPrice: { type: Number, required: true },
  });
  const PCBUILD = mongoose.model('PCBUILD', ramSchema);

  module.exports={PCBUILD}
  