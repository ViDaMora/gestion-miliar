const express = require('express');
let router = express.Router();
const {addOperacion,addUnidad} = require('../controller/OperacionController');

router.post('/operacion',addOperacion)
router.put('/operacion',addUnidad)

module.exports =router