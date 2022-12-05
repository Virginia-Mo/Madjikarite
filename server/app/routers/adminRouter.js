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

router.get('/admin/product', adminController.adminProductPage); // home page admin
router.route('/admin/newProduct')
    .get(adminController.createNewProduct) // create new product
    .post(adminController.validateFormNewProduct); // validate new product
router.route('/admin/product:id')
    .get(adminController.productAdministration) // view product page
    .patch(adminController.updateProduct) // update product
    .delete(adminController.adminDeleteProduct); // delete product
router.route('/admin/orders')
    .get(adminController.viewListingOrder) // view order list
    .patch(adminController.updateOrder) // update order
    .delete(adminController.deleteOrder); // delete order
router.route('/admin/order:id')
    .get(adminController.orderAdministration) // view order page
    .patch(adminController.updateOrder) // update order
    .delete(adminController.deleteOrder); // delete order
router.get('/admin/logOut', adminController.adminlogOut); // log out

module.exports = router;
