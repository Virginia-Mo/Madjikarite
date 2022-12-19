const token = require('./tokenHandler');

function authUser(req, res, next) {
    token.verifyToken(req, res, next);
}

module.exports = authUser;
