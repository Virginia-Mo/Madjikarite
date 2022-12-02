/*
This router is about admin routes

admin product
admin product new product
admin product:id
admin order
admin order:id
admin logout
*/

const { Router } = require('express');
const adminController = require('../controllers/adminController');

const router = new Router();

router.get('/admin/product', adminController.adminProductPage); // Page d'accueil admin
router.route('/admin/newProduct') // Page de création d’un nouveau produit/catégorie
    .get(adminController.createNewProduct) // créer nouveau produit
    .post(adminController.validateFormNewProduct); // valider le nouveau produit
router.route('/admin/product:id') // Page d’un produit pouvant être modifié
    .get(adminController.productAdministration)
    .patch(adminController.updateProduct) // mettre à jour un produit
    .delete(adminController.adminDeleteProduct); // supprimer un produit
router.route('/admin/orders')
    .get(adminController.viewListingOrder) // Page de listing des commandes
    .patch(adminController.updateOrder) // modifier une commande
    .delete(adminController.deleteOrder); // supprimer une commande
router.route('/admin/order:id')
    .get(adminController.orderAdministration) // Page d’affichage d’une commande
    .patch(adminController.updateOrder) // mise à jour d'une commande
    .delete(adminController.deleteOrder); // suppression d'une commande
router.get('/admin/logOut', adminController.adminlogOut); // quitter une session

module.exports = router;
