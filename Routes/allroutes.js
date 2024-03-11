const express = require('express');
const router = express.Router();
const cpuController = require('../controllers/cpuController');
const gpuControler = require('../controllers/gpuController')
const ramController = require('../controllers/ramController')
const storageController = require('../controllers/storageController')

router.get('/cpus', cpuController.getAllCPUs);
router.get('/gpus',gpuControler.getAllGPUs );
router.get('/ram',ramController.getAllRAM)
router.get('/storage', storageController.getAllStorage);






module.exports = router;
