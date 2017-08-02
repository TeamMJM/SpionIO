const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageSchema = Schema({
    _id: Number,
    IPHASH:[String],
    guestID:[{type:Schema.Types.ObjectId, ref:'Guest'}]
})

let Page = mongoose.model('Page', pageSchema,'Pages');

module.exports = Page;