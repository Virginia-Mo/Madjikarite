const client = require('../helpers/db');

const productDataMapper = {
    // Get all the product of a category
    async getAllProductOfACategory(id) {
        const result = await client.query('SELECT "product"."id", "product"."name" AS "product_name", "product"."short_description", "product"."full_description", "product"."ingredients", "product"."packaging", "product"."weight", "product"."price", "product"."stock", "product"."category_id", "category"."name" AS "category_name", "product"."created_at" FROM "product" JOIN "category" ON "product"."category_id" = "category"."id" WHERE "category_id" = $1', [id]);
        return result.rows;
    },
    // Get all the pictures
    async getAllPictures(id) {
        const result = await client.query('SELECT "picture"."id", "picture"."name", "picture"."description", "picture"."url" FROM "picture" JOIN "represent" ON "represent"."picture_id" = "picture"."id" WHERE "product_id" = $1', [id]);
        return result.rows;
    },
    // Get one product
    async getOneProduct(id) {
        const result = await client.query('SELECT "product"."id", "product"."name" AS "product_name", "product"."short_description", "product"."full_description", "product"."ingredients", "product"."packaging", "product"."weight", "product"."price", "product"."stock", "product"."category_id", "category"."name" AS "category_name", "product"."created_at" FROM "product" JOIN "category" ON "product"."category_id" = "category"."id" WHERE "product"."id" = $1', [id]);
        return result.rows[0];
    },
    // Get all the product
    async getAllProduct() {
        const result = await client.query('SELECT "product"."id", "product"."name" AS "product_name", "product"."short_description", "product"."full_description", "product"."ingredients", "product"."packaging", "product"."weight", "product"."price", "product"."stock", "product"."category_id", "category"."name" AS "category_name", "product"."created_at" FROM "product" JOIN "category" ON "product"."category_id" = "category"."id"');
        return result.rows;
    },
};

module.exports = productDataMapper;
