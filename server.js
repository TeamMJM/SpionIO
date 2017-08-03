const express = require('express');
const app = express();
const path = require('path');
const sitesController = require('./Database/Controller/sitesController.js');
const pagesController = require('./Database/Controller/pagesController.js');
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
var mensch = require('mensch');
let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

mongoose.connect(mongoURI);


const Session = require('./Database/Model/sessionsModel.js');
const Page = require('./Database/Model/pagesModel');
const Click = require('./Database/Model/clickModel');
const Scroll = require('./Database/Model/scrollModel');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));
app.use(bodyParser());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.png'));

})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/sites', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.get('/dashboard/sites/pages', (req, res) => {
    res.sendfile('index.html')
})

app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('*/build/bundle.js', (req, res, next) => {
    res.sendfile('./build/bundle.js');
})
app.post('/guestauth', (req, res, next) => {
    try {
        let token = jwt.verify(req.body.token, secret)
        console.log("json", token);
        Session.findOne({
            _id: token.sessionID
        }, (err, sessionFound) => {
            if (err) res.send(err);
            else {
                if (sessionFound.currentUrl === req.body.url) {
                    res.send("preauth");
                } else {
                    let pageFound = Page.findOne({
                        url: req.body.url
                    }, (err, pageFound) => {
                        if (err) res.send(err);
                        else {
                            sessionFound.currentUrl = req.body.url;
                            sessionFound.funnel.push({
                                /// current page,
                                pageID: pageFound,
                                clickID: new Click,
                                scrollID: new Scroll,
                            });
                            sessionFound.save((err) => {
                                if (err) res.send(err)
                                else {
                                    let token = jwt.sign(sessionFound._id, secret);
                                    res.json({
                                        token: token
                                    });
                                }
                            })
                        }
                    })
                }
            }
        })
        //search database
    } catch (err) {
        console.log(err);
        //make new session

        let pageFound = Page.findOne({
            url: req.body.url
        }, (err, pageFound) => {
            if (err) res.send(err);
            else {
                let sessionID = uuid();
                let newSession = new Session({
                    _id: sessionID,
                    currentUrl: req.body.url
                });
                newSession.funnel.push({
                    /// current page,
                    pageID: pageFound,
                    clickID: new Click,
                    scrollID: new Scroll,
                });
                newSession.save((err) => {
                    if (err) res.send(err)
                    else {
                        let token = jwt.sign(sessionID, secret);
                        res.json({
                            token: token
                        });
                    }
                })
            }
        })
    }
})
app.get('/gethtml', (req, res, next) => {
    console.log("CLient");
    console.log(clientData)
    let css = mensch.parse(clientData.header)
    let cssString = mensch.stringify(css)
    fs.writeFileSync('./src/styles/html.css', cssString);
    res.send(clientData)
})
app.get('/deletehtml', (req, res, next) => {
    console.log("delete");
    fs.unlinkSync("./src/styles/html.css")
    res.sendStatus(200);
})

app.get('/sites', sitesController.getSites);

app.post('/sites', sitesController.createSites);

app.get('/pages', pagesController.getPages);

app.post('/pages', pagesController.createPages);


io.on('connection', (client) => {
    client.on('join', (data) => {
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
            .then((response) => {
                client.emit('scrollResponse', response)
            })
            .catch((response) => {
                client.emit('scrollResponse', response)
            })


    })
})


server.listen(3000);

module.exports = clientData;