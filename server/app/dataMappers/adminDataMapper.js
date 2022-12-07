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

    // create a new product
    // TODO : ajouter les images dans les requêtes
    async createNewProduct(product) {
        const result = await client.query('INSERT INTO product (name, short_description,full_description, ingredients, packaging, price, stock, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [product.name, product.short_description, product.full_description, product.ingredients, product.packaging, product.price, product.stock, product.category_id]);
        return result.rows[0];
    },
};

module.exports = adminDataMapper;
