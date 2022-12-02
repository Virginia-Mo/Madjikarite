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
    createAccount(req, res) {
        res.json({ page: 'création du compte' });
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
