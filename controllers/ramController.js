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


exports.insertManyRAM = async (req, res) => {
    try {
      const ramsData = req.body; 
      const insertedRAMs = await RAM.insertMany(ramsData);
      res.json({ message: 'RAMs inserted successfully', insertedRAMs });
    } catch (error) {
      console.error('Error inserting RAMs:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };