const CPU = require('../Model/cpuSchema');

exports.getAllCPUs = async (req, res) => {
  try {
    const cpus = await CPU.find();
    res.json(cpus);
  } catch (error) {
    console.error('Error fetching CPUs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
