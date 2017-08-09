const express = require('express');
const app = express();
const path = require('path');
const clickController = require('./database/controller/clickController.js');
const scrollController = require('./database/controller/scrollController.js');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

// require('./passport')(passport); //pass passport for configuration


mongoose.connect(mongoURI);


const Click = require('./database/model/clickModel');
const Scroll = require('./database/model/scrollModel');

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

function isLoggedIn(req, res, next) {
    console.log('checking token...')
    jwt.verify(req.cookies.token, secret, 
        function(err, decoded) {
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


app.get('/dashboard', isLoggedIn, (req, res) => {
    console.log('sending....');
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/sites', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/dashboard/sites/:siteID', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/dashboard/sites/:siteID/page', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/dashboard/sites/:siteID/page/:pageID', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/clickReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'))
});

app.get('/scrollReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'));
});

app.get('/funnelReportData', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'dummy.json'));
});

app.get('/script.js', (req, res, next) => {
    res.sendfile('./script.js');
})

app.get('*/build/bundle.js', (req, res, next) => {
    res.sendfile('./build/bundle.js');
})

///////////////////////////////// Passport //////////////////////////////

// app.get('/sites', sitesController.getSites);

// app.post('/sites', sitesController.createSites);
// app.post('/updateSitePage', sitesController.findSite, pagesController.createPages);

// app.post('/pages', sitesController.findSite, pagesController.getPages);

// app.post('/singlePage', sitesController.findSite, pagesController.getSinglePages);

io.on('connection', (client) => {
    client.on('join', (data) => {
        console.log(data);
        client.emit('messages', 'Hello from server'); 
    });
    client.on('recording',(data) =>{
        console.log("Recording",data.type);
    });
})


server.listen(3000);
