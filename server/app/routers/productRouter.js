/*
This router take care of all the product related route :
/category:id/products
/category:id/products:id
*/

const { Router } = require('express');
const productController = require('../controllers/productController');

const router = new Router();

router.get('/category:id/product', productController.getProductOfACategory);
router.get('/category:id/product:id', productController.getOneProduct);

module.exports = router;
