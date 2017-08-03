const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageSchema = Schema({
    title:{type:String,required:true},
    url:{type:String,required:true},
    desription:String
})

let Page = mongoose.model('Page', pageSchema,'Pages');

module.exports = Page;