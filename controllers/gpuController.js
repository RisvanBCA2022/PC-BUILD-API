const GPU = require('../Model/gpuSchema');

exports.getAllGPUs = async (req, res) => {
  try {
    const gpus = await GPU.find();
    res.json(gpus);
  } catch (error) {
    console.error('Error fetching GPUs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
