const client = require('../helpers/db');

const orderDataMapper = {
    // Post an order
    async postOrder(order, userId, addresses) {
        const result = await client.query('INSERT INTO "order" (cart, message, final_price, user_id, address_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [order.cart, order.message, order.final_price, userId, addresses[0].id]);
        return result.rows[0];
    },
};

module.exports = orderDataMapper;
