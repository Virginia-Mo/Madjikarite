const productDataMapper = require('../dataMappers/productDataMapper.js');
const NotFoundError = require('../helpers/notFoundError.js');

const productController = {

    // Show all the product of the selected category
    async getProductOfACategory(req, res) {
        const id = parseInt(req.params.id, 10);
        const products = await productDataMapper.getAllProductOfACategory(id);
        const newProducts = [];
        for (let i = 0, len = products.length; i < len; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const picture = await productDataMapper.getAllPictures(products[i].id);
            const newProduct = products[i];
            newProduct.pictures = picture;
            newProducts.push(newProduct);
        }
        if (products.length === 0) {
            throw new NotFoundError('La catégorie demandée n\'existe pas');
        } else { res.json(newProducts); }
    },
    // Show the page of a single product
    async getOneProduct(req, res) {
        const id = parseInt(req.params.id, 10);
        const product = await productDataMapper.getOneProduct(id);
        const newProducts = [];
        const pictures = await productDataMapper.getAllPictures(product.id);
        const newProduct = product;
        newProduct.pictures = pictures;
        newProducts.push(newProduct);
        if (!product) {
            throw new NotFoundError('Le produit demandé n\'existe pas');
        }
        res.json(product);
    },
    // Show all the product
    async getAllProducts(req, res) {
        const products = await productDataMapper.getAllProduct();
        const newProducts = [];
        for (let i = 0, len = products.length; i < len; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const picture = await productDataMapper.getAllPictures(products[i].id);
            const newProduct = products[i];
            newProduct.pictures = picture;
            newProducts.push(newProduct);
        }
        res.json(products);
    },
    // get all categories page
    async getAllCategories(req, res) {
        const categories = await productDataMapper.getAllCategories();
        res.json(categories);
    },
};

module.exports = productController;
