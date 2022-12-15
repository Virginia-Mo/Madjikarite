const { Router } = require('express');
const orderController = require('../controllers/orderController');
const controllerWrapper = require('../helpers/controllerWrapper');
const authUser = require('../helpers/userMiddleware');

const router = new Router();

router.route('/shopping-cart')
    .get(authUser, controllerWrapper(orderController.shoppingCartPage))
    .post(authUser, controllerWrapper(orderController.postOrder));

module.exports = router;
