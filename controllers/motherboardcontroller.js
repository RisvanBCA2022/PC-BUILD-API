const Motherboard = require('../Model/motherBoardSchema');

exports.getAllMotherboards = async (req, res) => {
  try {
    const motherboards = await Motherboard.find();
    res.json(motherboards);
  } catch (error) {
    console.error('Error fetching motherboards:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.insertManyMotherboards = async (req, res) => {
    try {
      const motherboardsData = req.body;
      const insertedMotherboards = await Motherboard.insertMany(motherboardsData);
      res.json({ message: 'Motherboards inserted successfully', insertedMotherboards });
    } catch (error) {
      console.error('Error inserting motherboards:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };