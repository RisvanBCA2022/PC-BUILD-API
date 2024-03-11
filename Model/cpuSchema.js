const mongoose = require('mongoose');

const cpuSchema = new mongoose.Schema({
    model: { type: String,},
    price: { type: Number },
    core_count: { type: Number},
    core_clock: { type: Number },
    boost_clock: { type: Number},
    tdp: { type: Number},
    graphics: { type: String },
    smt: { type: Boolean, default: false }
});

// Create a Mongoose model from the schema
const CPU = mongoose.model('CPU', cpuSchema);

module.exports = CPU;
