const express = require('express');
let router = express.Router();
const {addVehiculo,deleteVehiculo} = require('../controller/VehiculoController');


router.post('/vehiculo',addVehiculo)
router.delete('/vehiculo',deleteVehiculo)

module.exports =router
