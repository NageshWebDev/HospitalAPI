const mongoDB = require('../config/mongoDB');

module.exports.status = async function (req, res) {
    const findSymptoms = req.params.status;

    const collection = await mongoDB();
    const found = await collection.find({ symptoms: findSymptoms }).toArray();
    if (found.length > 0) {
        res.json({All_Record: found}).end();
    }else{
        res.json({alert: "Nothing Found in database"}).end();
    }
}