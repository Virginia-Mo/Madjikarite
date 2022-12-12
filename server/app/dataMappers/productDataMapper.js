const client = require('../helpers/db');

const productDataMapper = {
    // Get all the product of a category
    async getAllProductOfACategory(id) {
        const result = await client.query('SELECT "product"."id", "product"."name" AS "nom du produit", "product"."short_description", "product"."full_description", "product"."ingredients", "product"."packaging", "product"."price", "product"."stock", "product"."category_id", "product"."created_at" FROM "product" WHERE "category_id" = $1', [id]);
        return result.rows;
    },
    // Get all the pictures
    async getAllPictures(id) {
        const result = await client.query('SELECT "picture"."id", "picture"."name", "picture"."description", "picture"."url" FROM "picture" JOIN "represent" ON "represent"."picture_id" = "picture"."id" WHERE "product_id" = $1', [id]);
        return result.rows;
    },
    // Get one product
    async getOneProduct(id) {
        const result = await client.query('SELECT * FROM "product" WHERE id = $1', [id]);
        return result.rows[0];
    },
    // Get all the product
    async getAllProduct() {
        const result = await client.query('SELECT * FROM "product"');
        return result.rows;
    },
};

module.exports = productDataMapper;
