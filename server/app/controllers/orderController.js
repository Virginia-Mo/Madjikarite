const orderDataMapper = require('../dataMappers/orderDataMapper.js');
const profileDataMapper = require('../dataMappers/profileDataMapper.js');

const orderController = {
    // Show the shopping cart page
    shoppingCartPage(req, res) {
        res.json({ page: 'page du panier' });
    },
    // Post the order from the shopping cart page
    async postOrder(req, res) {
        const addresses = await profileDataMapper.getAddresses(req.user.id);
        const order = await orderDataMapper.postOrder(req.body, req.user.id, addresses);
        if (!order) {
            // TODO: changer format de l'erreur
            throw new Error('Erreur lors de la création de la commande');
        }
        const newOrder = [];
        for (let i = 0; i < order.cart.length; i += 1) {
            newOrder.push(JSON.parse(order.cart[i]));
        }
        delete order.cart;
        order.cart = newOrder;
        res.json(order);
    },
};

module.exports = orderController;
