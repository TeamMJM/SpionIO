const mongoose = require('mongoose');

mongoose.connect('mongodb://jerry:123@ds125623.mlab.com:25623/userevents')

module.exports = mongoose;