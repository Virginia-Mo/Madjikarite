const token = require('./token');

function authUser(req, res, next) {
    token.verifyToken(req, res, next);
    console.log('vérification token ok');
}

module.exports = authUser;
