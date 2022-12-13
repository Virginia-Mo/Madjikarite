/* eslint-disable max-len */
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
const adminMiddleware = require('../helpers/adminMiddleware');
// const authUser = require('../helpers/userMiddleware');

const router = new Router();

router.get('/admin/products', adminMiddleware(1), (adminController.getProductsPage)); // home page admin
router.route('/admin/new-product')
    .get(adminMiddleware(1), controllerWrapper(adminController.getCreateNewProductPage)) // create a new product page
    .post(adminMiddleware(1), controllerWrapper(adminController.validateFormNewProduct)); // validate new product
router.route('/admin/product:id')
    .get(adminMiddleware(1), controllerWrapper(adminController.getOneProduct)) // view product page
    .patch(adminMiddleware(1), controllerWrapper(adminController.updateProduct)) // update product
    .delete(adminMiddleware(1), controllerWrapper(adminController.deleteProduct)); // delete product
router.route('/admin/orders')
    .get(adminMiddleware(1), controllerWrapper(adminController.viewListingOrder)); // view order list
router.route('/admin/order:id')
    .get(adminMiddleware(1), controllerWrapper(adminController.getAnOrderPage)) // view order page
    .patch(adminMiddleware(1), controllerWrapper(adminController.updateOrder)) // update order
    .delete(adminMiddleware(1), controllerWrapper(adminController.deleteOrder)); // delete order

module.exports = router;
