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
        console.log(req.body);
        const result = await orderDataMapper.postOrder(req.body, req.user.id, addresses);
        console.log(result);
        if (!result) {
            throw new Error('Erreur lors de la création de la commande');
        }
        res.json(result);
    },
};

module.exports = orderController;
