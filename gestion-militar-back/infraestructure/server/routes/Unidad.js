const express = require('express');
let router = express.Router();
const {addUnidad,addMilitar,añadirVehiculo} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)
router.patch('/unidad',añadirVehiculo)



module.exports =router