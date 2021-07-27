const express = require('express');
let router = express.Router();
const {getLideres} = require('../controller/LiderController');


router.get('/lider',getLideres)

module.exports =router
