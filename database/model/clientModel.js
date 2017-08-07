const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Site = require('./sitesModel.js');
const bcrypt = require('bcrypt')

const clientSchema = Schema({
    email: {type: String, required: true, unique: true},
    password: String,
    siteID: [{type:Schema.Types.ObjectId, ref:'Site'}]
});

clientSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

clientSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

let Client = mongoose.model('Client', clientSchema,'Clients');

module.exports = Client;