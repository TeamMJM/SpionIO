const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const logSchema = Schema({
    _id:String,
    Log: [{
        logType: String,
        logStr:String,
        logTime:Date
    }],
    logTime:{type:Date,default:Date.now()}
})

let Log = mongoose.model('Log', logSchema, 'Logs');

module.exports = Log;