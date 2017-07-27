const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./Database/Controller/clickController.js');


app.use(bodyParser.json());
app.get('/', (req,res,next) => {
    res.sendfile('./index.html');
});

app.get('/script.js',(req,res,next) =>{
    res.sendfile('./script.js');
})

app.post('/storeClick',(req,res,next) =>{
    clickController.createClick(req,res,next)
})

app.listen(3000, () =>{
    console.log('App listening on port 3000!');
});