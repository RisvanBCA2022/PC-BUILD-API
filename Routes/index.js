const express = require('express');
const cpuRoutes = require('./allroutes');

const router = express.Router();

router.use('/api', cpuRoutes);

module.exports = router;
