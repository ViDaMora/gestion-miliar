const express = require('express');
let router = express.Router();
const {addVehiculo,deleteVehiculo,getAllVehiculos} = require('../controller/VehiculoController');


router.post('/vehiculo',addVehiculo)
router.delete('/vehiculo',deleteVehiculo)
router.get('/vehiculo',getAllVehiculos)

module.exports =router
