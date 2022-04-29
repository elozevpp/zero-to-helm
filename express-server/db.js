const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/data?retryWrites=true&w=majority";

const client = new MongoClient(uri);

client.connect().then(() => {
  console.log('mongo connection established')
}).catch((error) => {
  console.error('mongo connection unsuccessful: ', error)
});

const db = client.db('data');





module.exports = db