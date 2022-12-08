// admin allproduct page => afficher la liste des produits
// admin single product page => afficher un produit

const client = require('../helpers/db');

const adminDataMapper = {
    // create a new product
    // TODO : ajouter les images dans les requêtes
    async createNewProduct(product) {
        const result = await client.query('INSERT INTO product (name, short_description,full_description, ingredients, packaging, price, stock, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [product.name, product.short_description, product.full_description, product.ingredients, product.packaging, product.price, product.stock, product.category_id]);
        return result.rows[0];
    },
    // update a product
    async updateProduct(newData) {
        const result = await client.query('UPDATE product SET name = $2, short_description = $3, full_description = $4, ingredients = $5, packaging = $6, price = $7, stock = $8, category_id = $9 WHERE id = $1 RETURNING *', newData);
        return result.rows[0];
    },
    // delete a product
    async deleteProduct(id) {
        const result = await client.query('DELETE FROM product WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = adminDataMapper;
