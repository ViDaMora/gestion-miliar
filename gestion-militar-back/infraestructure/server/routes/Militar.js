const express = require('express');
let router = express.Router();
const {addMilitar,deleteMilitar} = require('../controller/MilitarController');


router.post('/militar',addMilitar)
router.delete('/militar',deleteMilitar)

module.exports =router
