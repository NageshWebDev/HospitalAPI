const express = require('express');
const router = express.Router();
const path = require('path')
const auth = require("../middleware/auth");

const doctorRoute = require('./doctors');
const reportRoute = require('./report');
const patientRoute = require('./patients')

router.get('/',(req,res)=>{ res.sendFile(path.join(__dirname,'../index.html')) })
router.use("/doctors", doctorRoute)
router.use("/patients", auth, patientRoute)
router.use("/reports", auth, reportRoute)

module.exports = router;