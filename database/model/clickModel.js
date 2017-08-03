const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clickSchema = Schema({
    clickX: Number,
    clickY: Number,
    clickCount: Number
})

let Click = mongoose.model('Click', clickSchema,'Clicks');

module.exports = Click;