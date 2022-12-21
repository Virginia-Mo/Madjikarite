const productDataMapper = require('../dataMappers/productDataMapper.js');
const NotFoundError = require('../helpers/notFoundError.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        const id = parseInt(req.params.id, 10);
        const products = await productDataMapper.getAllProductOfACategory(id);
        if (products.length === 0) {
            throw new NotFoundError('La catégorie demandée n\'existe pas');
        }
        const newProducts = [];
        for (let i = 0, len = products.length; i < len; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const picture = await productDataMapper.getAllPictures(products[i].id);
            const newProduct = products[i];
            newProduct.pictures = picture;
            newProducts.push(newProduct);
        }
        res.json(newProducts);
    },
    // Show the page of a single product
    async getOneProduct(req, res) {
        const id = parseInt(req.params.id, 10);
        const product = await productDataMapper.getOneProduct(id);
        if (!product) {
            throw new NotFoundError('Le produit demandé n\'existe pas');
        }
        const newProducts = [];
        const pictures = await productDataMapper.getAllPictures(product.id);
        // TODO: erreur ou alerte si pas de photo
        const newProduct = product;
        newProduct.pictures = pictures;
        newProducts.push(newProduct);
        res.json(product);
    },
    // Show all the product
    async getAllProducts(req, res) {
        const products = await productDataMapper.getAllProduct();
        // TODO: si pas de produits, renvoyer une erreur
        const newProducts = [];
        for (let i = 0, len = products.length; i < len; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const picture = await productDataMapper.getAllPictures(products[i].id);
            const newProduct = products[i];
            newProduct.pictures = picture;
            newProducts.push(newProduct);
        }
        res.json(newProducts);
    },
    // get all categories page
    async getAllCategories(req, res) {
        const categories = await productDataMapper.getAllCategories();
        // TODO: si pas de catégories, renvoyer une erreur
        res.json(categories);
    },
};

module.exports = productController;
