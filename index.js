const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const routes =require('./Routes')
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');


require('dotenv').config()

app.use(cors())
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  app.use(bodyParser.json({ limit: '10mb' }));

  app.use(morgan('dev'));

app.use(express.json());
app.use(routes)

app.get('/', (req, res) => {
  res.send('Welcome to the PC Building API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
