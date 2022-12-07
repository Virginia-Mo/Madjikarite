/*
This router take care of all the product related route :
/category:id/products
/category:id/products:id
*/

const { Router } = require('express');
const productController = require('../controllers/productController');

const router = new Router();

router.get('/products', productController.getAllProducts);
router.get('/product:id', productController.getOneProduct);
router.get('/category:id/products', productController.getProductOfACategory);

module.exports = router;
