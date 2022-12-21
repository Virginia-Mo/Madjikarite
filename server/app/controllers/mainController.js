/* eslint-disable camelcase */
const mainController = {

    // Show the homepage
    homePage(req, res) {
        res.json({ page: "page d'acceuil" });
    },
    // Show the contact form page
    contactPage(req, res) {
        res.json({ page: 'page de contact' });
    },
    // Post the form from the contact form page
    postForm(req, res) {
        const {
            first_name, last_name, email, object, message,
        } = req.body;
        // We verify is all the fields are filled
        const bodyErrors = [];
        if (!first_name) {
            bodyErrors.push('Le prénom est obligatoire');
        }
        if (!last_name) {
            bodyErrors.push('Le nom est obligatoire');
        }
        if (!email) {
            bodyErrors.push('L\'email est obligatoire');
        }
        if (!object) {
            bodyErrors.push('L\'objet est obligatoire');
        }
        if (!message) {
            bodyErrors.push('Le message est obligatoire');
        }

        if (bodyErrors.length) {
            // TODO: changer format de l'erreur
            res.status(400).json({ errors: bodyErrors });
        // If all the fields are filled, we send the form to the database
        } else {
            res.json({ message: 'Votre message a bien été envoyé' });
        }
    },
};

module.exports = mainController;
