const express = require('express');
let router = express.Router();
const {addUnidad,addMilitar} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)


module.exports =router