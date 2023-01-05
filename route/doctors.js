const express = require('express')
const router = express.Router();
const doctorController = require('../controller/doctorController')

//  /doctors/register
router.post('/register', doctorController.register)

//  /doctors/login
router.post('/login', doctorController.login)

module.exports = router;