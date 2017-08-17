const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const recordingSchema = Schema({
    _id:String,
    width:Number,
    height:Number,
    htmlCopy: String,
    startTime: Number,
    createdTime:{type:Date,default:Date.now()},
    position:String
})

let Recording = mongoose.model('Recording', recordingSchema, 'Recordings');

module.exports = Recording;