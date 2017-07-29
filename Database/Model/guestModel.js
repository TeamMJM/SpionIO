const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Click = require('./clickModel.js');
const Scroll = require('./scrollModel.js');
const guestSchema = Schema({
    _id: Number,
    clickID:[{type:Schema.Types.ObjectId,ref:'Click'}],
    scrollID:[{type:Schema.Types.ObjectId,ref:'Scroll'}],
    Time:Date.now()
})

let Guest = mongoose.model('Guest', guestSchema,'Guests');

module.exports = Guest;