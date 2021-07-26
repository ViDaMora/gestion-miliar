const express = require('express');
let router = express.Router();
const {addVehiculo} = require('../controller/VehiculoController');

router.post('/vehiculo',addVehiculo)

module.exports =router
