const express = require('express')
const router = express.Router();
const reportController = require('../controller/reportController')

// /report/:status
router.post('/:status', reportController.status)

module.exports = router;