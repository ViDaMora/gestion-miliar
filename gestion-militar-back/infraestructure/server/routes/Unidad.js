const express = require('express');
let router = express.Router();
const {addUnidad} = require('../controller/UnidadController');

router.post('/unidad',addUnidad)


module.exports =router