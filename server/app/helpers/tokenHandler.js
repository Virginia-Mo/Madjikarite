/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const ForbiddenError = require('./ForbiddenError.js');

const tokenHandler = {
    // create a token with the user id and the role
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
    // verify the token from the header authorization
    verifyToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader && authHeader.split(' ')[1];
        if (accessToken == null) throw new ForbiddenError('Vous devez être connecté pour accéder à cette page');
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) throw new ForbiddenError('Votre session a expiré');
            req.user = user;
            next();
        });
    },
    // create a token for the email validation
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
    // verify the token for the email validation
    verifyEmailVerificationToken: (req, _, next) => {
        jwt.verify(req.params.token, process.env.EMAIL_TOKEN_SECRET, (err, user) => {
            if (err) throw new Error('Invalid token');
            req.user = user;
        });
    },
    // create a token for the password reset
    createResetPasswordToken: (user) => {
        const payload = {
            id: user.id,
            firstname: user.firstname,
        };
        const options = { expiresIn: '10m' };
        const secret = process.env.EMAIL_TOKEN_SECRET + user.password;
        const accessToken = jwt.sign(payload, secret, options);
        return accessToken;
    },
    // verify the token for the password reset
    verifyResetPasswordToken: (req, _, next) => {
        // eslint-disable-next-line max-len
        jwt.verify(req.params.token, process.env.EMAIL_TOKEN_SECRET + req.user.password, (err, user) => {
            if (err) throw new Error('Invalid token');
            req.user = user;
        });
    },
};

module.exports = tokenHandler;
