const mongoose = require('mongoose');

const powerSupplySchema = new mongoose.Schema({
    name: { type: String,},
    price: { type: Number,},
    type: { type: String, },
    efficiency: { type: String,},
    wattage: { type: Number, },
    modular: { type: String,},
    color: { type: String }
});

const PowerSupply = mongoose.model('PowerSupply', powerSupplySchema);

module.exports = PowerSupply;
