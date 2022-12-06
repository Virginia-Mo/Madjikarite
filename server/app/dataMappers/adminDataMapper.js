// admin allproduct page => afficher la liste des produits
// admin single product page => afficher un produit

const client = require('../helpers/db');

const adminDataMapper = {
    // Get all the product
    async getAllProduct() {
        const result = await client.query('SELECT * FROM product');
        console.log(result.rows);
        return result.rows;
    },

    // Get one product page
    async getOneProduct(id) {
        const result = await client.query('SELECT * FROM product WHERE id = $1', [id]);
        console.log(result.rows[0]);
        return result.rows[0];
    },

};

module.exports = adminDataMapper;
