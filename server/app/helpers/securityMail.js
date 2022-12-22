require('dotenv').config();
const nodemailer = require('nodemailer');
const token = require('./tokenHandler');

const emailVerification = {
    sendResetPasswordEmail: (user) => {
    // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        // Create a token
        const resetPasswordToken = token.createResetPasswordToken(user);
        // Mail options
        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Test',
            text: `Veuillez cliquer sur le lien suivant pour être redirigé vers la page de création d'un nouveau mot de passe : http://localhost:3000/reset-password/${user.id}/${resetPasswordToken} `,
        };

        // Send the mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Un email a été envoyé à ${user.email}`);
            }
        });
        return resetPasswordToken;
    },
    sendEmailValidation: (user) => {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        // Create a token
        const resetPasswordToken = token.createEmailValidationToken(user);
        // Mail options
        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Test',
            text: `Veuillez cliquer sur le lien suivant pour valider votre adresse mail : http://localhost:3000/verify-email/${user.id}/${resetPasswordToken} `,
        };

        // Send the mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Un email a été envoyé à ${user.email}`);
            }
        });
        return resetPasswordToken;
    },
};

module.exports = emailVerification;
