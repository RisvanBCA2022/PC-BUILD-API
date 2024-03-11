const Storage = require('../Model/storageSchema');

exports.getAllStorage = async (req, res) => {
  try {
    const storage = await Storage.find();
    res.json(storage);
  } catch (error) {
    console.error('Error fetching storage:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
