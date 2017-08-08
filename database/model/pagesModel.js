const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageSchema = Schema({
    title:{type:String,required:true},
    url:{type:String,required:true},
    desription:String,
    pageHTML: {type:String,default:null},
    pageCSS: {type:String,default:null}
})

let Page = mongoose.model('Page', pageSchema,'Pages');

module.exports = Page;