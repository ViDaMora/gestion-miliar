const express = require('express');
let router = express.Router();
<<<<<<< HEAD
const {addUnidad,addMilitar,añadirVehiculo} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)
router.patch('/unidad',añadirVehiculo)

=======
const {addUnidad,addMilitar,getUnidades} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)
router.get('/unidad',getUnidades)
>>>>>>> 7bf6e620b6947f879947acf61d8a6c1a535eedd6


module.exports =router