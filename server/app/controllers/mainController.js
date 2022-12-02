const mainController = {

    // Show the homepage
    homePage(req, res) {
        res.json({ page: "page d'acceuil" });
    },
    // Show the shopping cart page
    shoppingCartPage(req, res) {
        res.json({ page: 'page du panier' });
    },
    // Show the contact form page
    contactPage(req, res) {
        res.json({ page: 'page de contact' });
    },
    // Post the form from the contact form page
    postForm(req, res) {
        res.json({ page: 'post du formulaire' });
    },
};

module.exports = mainController;
