const Client = require('./../model/clientModel');
const bcrypt = require('bcrypt-nodejs');

const clientController = {};

clientController.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

clientController.validPassword = (password) => {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = clientController;