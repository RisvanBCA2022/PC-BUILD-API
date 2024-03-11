const mongoose = require('mongoose');

const internalStorageSchema = new mongoose.Schema({
    name: { type: String,  },
    brand: { type: String,  },
    capacity: { type: Number,  },
    imageUrl: { type: String,  },
    type: { type: String,  },
    interface: { type: String,  }, 
    price: { type: Number },
    price_per_gb: { type: Number }, 
    color: { type: String }
});

const InternalStorage = mongoose.model('InternalStorage', internalStorageSchema);

module.exports = InternalStorage;
