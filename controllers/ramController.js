const RAM = require('../Model/ramSchema');

exports.getAllRAM = async (req, res) => {
  try {
    const rams = await RAM.find();
    res.json(rams);
  } catch (error) {
    console.error('Error fetching RAM:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
