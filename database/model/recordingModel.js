const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const recordingSchema = Schema({
    _id:String,
    Frame: [{
        event: String,
        mouseClickX: Number,
        mouseClickY: Number,
        mouseTarget: String,
        scroll: Number,
        clickClickX: Number,
        ciickClickY: Number,
        clickTarget: String,
        keyPressTarget: String,
        keyPressValue: String,
        KeyPressKeyCode: String,
        time: Date
    }],
    width:Number,
    height:Number,
    htmlCopy: String,
    StartTime: Number
})

let Recording = mongoose.model('Recording', recordingSchema, 'Recordings');

module.exports = Recording;