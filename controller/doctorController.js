const mongoDB = require('../config/mongoDB');
const jwt = require('jsonwebtoken')

module.exports.register = async function(req, res){
    const body = req.body;
    console.log(body)
    if(!body.doctorName || !body.password){
        res.json({alert: "Enter doctorName and password "})
    }
    const collection = await mongoDB();
    const found = await collection.findOne({doctorName: req.body.doctorName})
    if(found){
        res.json({alert: "You already registered, go to /doctors/login "})
    }
    else if(!found){
        await collection.insertOne(body)
        res.json({alert: "You have been registered, go to /doctors/login "})
    }
    res.end();
}

module.exports.login = async function(req, res){
    const body = req.body;
    console.log(body)
    if(!body.doctorName || !body.password){
        res.json({alert: "Enter doctorName and password "})
    }
    const collection = await mongoDB();
    const found = await collection.findOne({doctorName: req.body.doctorName})
    if(found){
        console.log(found)
        const token = jwt.sign(
            { user_id: found._id },
            "SECRET_TOKEN_KEY_123456789",
            { expiresIn: "1d" }
        );
        res.json({greeting: "You have been logined : Welcome Dr "+found.doctorName, token: token})
    }
    else if(!found){
        res.status(400).json({alert: "First register yourself, go to /doctors/register"})
    }
    res.end();
}