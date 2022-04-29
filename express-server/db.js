const { MongoClient } = require("mongodb");
const dbConfig = require('config').database;

const { uri } = dbConfig;
console.log("🚀 ~ file: db.js ~ line 5 ~ uri", uri)

const client = new MongoClient(uri);

client.connect().then(() => {
  console.log('mongo connection established')
}).catch((error) => {
  console.error('mongo connection unsuccessful: ', error)
});

const db = client.db('data');





module.exports = db