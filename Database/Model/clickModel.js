const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clickSchema = Schema({
    clickX: Number,
    clickY: Number
})

let Click = mongoose.model('Click', clickSchema);

module.exports = Click;