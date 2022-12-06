const adminDataMapper = require('../dataMappers/adminDataMapper');

const adminController = {

    // Homepage back office
    async adminProductPage(req, res) {
        const id = parseInt(req.params.id, 10);
        const product = await adminDataMapper.getAllProduct(id);
        res.json(product);
    },

    // create new product
    createNewProduct(req, res) {
        console.log('');
        res.json({ page: 'page adminNewProduct Page' });
    },

    // validate new produit
    validateFormNewProduct(req, res) {
        console.log('Le formulaire admin à été validé ');
        res.json({ page: 'Le formulaire admin à été validé' });
    },

    // Page d’un produit pouvant être modifié
    productAdministration(req, res) {
        console.log('page adminProductIdPage');
        res.json({ page: 'page adminProductIdPage' });
    },

    // update new product
    updateProduct(req, res) {
        console.log('Le produit à été mis à jour');
        res.json({ page: 'Le produit à été mis à jour' });
    },

    // delete product
    adminDeleteProduct(req, res) {
        console.log('Le produit à été supprimé');
        res.json({ page: 'Le produit à été supprimé' });
    },

    // Listing order page
    viewListingOrder(req, res) {
        console.log('page adminOrderPage');
        res.json({ page: 'page adminOrderPage' });
    },

    // view order page
    orderAdministration(req, res) {
        console.log('page adminOrderIdPage');
        res.json({ page: 'page adminOrderIdPage' });
    },

    // update order
    updateOrder(req, res) {
        console.log('La commande à été mise à jour');
        res.json({ page: 'La commande à été mise à jour' });
    },

    // delete order
    deleteOrder(req, res) {
        console.log('La commande à été supprimée');
        res.json({ page: 'La commande à été supprimée' });
    },

    // log out
    adminlogOut(req, res) {
        res.json({ page: 'page adminLogOut' });
    },
};

module.exports = adminController;
