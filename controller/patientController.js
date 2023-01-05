const mongoDB = require('../config/mongoDB');

module.exports.register = async function (req, res) {
    const body = req.body;
    console.log(body)
    const mobileNumber = req.body.mobileNumber; // mobile number used as patients id
    const doctorName = req.body.doctorName;

    if (!mobileNumber || !doctorName) {
        res.json({ alert: "Enter patient's Mobile Number " })
    }
    const collection = await mongoDB();

    const found = await collection.findOne({ mobileNumber })
    if (found) {
        res.json({
            alert: "Patient already registered",
            record: found
        })
    }
    else if (!found) {
        const date = new Date().toLocaleDateString();
        await collection.insertOne({ mobileNumber, "Registered By ": doctorName, date })
        res.json({ alert: "patient have been registered" })
    }
    res.end();
}

module.exports.createReport = async function (req, res) {
    const patientID = req.params.id;
    const doctorName = req.body.doctorName;
    const symptoms = req.body.symptoms;

    console.log(typeof patientID);
    const collection = await mongoDB();

    const found = await collection.findOne({ mobileNumber: Number(patientID) })

    if (found) {
        const date = new Date().toLocaleDateString();
        await collection.insertOne({ mobileNumber: Number(patientID), doctorName, date, symptoms })
        res.json({ message: "Report Created for the Patient's ID : "+patientID }).end();
    } else {
        res.json({ alert: "Patient Does not exist, First Register patient /patients/register" }).end();
    }

}

module.exports.allReports = async function (req, res) {
    const patientID = req.params.id;
    const collection = await mongoDB();

    const found = await collection.find({mobileNumber: Number(patientID) }).toArray()

    if(found){
        console.log(found)
        res.json({allRecords: found}).end();
    }
}