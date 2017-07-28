const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrollSchema = Schema({
  scrollPercent: Number,
})

let Scroll = mongoose.model('Scroll', scrollSchema);

module.exports = Scroll;