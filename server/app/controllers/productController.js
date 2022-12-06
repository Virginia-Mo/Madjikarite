const productDataMapper = require('../models/product.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        // eslint-disable-next-line radix
        const id = parseInt(req.params.id);
        const products = await productDataMapper.getAllProductOfACategory(id);
        res.json(products);
    },
    // Show the page of a single product
    getOneProduct(req, res) {
        res.json({ page: "page d'un produit" });
    },
};

module.exports = productController;
