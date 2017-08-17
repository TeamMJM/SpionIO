const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const feedBackSchema = Schema({
    _id:String,
    firstName:{type:String,required:true,trim:true},
    lastName:{type:String,required:true,trim:true},
    description:String,
    createdTime:{type:Date,default:Date.now()},
})

let FeedBack = mongoose.model('FeedBack', feedBackSchema, 'FeedBacks');

module.exports = FeedBack;