const express = require('express');
let router = express.Router();
const {addOperacion,addUnidad,getAllOperaciones,asignarLider} = require('../controller/OperacionController');

router.post('/operacion',addOperacion)
router.put('/operacion',addUnidad)
router.get('/operacion',getAllOperaciones)
router.patch('/operacion',asignarLider)

module.exports =router