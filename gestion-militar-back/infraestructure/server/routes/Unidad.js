const express = require('express');
let router = express.Router();
const {Crear_Unidad} = require('../controller/UnidadController');

router.post('/unidad',Crear_Unidad)


module.exports =router