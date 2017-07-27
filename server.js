const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://jerry:123@ds125623.mlab.com:25623/userevents')


app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    res.sendfile('./index.html');
})
app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('/style.css', (req, res, next) => {
    res.sendfile('./style.css')
})

app.post('/storeClick',
    clickController.mapClick,
    clickController.createClick
)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});