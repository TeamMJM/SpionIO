const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrollSchema = Schema({
  _id:Number,
  scrollPercent: Number
})

let Scroll = mongoose.model('Scroll', scrollSchema,'Scrolls');

module.exports = Scroll;