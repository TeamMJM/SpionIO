const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const frameSchema = Schema({
    _id: String,
    Frame: [{
        event: String, // 'logs' for console log events
        ClickX: Number,
        ClickY: Number,
        logStr: String, // extraction of console log
        movementX: Number,
        movementY: Number,
        scrollTop: Number,
        scrollLeft: Number,
        target: String,
        targetValue: String,
        targetKeyCode: String,
        time: Number
    }]
})

let Frame = mongoose.model('Frame', frameSchema, 'Frames');

module.exports = Frame;