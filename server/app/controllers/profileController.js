/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');
// const emailVerification = require('../helpers/securityMail.js');
const token = require('../helpers/tokenHandler.js');
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
        if (!user) throw new UserInputError('Utilisateur inconnu ou mot de passe incorrect');
        // We check if the password is correct
        const result = await bcrypt.compare(password, user.password);
        // If the password is correct, we create a session
        const tokenUser = {
            id: user.id,
            firstName: user.first_name,
            role: user.role_id,
        };
        if (!result) {
            throw new UserInputError('Utilisateur inconnu ou mot de passe incorrect');
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
                email_verified: user.email_verified,
            };
            // const emailToken = emailVerification.sendEmailValidation(user);
            // eslint-disable-next-line max-len
            res.json({ firstName: user.first_name, token: token.createToken(tokenUser) });
        }
    },
    // Show the profile page
    async profilePage(req, res) {
        const profile = await profileDataMapper.getOneUserWithId(req.user.id);
        if (!profile) throw new UserInputError('Utilisateur inconnu');
        const profileData = {
            last_name: profile.last_name,
            first_name: profile.first_name,
            email: profile.email,
            phone_number: profile.phone_number,
        };
        res.json(profileData);
    },
    // Send the new data to the database
    async updateProfile(req, res) {
        const { id } = req.user;
        // We get all the old data from the database
        const oldData = await profileDataMapper.getOneUserWithId(id);
        if (!oldData) throw new UserInputError('Utilisateur inconnu');
        const newData = [];
        newData.push(id);
        const { password } = req.body;
        if (!req.body.last_name) {
            newData.push(oldData.last_name);
        } else {
            newData.push(req.body.last_name);
        }
        if (!req.body.first_name) {
            newData.push(oldData.first_name);
        } else {
            newData.push(req.body.first_name);
        }
        if (!req.body.email) {
            newData.push(oldData.email);
        } else {
            newData.push(req.body.email);
        }
        if (!req.body.phone_number) {
            newData.push(oldData.phone_number);
        } else {
            newData.push(req.body.phone_number);
        }
        if (password) {
            const encryptedPassword = await bcrypt.hash(password, 10);
            newData.splice((newData.length), 1, encryptedPassword);
        } else {
            newData.push(oldData.password);
        }
        // We send the new data to the database
        await profileDataMapper.updateProfile(newData);
        res.json({ message: 'Votre profil a bien été mis à jour' });
    },
    // Delete the account from the database
    async deleteProfile(req, res) {
        await profileDataMapper.deleteProfile(req.user.id);
        res.json({ message: 'Votre compte a bien été supprimé' });
    },
    async addressPage(req, res) {
        const addresses = await profileDataMapper.getAddresses(req.user.id);
        if (!addresses) throw new UserInputError('Aucune adresse trouvée pour cet utilisateur');
        return res.json(addresses);
    },
    async createAddress(req, res) {
        const { id } = req.user;
        const address = await profileDataMapper.createAddress(id, req.body);
        if (!address) throw new UserInputError('Impossible de créer l\'adresse');
        res.json(address);
    },
    async getOneAddress(req, res) {
        const address = await profileDataMapper.getOneAddress(req.user.id);
        if (!address) throw new UserInputError('Impossible de trouver l\'adresse');
        res.json(address);
    },
    // TODO: mauvaise modification, pour le moment modifie l'adresse ayant l'id du user
    async updateAddress(req, res) {
        const data = req.body;
        const oldAdress = await profileDataMapper.getOneAddress(req.user.id);
        // eslint-disable-next-line no-restricted-syntax
        for (const key in data) {
            if (data[key] === '') {
                data[key] = oldAdress[key];
            }
        }
        const address = await profileDataMapper.updateAddress(oldAdress.id, data);
        if (!address) throw new UserInputError('Impossible de modifier l\'adresse');
        res.json(address);
    },
    async deleteAddress(req, res) {
        const { id } = req.params;
        await profileDataMapper.deleteAddress(id);
        res.json({ message: 'L\'adresse à bien été supprimé' });
    },
};

module.exports = profileController;
