const express = require('express')
const router = express.Router();
const patientController = require('../controller/patientController')

// /patients/register
router.post('/register', patientController.register)

// /patients/:id/createReport
router.post('/:id/createReport', patientController.createReport)

// /patients/:id/all_reports
router.post('/:id/all_reports', patientController.allReports)

module.exports = router;