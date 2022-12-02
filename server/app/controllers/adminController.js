const adminController = {

    // page d'accueil back office
    adminProductPage(req, res) {
        res.json({ page: 'page admin producer' });
    },

    // créer nouveau produit
    createNewProduct(req, res) {
        console.log('');
        res.json({ page: 'page adminNewProduct Page' });
    },

    // valider le nouveau produit
    validateFormNewProduct(req, res) {
        console.log('Le formulaire admin à été validé ');
        res.json({ page: 'Le formulaire admin à été validé' });
    },

    // Page d’un produit pouvant être modifié
    productAdministration(req, res) {
        console.log('page adminProductIdPage');
        res.json({ page: 'page adminProductIdPage' });
    },

    // mettre à jour un produit
    updateProduct(req, res) {
        console.log('Le produit à été mis à jour');
        res.json({ page: 'Le produit à été mis à jour' });
    },

    // supprimer un produit
    adminDeleteProduct(req, res) {
        console.log('Le produit à été supprimé');
        res.json({ page: 'Le produit à été supprimé' });
    },

    // Page de listing des commandes
    viewListingOrder(req, res) {
        console.log('page adminOrderPage');
        res.json({ page: 'page adminOrderPage' });
    },

    // modifier une commande
    // updateOrder(req, res) {
    //     console.log('page adminOrderPage');
    //     res.json({ page: 'page adminOrderPage' });
    // },

    // deleteOrder(req, res) {
    //     console.log('page adminOrderPage');
    // }, suppression rapide via la page de listing des commandes.

    // Page d’affichage d’une commande
    orderAdministration(req, res) {
        console.log('page adminOrderIdPage');
        res.json({ page: 'page adminOrderIdPage' });
    },

    // mise à jour d'une commande
    updateOrder(req, res) {
        console.log('La commande à été mise à jour');
        res.json({ page: 'La commande à été mise à jour' });
    },

    // suppression d'une commande
    deleteOrder(req, res) {
        console.log('La commande à été supprimée');
        res.json({ page: 'La commande à été supprimée' });
    },

    // quitter une session
    adminlogOut(req, res) {
        res.json({ page: 'page adminLogOut' });
    },
};

module.exports = adminController;
