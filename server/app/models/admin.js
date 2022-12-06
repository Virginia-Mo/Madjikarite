// admin allproduct page => afficher la liste des produits
// admin single product page => afficher un produit

const client = require('../helpers/db');

const adminDataMapper = {
    // Get all the product
    async getAllProduct() {
        const result = await client.query('SELECT * FROM product');
        return result.rows;
        console.log(result.rows);
    },

    // Get one product page
    async getOneProduct(id) {
        const result = await client.query('SELECT * FROM product WHERE id = $1', [id]);
        return result.rows[0];
        console.log(result.rows[0]);
    },

};

module.exports = adminDataMapper;
