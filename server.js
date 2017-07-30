const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const scrollController = require('./Database/Controller/scrollController.js');
let clientData = 1;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var socketioJwt = require("socketio-jwt");
var jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

mongoose.connect(mongoURI);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));


app.get('/', (req, res) => {
    res.sendfile('index.html')
})

app.get('/script.js',(req,res,next) =>{
    res.sendfile('./script.js');
})

app.get('/build/bundle.js', (req,res,next) =>{
    res.sendfile('./build/bundle.js');
})

app.get('/guestauth',(req,res,next)=>{
    var profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };
  var token = jwt.sign(profile,"cats");
  res.json({token:token});
})
app.get('/gethtml',(req,res,next)=>{
    console.log("CLient");
    console.log(clientData)
    res.send(clientData)
})
app.use(bodyParser.json());

io.on('connection', (client) => {
    client.on('join', (data) => {
        clientData = data;
        client.emit('messages', 'Hello from server');
    })
    client.on('storeClick', (data) => {
        let mappedClick = clickController.mapClick(data);
        clickController.createClick(mappedClick)
            .then((response) => {
                client.emit('clickResponse', response);
            })
            .catch((response) => {
                client.emit('clickResponse', response);
            })
    })
    client.on('storeScroll', (data) => {
        let response = scrollController.createScroll(data)
        client.emit('scrollResponse', response)
            .then((scroll) => {
                client.emit('scrollResponse', response);
            })
            .catch((err) => {
                client.emit('scrollResponse', response);
            })
    })
})


server.listen(3000);

module.exports = clientData;