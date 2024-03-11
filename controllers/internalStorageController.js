const Storage = require('../Model/internalStorageSchema');

exports.getAllStorage = async (req, res) => {
  try {
    const storage = await Storage.find();
    res.json(storage);
  } catch (error) {
    console.error('Error fetching storage:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.insertManyStorage = async (req, res) => {
  try {
    const storageData = req.body;
    const insertedStorage = await Storage.insertMany(storageData);
    res.json({ message: 'Storage devices inserted successfully', insertedStorage });
  } catch (error) {
    console.error('Error inserting storage devices:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
