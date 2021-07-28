const express = require('express');
let router = express.Router();
const {addUnidad,addMilitar,getUnidades} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)
router.put('/unidad',addMilitar)
router.get('/unidad',getUnidades)


module.exports =router