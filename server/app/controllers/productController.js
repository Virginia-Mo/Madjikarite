const productDataMapper = require('../dataMappers/productDataMapper.js');
const NotFoundError = require('../helpers/notFoundError.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        const id = parseInt(req.params.id, 10);
        const products = await productDataMapper.getAllProductOfACategory(id);
        if (products.length === 0) {
            throw new NotFoundError('La catégorie demandée n\'existe pas');
        } else { res.json(products); }
    },
    // Show the page of a single product
    async getOneProduct(req, res) {
        const id = parseInt(req.params.id, 10);
        const product = await productDataMapper.getOneProduct(id);
        if (!product) {
            throw new NotFoundError('Le produit demandé n\'existe pas');
        }
        res.json(product);
    },
    // Show all the product
    async getAllProducts(req, res) {
        const products = await productDataMapper.getAllProduct();
        res.json(products);
    },
};

module.exports = productController;
