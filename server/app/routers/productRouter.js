/*
This router take care of all the product related route :
/category:id/products
/category:id/products:id
*/

const { Router } = require('express');
const productController = require('../controllers/productController');
const controllerWrapper = require('../helpers/controllerWrapper');

const router = new Router();

router.get('/products', controllerWrapper(productController.getAllProducts));
router.get('/product:id', controllerWrapper(productController.getOneProduct));
router.get('/category:id/products', controllerWrapper(productController.getProductOfACategory));
router.get('/categories', controllerWrapper(productController.getAllCategories));

module.exports = router;
