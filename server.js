const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendfile('./index.html');
});

app.get('/script.js',function(req,res){
    res.sendfile('./script.js');
})

app.post('/storeClick',function(req,res){
})

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});