const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const mongoose = require('mongoose');
<<<<<<< HEAD

let mongoURI = 'mongodb://jerry:123@ds125623.mlab.com:25623/userevents';

mongoose.connect(mongoURI);
=======
mongoose.connect('mongodb://jerry:123@ds125623.mlab.com:25623/userevents')
>>>>>>> 2cb11892332b635d097ae74178528e20f979932c


app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    res.sendfile('./index.html');
})
app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

<<<<<<< HEAD
app.get('/styles.css',(req,res,next) =>{
    res.sendfile('./styles.css');
})

app.post('/storeClick',(req,res,next) =>{
    clickController.createClick(req,res,next)
=======
app.get('/style.css', (req, res, next) => {
    res.sendfile('./style.css')
>>>>>>> 2cb11892332b635d097ae74178528e20f979932c
})

app.post('/storeClick',
    clickController.mapClick,
    clickController.createClick
)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});