const express = require('express');
let router = express.Router();
const {addOperacion,addUnidad,getAllOperaciones} = require('../controller/OperacionController');

router.post('/operacion',addOperacion)
router.put('/operacion',addUnidad)
router.get('/operacion',getAllOperaciones)

module.exports =router