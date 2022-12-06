const client = require('../helpers/db');

const productDataMapper = {
    // Get all the product of a category
    async getAllProductOfACategory(id) {
        const result = await client.query('SELECT * FROM product WHERE category_id = $1', [id]);
        return result.rows;
    },
    // Get one product
    async getOneProduct(id) {
        const result = await client.query('SELECT * FROM product WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = productDataMapper;
