const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');
const scrollController = require('./Database/Controller/scrollController.js');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

mongoose.connect(mongoURI);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

io.on('connection', (client) => {
    client.on('join', (data) => {
        console.log(data)
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