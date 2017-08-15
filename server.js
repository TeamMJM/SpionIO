const express = require('express');
const app = express();
const path = require('path');

const recordingController = require('./database/controller/recordingController.js')
const frameController = require('./database/controller/frameController.js')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let mongoURI = 'mongodb://localhost:27017/private-I';

// require('./passport')(passport); //pass passport for configuration


mongoose.connect(mongoURI);

const Frame = require('./database/model/frameModel.js')
const Recording = require('./database/model/recordingModel.js')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.png'));
})

app.get('/screenshot.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'screenshot.png'))
})

app.get('/websiteicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'websiteicon.png'));
})

app.get('/databaseicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'databaseicon.png'))
})

app.get('/machinelearningicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'machinelearningicon.png'))
})

app.get('/stockexample.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/stockexample.png'))
})

app.get('/welcomelogo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcomelogo.png'))
})

app.get('/public/1.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/1.png'))
})

app.get('/public/2.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/2.png'))
})

app.get('/public/3.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/3.png'))
})

app.get('/public/4.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/4.png'))
})

app.get('/public/5.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/5.png'))
})

app.get('/public/6.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/6.png'))
})

app.get('/public/7.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/7.png'))
})

app.get('/public/8.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/8.png'))
})

app.get('/public/9.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/9.png'))
})

function isLoggedIn(req, res, next) {
    console.log('checking token...')
    jwt.verify(req.cookies.token, secret,
        function (err, decoded) {
            if (err) {
                res.send(err)
                res.redirect('/signup');
            } else {
                console.log('good token')
                return next();
            }
        }
    )
};


app.get('/dashboard', (req, res) => {
    console.log('sending....');
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/:recordingID', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('*/build/bundle.js', (req, res, next) => {
    res.sendfile('./build/bundle.js');
})

app.get('/recordings',recordingController.findAll)
app.get('/recordings/:recordingID', recordingController.findRecording)

app.get('/frames',frameController.findAll)
app.get('/frames/:recordingID',frameController.findFrame)

io.on('connection', (client) => { 
    client.on('join', (data) => {
        console.log(data);
        client.emit('messages', 'Hello from server');
    });
    client.on('html', (data) => {
        recordingController.createRecording(data)
            .then((Response) => {
                frameController.createFrame(data)
                    .then((Response) =>{
                        console.log('Frame',Response)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err);
            })
    })
    client.on('recording', (id,data) => {
        let result = data.map(function(element) {
            return Object.values(element)[0]
        });
        console.log('RECORDING',result);
        frameController.updateFrameBulk(id,result)
           .then((Response) => {
               console.log("Response",Response)
            }).catch((err) => {
               console.log(err)
           })
    });
    client.on('unload', (id,data) => {
        console.log('INLOAD');
        let result = data.map(function(element) {
            return Object.values(element)[0]
        });
        console.log(result);
        frameController.updateFrameBulk(id,result)
            .then((Response) => {
                console.log("Unload", Response)
            }).catch((err) => {
                console.log(err)
            })
    })
    client.on('event',(data)=>{
        console.log('EVENT',data);
    })
})

server.listen(3000);
