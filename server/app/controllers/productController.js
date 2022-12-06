const productDataMapper = require('../dataMappers/productDataMapper.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        // eslint-disable-next-line radix
        const id = parseInt(req.params.id);
        const products = await productDataMapper.getAllProductOfACategory(id);
        res.json(products);
    },
    // Show the page of a single product
    async getOneProduct(req, res) {
        // eslint-disable-next-line radix
        const id = parseInt(req.params.id);
        const product = await productDataMapper.getOneProduct(id);
        res.json(product);
    },
};

module.exports = productController;
