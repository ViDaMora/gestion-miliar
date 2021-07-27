const express = require('express');
let router = express.Router();
const {addMilitar,deleteMilitar,getMilitares} = require('../controller/MilitarController');


router.post('/militar',addMilitar)
router.delete('/militar',deleteMilitar)
router.get('/militar',getMilitares)

module.exports =router
