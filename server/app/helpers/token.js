/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const token = {
    createToken: (user) => {
        const payload = {
            id: user.id,
            firstname: user.firstname,
            role: user.role,
        };
        const options = { expiresIn: '40sec' };
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const accessToken = jwt.sign(payload, secret, options);
        return accessToken;
    },
    verifyToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader && authHeader.split(' ')[1];
        if (accessToken == null) throw new Error('No token');
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) throw new Error('Invalid token');
            req.user = user;
            next();
        });
    },
};

module.exports = token;
