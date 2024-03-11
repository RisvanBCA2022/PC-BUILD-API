const CPU = require('../Model/cpuSchema');

exports.getAllCPUs = async (req, res) => {
  try {
    const cpus = await CPU.find();
    const cpuCount = await CPU.countDocuments();
    res.json({cpus,count:cpuCount});
  } catch (error) {
    console.error('Error fetching CPUs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.insertManyCPUs = async (req, res) => {
    try {
      const cpusData = req.body; 
      const insertedCPUs = await CPU.insertMany(cpusData);
      res.json({ message: 'CPUs inserted successfully', insertedCPUs });
    } catch (error) {
      console.error('Error inserting CPUs:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };