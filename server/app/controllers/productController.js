const productDataMapper = require('../models/product.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        // console.log(req.params.id);
        const products = await productDataMapper.getAllProductOfACategory(req.params.id);
        // console.log(products);
        res.json(products);
    },
    // Show the page of a single product
    getOneProduct(req, res) {
        res.json({ page: "page d'un produit" });
    },
};

module.exports = productController;
