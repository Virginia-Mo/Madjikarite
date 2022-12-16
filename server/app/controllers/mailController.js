const bcrypt = require('bcrypt');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');
const emailVerification = require('../helpers/securityMail.js');
const tokenHandler = require('../helpers/token.js');

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
        console.log(user);
        if (!user) {
            throw new Error('Cet utilisateur n\'existe pas');
        }
        // We check if the token is valid
        tokenHandler.verifyResetPasswordToken(req, res, next);
        const { password } = req.body;
        console.log(password);
        // We encrypt the new password
        const encryptedPassword = await bcrypt.hash(password, 10);
        // We send the new password to the database
        const result = await profileDataMapper.updatePassword(user.id, encryptedPassword);
        console.log(result);
        res.json({ message: 'Votre mot de passe a bien été modifié' });
    },
};

module.exports = mailController;

/*
comment faire pour créer un email pour que l'utilisateur reset son mot de passe ?

Lorsque l'utilisateur soumet le formulaire, générez un jeton de réinitialisation de
 mot de passe et enregistrez-le dans votre base de données. Envoyez également un e-mail
  à l'utilisateur avec un lien de réinitialisation de mot de passe qui contient ce jeton.

Voici comment détailler le point numéro 2 :

Lorsque l'utilisateur soumet le formulaire de réinitialisation de mot de passe,
voici ce qui se passe :
Générez un jeton de réinitialisation de mot de passe unique et enregistrez-le
dans votre base de données,
 associé à l'adresse e-mail de l'utilisateur. Ce jeton peut être généré de différentes manières,
  par exemple en utilisant une fonction de hachage ou en générant un nombre aléatoire.

Envoyez un e-mail à l'utilisateur avec un lien de réinitialisation de mot de passe qui contient le jeton de réinitialisation. Ce lien peut être construit en concaténant l'URL de votre site Web avec le jeton de réinitialisation, par exemple : "https://www.example.com/reset-password?token=abcdefg123456".

Stocker le jeton de réinitialisation dans la base de données avec une date
 d'expiration. Cela permet de s'assurer que le jeton ne peut pas être
 utilisé indéfiniment et doit être utilisé dans un délai défini.

Enregistrez également la date et l'heure à laquelle le jeton a été
généré, afin de pouvoir vérifier plus tard que le jeton n'a pas expiré.

Il est important de noter que le jeton de réinitialisation de mot de passe ne doit
 pas être stocké en clair dans la base de données, mais plutôt être haché ou
  crypté de manière à ce qu'il ne puisse pas être facilement lu ou utilisé
   par une personne non autorisée.
*/
