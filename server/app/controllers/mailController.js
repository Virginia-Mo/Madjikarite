const bcrypt = require('bcrypt');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');
const emailVerification = require('../helpers/securityMail.js');
const tokenHandler = require('../helpers/tokenHandler.js');

const mailController = {
    // Send an email to the user to reset his password
    async postForgotPassword(req, res) {
        const { email } = req.body;
        // We check if the email exists in the database
        const user = await profileDataMapper.getOneUserWithEmail(email);
        if (!user) {
            throw new Error('Cet utilisateur n\'existe pas');
        }
        // We send an email to the user
        const restPasswordToken = emailVerification.sendResetPasswordEmail(user);
        res.json({ message: 'Un email vous a été envoyé', restPasswordToken });
    },
    // Show the reset password page
    async getResetPassword(req, res, next) {
        const { id } = req.params;
        // We check if the user exists in the database
        const user = await profileDataMapper.getOneUserWithId(id);
        req.user = user;
        if (!user) {
            throw new Error('Cet utilisateur n\'existe pas');
        }
        // We check if the token is valid
        tokenHandler.verifyResetPasswordToken(req, res, next);
        res.json({ page: 'page de réinitialisation de mot de passe' });
    },
    // Send the new password to the database
    async postResetPassword(req, res, next) {
        const { id } = req.params;
        // We check if the user exists in the database
        const user = await profileDataMapper.getOneUserWithId(id);
        if (!user) {
            throw new Error('Cet utilisateur n\'existe pas');
        }
        req.user = user;
        // We check if the token is valid
        tokenHandler.verifyResetPasswordToken(req, res, next);
        const { password } = req.body;
        // We encrypt the new password
        const encryptedPassword = await bcrypt.hash(password, 10);
        // We send the new password to the database
        await profileDataMapper.updatePassword(user.id, encryptedPassword);
        res.json({ message: 'Votre mot de passe a bien été modifié' });
    },
    async getVerifyEmail(req, res, next) {
        const { id } = req.params;
        // We check if the user exists in the database
        const user = await profileDataMapper.getOneUserWithId(id);
        if (!user) {
            throw new Error('Cet utilisateur n\'existe pas');
        }
        // We check if the token is valid
        tokenHandler.verifyEmailVerificationToken(req, res, next);
        // We update the user's emailVerified field
        const verifiedUser = await profileDataMapper.updateEmailVerified(user.id);
        // We create a new token
        const newVerifiedToken = tokenHandler.createToken(verifiedUser);
        res.json({ message: 'Votre email a bien été vérifié', token: newVerifiedToken });
    },
};

module.exports = mailController;
