const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const frameSchema = Schema({
    _id: String,
    Frame: [{
        event: String,
        ClickX: Number,
        ClickY: Number,
        logStr: String,
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