const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Site = require('./siteModel.js');

const clientSchema = Schema({
    name: String,
    password: String,
    mail: String,
    siteID: [{type:Schema.Types.ObjectId, ref:'Site'}]
});

let Client = mongoose.model('Client', clientSchema,'Clients');

module.exports = Client;