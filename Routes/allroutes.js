const express = require('express');
const router = express.Router();
const cpuController = require('../controllers/cpuController');
const gpuControler = require('../controllers/gpuController')
const ramController = require('../controllers/ramController')
const internalStorageController = require('../controllers/internalStorageController')
const motherboardController=require('../controllers/motherboardcontroller')

router.get('/cpu', cpuController.getAllCPUs);
router.get('/gpus',gpuControler.getAllGPUs );
router.get('/ram',ramController.getAllRAM)
router.get('/storage', internalStorageController.getAllStorage);
router.post('/cpus', cpuController.insertManyCPUs);
router.post('/gpus',gpuControler.insertManyGPUs)
router.get('/motherboard',motherboardController.getAllMotherboards)
router.post('/motherboards',motherboardController.insertManyMotherboards)
router.post('/rams',ramController.insertManyRAM)
router.post('/addinternalstorage',internalStorageController.insertManyStorage)







module.exports = router;
