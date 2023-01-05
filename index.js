const express = require("express");
const app = express();
const PORT = 8000; 
const router = require('./route')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// defining routes
app.use('/',router)

// doctor/register
// doctor/login
// patients/register
// patients/:id/createReport
// patients/:id/all_report
// reports/:status

// setting server
app.listen(PORT, ()=>{ console.log('server is up at port : '+ PORT) })