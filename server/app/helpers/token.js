/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const token = {
    createToken: (user) => {
        const payload = {
            id: user.id,
            firstname: user.firstname,
            role: user.role,
        };
        const options = { expiresIn: '1h' };
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
    createEmailValidationToken: (user) => {
        const payload = {
            id: user.id,
            firstname: user.firstname,
        };
        const options = { expiresIn: '10m' };
        const secret = process.env.EMAIL_TOKEN_SECRET;
        const accessToken = jwt.sign(payload, secret, options);
        return accessToken;
    },
    createResetPasswordToken: (user) => {
        const payload = {
            id: user.id,
            firstname: user.firstname,
            password: user.password,
        };
        const options = { expiresIn: '10m' };
        const secret = process.env.EMAIL_TOKEN_SECRET;
        const accessToken = jwt.sign(payload, secret, options);
        return accessToken;
    },
    verifyResetPasswordToken: (req, _, next) => {
        jwt.verify(req.params.token, process.env.EMAIL_TOKEN_SECRET, (err, user) => {
            if (err) throw new Error('Invalid token');
            req.user = user;
        });
    },
};

module.exports = token;
