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

exports.insertManyGPUs = async (req, res) => {
  try {
    const gpusData = req.body; // Assuming you're sending an array of GPU data in the request body
    const insertedGPUs = await GPU.insertMany(gpusData);
    res.json({ message: 'GPUs inserted successfully', insertedGPUs });
  } catch (error) {
    console.error('Error inserting GPUs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};