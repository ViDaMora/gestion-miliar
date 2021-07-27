const express = require('express');
let router = express.Router();
const {addLider,getLideres,retirarLider} = require('../controller/LiderController');

router.post('/lider',addLider)
router.put('/lider',retirarLider)
router.get('/lider',getLideres)

module.exports =router
