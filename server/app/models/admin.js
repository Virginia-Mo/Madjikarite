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
};

module.exports = adminDataMapper;
