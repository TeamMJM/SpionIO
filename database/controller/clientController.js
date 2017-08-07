const Client = require('./../model/clientModel');
// const bcrypt = require('bcrypt-nodejs');

const clientController = {};

clientController.addClient = (req, res, next) => {
    console.log('adding new client')
    Client.create({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) res.send(err)
        console.log('added successfully') 
        if (user) next()
    })
}

clientController.isValid = (req, res, next) => {
    console.log('looking for client...')
    Client.findOne({ email: req.body.email }, (err, client) => {
        if (err) res.send(err);

        client.comparePassword(req.body.password, (err, match) => {
            console.log('comparing password...');
            if (err) res.send(err);
            if (!match) {
                res.redirect('/');
            } else {
                next();
            }
        })
    })
}

// clientController.generateHash = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// clientController.validPassword = (password) => {
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = clientController;