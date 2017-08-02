const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Page = require('./pagesModel.js');
const siteSchema = Schema({
    title: String,
    // pageID: [{type:Schema.Types.ObjectId, ref:'Page'}]
})

let Site = mongoose.model('Site', siteSchema,'Sites');

module.exports = Site;