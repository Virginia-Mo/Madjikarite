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
const controllerWrapper = require('../helpers/controllerWrapper');

const router = new Router();

router.get('/admin/products', (adminController.getProductsPage)); // home page admin
router.route('/admin/new-product')
    .get(controllerWrapper(adminController.getCreateNewProductPage)) // create a new product page
    .post(controllerWrapper(adminController.validateFormNewProduct)); // validate new product
router.route('/admin/product:id')
    .get(controllerWrapper(adminController.getOneProduct)) // view product page
    .patch(controllerWrapper(adminController.updateProduct)) // update product
    .delete(controllerWrapper(adminController.deleteProduct)); // delete product
router.route('/admin/orders')
    .get(controllerWrapper(adminController.viewListingOrder)); // view order list
router.route('/admin/order:id')
    .get(controllerWrapper(adminController.getAnOrderPage)) // view order page
    .patch(controllerWrapper(adminController.updateOrder)) // update order
    .delete(controllerWrapper(adminController.deleteOrder)); // delete order

module.exports = router;
