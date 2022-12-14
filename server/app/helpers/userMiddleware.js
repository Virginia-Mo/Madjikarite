const token = require('./token');

function authUser(req, res, next) {
    if (req.user) {
        token.verifyToken(req, res, next);
        console.log('vérification token ok');
        next();
    } else {
        throw new Error('No token');
    }
}

module.exports = authUser;
