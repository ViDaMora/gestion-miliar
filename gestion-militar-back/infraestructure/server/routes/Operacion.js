const express = require('express');
let router = express.Router();
const {addOperacion} = require('../controller/OperacionController');

router.post('/operacion',addOperacion)

module.exports =router