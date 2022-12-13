const token = require('./token');

function authUser(req, res, next) {
    if (req.user) {
        token.verifyToken(req, res, next);
        next();
    } else {
        throw new Error('No token');
    }
}

module.exports = authUser;
