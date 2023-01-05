const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let dbo = client.db('HospitalAPI'); // Establish connection
    console.log('connection created');
    return dbo.collection('hospitalRecord'); // creating a collection and naming it also
}

module.exports = getEmpData;