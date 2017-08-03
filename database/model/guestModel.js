const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const guestSchema = Schema({
    _id: Number,
    clickID:[{type:Schema.Types.ObjectId,ref:'Click'}],
    scrollID:[{type:Schema.Types.ObjectId,ref:'Scroll'}],
    time:{type: Date, default: Date.now}
})

let Guest = mongoose.model('Guest', guestSchema,'Guests');

module.exports = Guest;