/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');
const token = require('../helpers/token.js');
const UserInputError = require('../helpers/userInputError.js');

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
            throw new UserInputError('Tous les champs doivent être remplis');
        }
        // We check if the email is in the database
        const user = await profileDataMapper.getOneUserWithEmail(email);
        if (!user) throw new UserInputError('Utilisateur inconnu');
        // We check if the password is correct
        const result = await bcrypt.compare(password, user.password);
        // If the password is correct, we create a session
        const tokenUser = {
            id: user.id,
            firstName: user.first_name,
            role: user.role_id,
        };
        if (!result) {
            throw new UserInputError('Mot de passe incorrect');
        }
        return res.json({ firstName: user.first_name, token: token.createToken(tokenUser) });
    },
    // Delete the session to disconnect the user from his session
    logout(req, res) {
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
            // eslint-disable-next-line max-len
            last_name, first_name, email, phone_number, password, address, zip_code, city, country,
        } = req.body;
        // We verify is all the fields are filled
        const bodyErrors = [];
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
            throw new UserInputError('Tous les champs doivent être remplis', bodyErrors);
        } else { // If all the fields are filled, we encrypt the password
            const encryptedPassword = await bcrypt.hash(password, 10);
            // We send all the data to the database
            const user = await profileDataMapper.createAccount({
                last_name,
                first_name,
                email,
                phone_number,
                encryptedPassword,
            });
            const user_id = user.id;
            const completeAddress = {
                address,
                zip_code,
                city,
                country,
            };
            await profileDataMapper.createAddress(user_id, completeAddress);
            const tokenUser = {
                id: user.id,
                firstName: user.first_name,
                role: user.role_id,
            };
            res.json({ firstName: user.first_name, token: token.createToken(tokenUser) });
        }
    },
    // Show the profile page
    async profilePage(req, res) {
        const profile = await profileDataMapper.getOneUserWithId(req.user.id);
        res.json(profile);
    },
    // Send the new data to the database
    async updateProfile(req, res) {
        const { id } = req.user;
        // We get all the old data from the database
        const oldData = await profileDataMapper.getOneUser(id);
        const newData = [];
        newData.push(id);
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
            // TODO: mettre en dynamique
            newData.splice(6, 1, encryptedPassword);
        }
        // We send the new data to the database
        await profileDataMapper.updateProfile(newData);
        res.json({ message: 'Votre profil a bien été mis à jour' });
    },
    // Delete the account from the database
    async deleteProfile(req, res) {
        await profileDataMapper.deleteProfile(req.user.id);
        res.json({ message: 'Votre compte à bien été supprimé' });
    },
    async addressPage(req, res) {
        const addresses = await profileDataMapper.getAddresses(req.user.id);
        return res.json(addresses);
    },
    async createAddress(req, res) {
        const { id } = req.user;
        const address = await profileDataMapper.createAddress(id, req.body);
        res.json(address);
    },
    async getOneAddress(req, res) {
        const addressNumber = req.params.id - 1;
        const address = await profileDataMapper.getOneAddress(req.user.id, addressNumber);
        res.json(address);
    },
    async updateAddress(req, res) {
        const address = await profileDataMapper.updateAddress(req.user.id, req.body);
        res.json(address);
    },
    async deleteAddress(req, res) {
        const { id } = req.params;
        await profileDataMapper.deleteAddress(id);
        res.json({ message: 'L\'adresse à bien été supprimé' });
    },
};

module.exports = profileController;
