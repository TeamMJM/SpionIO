const express = require('express');
const app = express();
const clickController = require('./Database/Controller/clickController.js');
const scrollController = require('./Database/Controller/scrollController.js');
let clientData = 1;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const secret = uuid();
const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

mongoose.connect(mongoURI);


const Guest = require('./Database/Model/guestModel.js');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));
app.use(bodyParser());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.sendfile('index.html')
})

app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('/build/bundle.js', (req, res, next) => {
    res.sendfile('./build/bundle.js');
})
app.post('/guestauth', (req, res, next) => {
    console.log("token",req.body.token);
    console.log("url",req.body.url)
    try { 
        let token = jwt.verify(req.body.token,"cats")
        console.log("json",token);
        if(token.page[token.page.length-1] !== req.body.url){
            console.log("inside");
            token.page.push(req.body.url);
            res.json({
                token:jwt.sign(token,"cats")
            })
        }
        else{
            console.log("Sdasd");
            res.send("preauth");
        }
        //search database
    } catch (err) {
        console.log(err);
        //make new guest
        newGuest = {
            _id: uuid(),
            time: Date.now(),
        };
        Guest.create({
            newGuest
        }, (err, guest) => {
            if (guest) {
                newGuest.page = [req.body.url];
                console.log("newGURET",newGuest);
                var token = jwt.sign(newGuest, "cats");
                res.json({
                    token: token
                });
            }
        })
    }
})
app.get('/gethtml', (req, res, next) => {
    console.log("CLient");
    console.log(clientData)
    res.send(clientData)
})

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
        scrollController.createScroll(data)
            .then((response)=>{
                client.emit('scrollResponse', response)
            })
            .catch((response)=>{
                client.emit('scrollResponse', response)
            })
        

    })
})


server.listen(3000);

module.exports = clientData;