const mongoose = require('mongoose');

const cpuAccessorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number }, // Price can be null or omitted
    type: { type: String, required: true },
    form_factor: { type: Number, required: true }
});

const CPUAccessory = mongoose.model('CPUAccessory', cpuAccessorySchema);

module.exports = CPUAccessory;
