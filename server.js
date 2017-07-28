const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerry:123@ds125623.mlab.com:25623/userevents';

mongoose.connect(mongoURI);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/storeClick',
    clickController.mapClick,
    clickController.createClick
)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});