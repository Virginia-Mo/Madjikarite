/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');

const profileController = {

    // Show the login page
    loginPage(req, res) {
        res.json({ page: 'page login' });
    },
    // Verify the email and the encrypted password and allow or deni the connection
    // eslint-disable-next-line consistent-return
    async connection(req, res) {
        const { email, password } = req.body;

        // We check if all the fields are filled
        if (!email || !password) {
            return res.status(400).json({ message: 'Tous les champs doivent être remplis' });
        }
        const user = await profileDataMapper.getOneUser(email);
        if (!user) { return res.status(400).json({ message: 'Utilisateur inconnu' }); }
        // We check if the password is correct
        const result = await bcrypt.compare(password, user.password);
        // If the password is correct, we create a session
        if (result) {
            req.session.user = {
                id: user.id,
                first_name: user.first_name,
                role: user.role_id,
            };
            res.redirect('/');
        } else {
            res.status(400).json({ message: 'Mot de passe incorrect' });
        }
    },
    // Delete the session to disconnect the user from his session
    logout(req, res) {
        req.session.user = {};
        res.redirect('/');
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
            const user = await profileDataMapper.createAccount({
                civility,
                last_name,
                first_name,
                email,
                phone_number,
                encryptedPassword,
            });
            // We create a session for the user
            req.session.user = {
                id: user.id,
                first_name: user.first_name,
                role: user.role_id,
            };
            res.json({ message: 'Votre compte a bien été créé' });
        }
    },
    // Show the profile page
    profilePage(req, res) {
        res.json({ page: 'page de profil' });
    },
    // Send the new data to the database
    async updateProfile(req, res) {
        // TODO: supprimer la définition du req.session.user_id
        req.session.user_id = 2;
        const { user_id } = req.session;
        // We get all the old data from the database
        const oldData = await profileDataMapper.getOneUser(user_id);
        const newData = [];
        newData.push(user_id);
        const { password } = req.body;
        // We loop through the new data to check if the user has changed something
        // If he has changed something, we add the new data to the newData array
        // Else, we add the old data to the newData array
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in req.body) {
            if (req.body[key] === '') {
                newData.push(oldData[key]);
            } else {
                newData.push(req.body[key]);
            }
        }
        if (password) {
            const encryptedPassword = await bcrypt.hash(password, 10);
            newData.splice(6, 1, encryptedPassword);
        }
        // We send the new data to the database
        await profileDataMapper.updateProfile(newData);
        // We update the session
        req.session.user = {
            id: user_id,
            first_name: newData[2],
        };
        res.json({ message: 'Votre profil a bien été mis à jour' });
    },
    // Delete the account from the database
    async deleteProfile(req, res) {
        // TODO: supprimer la définition du req.session.user_id
        req.session.user = {
            id: 4,
        };
        await profileDataMapper.deleteProfile(req.session.user.id);
        res.json({ message: 'Votre compte à bien été supprimé' });
    },
};

module.exports = profileController;
