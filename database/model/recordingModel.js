const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const recordingSchema = Schema({
    _id:String,
    Frame: [{
        event: String,
        ClickX: Number,
        ClickY: Number,
        mouseTarget: String,
        scroll: Number,
        clickTarget: String,
        keyPressTarget: String,
        keyPressValue: String,
        KeyPressKeyCode: String,
        time: Date
    }],
    width:Number,
    height:Number,
    htmlCopy: String,
    startTime: Date,
})

let Recording = mongoose.model('Recording', recordingSchema, 'Recordings');

module.exports = Recording;