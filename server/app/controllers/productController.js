const productDataMapper = require('../dataMappers/productDataMapper.js');
const NotFoundError = require('../helpers/notFoundError.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        const id = parseInt(req.params.id, 10);
        const products = await productDataMapper.getAllProductOfACategory(id);
        if (!products) {
            throw new NotFoundError('La catégorie demandée n\'existe pas');
        }
        res.json(products);
    },
    // Show the page of a single product
    async getOneProduct(req, res) {
        const id = parseInt(req.params.id, 10);
        const product = await productDataMapper.getOneProduct(id);
        res.json(product);
    },
    async getAllProducts(req, res) {
        const products = await productDataMapper.getAllProduct();
        res.json(products);
    },
};

module.exports = productController;
