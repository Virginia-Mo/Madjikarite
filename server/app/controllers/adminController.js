const adminDataMapper = require('../dataMappers/adminDataMapper');
const productDataMapper = require('../dataMappers/productDataMapper');
const NotFoundError = require('../helpers/notFoundError');
const UserInputError = require('../helpers/userInputError');

const adminController = {

    // Homepage back office
    async getProductsPage(req, res) {
        const products = await productDataMapper.getAllProduct();
        res.json(products);
    },

    // get the create new product page
    async getCreateNewProductPage(req, res) {
        res.json({ page: 'page adminNewProductPage' });
    },

    // validate new produit
    async validateFormNewProduct(req, res) {
        if (!req.body.name || !req.body.short_description
            || !req.body.full_description || !req.body.ingredients
            || !req.body.packaging || !req.body.price || !req.body.stock
            || !req.body.category_id) {
            throw new UserInputError('Tous les champs ne sont pas remplis');
        }
        const product = await adminDataMapper.createNewProduct(req.body);
        if (!product) {
            throw new UserInputError('Le produit n\'a pas pu être créé');
        }
        res.json(product);
    },

    // get one product page
    async getOneProduct(req, res) {
        const product = await productDataMapper.getOneProduct(req.params.id);
        if (!product) {
            throw new NotFoundError('Le produit n\'existe pas');
        }
        res.json(product);
    },

    // update product
    async updateProduct(req, res) {
        // eslint-disable-next-line camelcase
        const product_id = parseInt(req.params.id, 10);
        const oldData = await productDataMapper.getOneProduct(product_id);
        const newData = [];
        newData.push(product_id);
        // eslint-disable-next-line no-restricted-syntax
        for (const key in req.body) {
            if (req.body[key] === '') {
                newData.push(oldData[key]);
            } else {
                newData.push(req.body[key]);
            }
        }
        const updatedProduct = await adminDataMapper.updateProduct(newData);
        res.json(updatedProduct);
    },

    // delete product
    async deleteProduct(req, res) {
        await adminDataMapper.deleteProduct(req.params.id);
        res.json({ message: 'Le produit à été supprimé' });
    },

    // get all the order page
    async viewListingOrder(req, res) {
        const orders = await adminDataMapper.getAllOrders();
        res.json(orders);
    },

    // get an order page
    async getAnOrderPage(req, res) {
        const orderId = parseInt(req.params.id, 10);
        const user = await adminDataMapper.getOneOrderUser(orderId);
        const order = await adminDataMapper.getOneOrderProducts(orderId);
        if (!user) {
            throw new NotFoundError('La commande n\'existe pas');
        }
        const newOrder = [];
        for (let i = 0; i < order.cart.length; i += 1) {
            newOrder.push(JSON.parse(order.cart[i]));
        }
        res.json({ user, order: newOrder });
    },

    // update order
    updateOrder(req, res) {
        res.json({ page: 'La commande à été mise à jour' });
    },

    // delete order
    async deleteOrder(req, res) {
        const id = parseInt(req.params.id, 10);
        await adminDataMapper.deleteOrder(id);
        res.json({ message: 'La commande à été supprimé' });
    },
};

module.exports = adminController;
