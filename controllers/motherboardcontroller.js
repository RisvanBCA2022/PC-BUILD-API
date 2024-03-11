const Motherboard = require('../models/motherboardModel');

exports.getAllMotherboards = async (req, res) => {
  try {
    const motherboards = await Motherboard.find();
    res.json(motherboards);
  } catch (error) {
    console.error('Error fetching motherboards:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
