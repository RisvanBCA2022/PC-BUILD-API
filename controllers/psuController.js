
const PowerSupply = require('../Model/psuSchema');

exports.getAllPowerSupplies = async (req, res) => {
  try {
    const powerSupplies = await PowerSupply.find();
    res.json(powerSupplies);
  } catch (error) {
    console.error('Error fetching power supplies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.insertManyPowerSupplies = async (req, res) => {
    try {
      const powerSuppliesData = req.body; // Assuming you're sending an array of power supply data in the request body
      const insertedPowerSupplies = await PowerSupply.insertMany(powerSuppliesData);
      res.json({ message: 'Power supplies inserted successfully', insertedPowerSupplies });
    } catch (error) {
      console.error('Error inserting power supplies:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
