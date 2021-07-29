const express = require('express');
let router = express.Router();
const {addUnidad,addMilitar,añadirVehiculo,getUnidades} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)
router.patch('/unidad',añadirVehiculo)
router.get('/unidad',getUnidades)


module.exports =router