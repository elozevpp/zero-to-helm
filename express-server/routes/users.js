var express = require('express');
const db = require('../db');
var router = express.Router();


/* GET users listing. */
router.get('/', async function(req, res, next) {

  const users = await db.collection('users').find({}, {limit: 100}).toArray();

  return res.json(users);
});

module.exports = router;
