const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");

const doctorRoute = require('./doctors');
const reportRoute = require('./report');
const patientRoute = require('./patients')

router.use("/doctors", doctorRoute)
router.use("/patients", auth, patientRoute)
router.use("/reports", auth, reportRoute)

module.exports = router;