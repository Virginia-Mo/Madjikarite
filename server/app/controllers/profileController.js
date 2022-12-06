const bcrypt = require('bcrypt');
const profileDataMapper = require('../models/profile.js');

const profileController = {

    // Show the login page
    loginPage(req, res) {
        res.json({ page: 'page login' });
    },
    // Verify the email and the encrypted password and allow or deni the connection
    connection(req, res) {
        res.json({ page: 'authentifiaction' });
    },
    // Delete the session to disconnect the user from his session
    logout(req, res) {
        res.json({ page: 'déconnection' });
    },
    // Show the signup page
    signupPage(req, res) {
        res.json({ page: 'page de création de compte' });
    },
    // Send all the data from the form to the database and let
    // the visitor as connected to his account
    async createAccount(req, res) {
        const {
            civility, last_name, first_name, email, phone_number, password,
        } = req.body;
        // We verify is all the fields are filled
        const bodyErrors = [];
        if (!civility) {
            bodyErrors.push('La civilité est obligatoire');
        }
        if (!last_name) {
            bodyErrors.push('Le nom est obligatoire');
        }
        if (!first_name) {
            bodyErrors.push('Le prénom est obligatoire');
        }
        if (!email) {
            bodyErrors.push('L\'email est obligatoire');
        }
        if (!phone_number) {
            bodyErrors.push('Le numéro de téléphone est obligatoire');
        }
        if (!password) {
            bodyErrors.push('Le mot de passe est obligatoire');
        }

        if (bodyErrors.length) {
            res.status(400).json({ errors: bodyErrors });
        } else { // If all the fields are filled, we encrypt the password
            const encryptedPassword = await bcrypt.hash(password, 10);
            // We send all the data to the database
            const profile = await profileDataMapper.createAnAccount({
                civility,
                last_name,
                first_name,
                email,
                phone_number,
                encryptedPassword,
            });
            // We create a session for the user
            req.session.profile = first_name;
            res.json({ message: 'Votre compte a bien été créé' });
        }
    },
    // Show the profile page
    profilePage(req, res) {
        res.json({ page: 'page de profil' });
    },
    // Send the new data to the database
    updateProfile(req, res) {
        res.json({ page: 'mise à jour des informations du profil' });
    },
};

module.exports = profileController;
