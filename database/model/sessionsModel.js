const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Page = require('./pagesModel.js');
const Scroll = require('./scrollModel.js');
const Click = require('./clickModel.js');

const sessionsSchema = Schema({
    _id:{type:String,required:true},
    funnel: [{
        pageID: {
            type: Schema.Types.ObjectId,
            ref: 'Page',
            required:true
        },
        clickID: {
            type: Schema.Types.ObjectId,
            ref: 'Click',
            required:true
        },
        scrollID: {
            type: Schema.Types.ObjectId,
            ref: 'Scroll',
            required:true
        },
        pageSessionStart:{
            type: Date,
            default:Date.now 
        },
        pageSessionEnd:{
            type:Date
        }
    }],
    sessionFullStart: {
        type: Date,
        default: Date.now
    },
    sessionFullEnd:{
        type:Date
    },
    currentUrl:{type:String,required:true}
})

let Session = mongoose.model('Session', sessionsSchema, 'Sessions');

module.exports = Session;