// admin allproduct page => afficher la liste des produits
// admin single product page => afficher un produit

const client = require('../helpers/db');

const adminDataMapper = {
    // create a new product
    async createNewProduct(product) {
        const result = await client.query('INSERT INTO product (name, short_description, full_description, ingredients, packaging, weight, price, stock, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [product.name, product.short_description, product.full_description, product.ingredients, product.packaging, product.weight, product.price, product.stock, product.category_id]);
        return result.rows[0];
    },
    // add a picture to a product
    async addPictureToProduct(id, picture) {
        const insertPicture = await client.query('INSERT INTO picture (name, url) VALUES ($1, $2) RETURNING *', [picture.picture_name, picture.picture_url]);
        const insertRepresent = await client.query('INSERT INTO represent (product_id, picture_id) VALUES ($1, $2) RETURNING *', [id, insertPicture.rows[0].id]);
        return insertRepresent.rows[0];
    },
    // update a product
    async updateProduct(newData) {
        const result = await client.query('UPDATE product SET name = $2, short_description = $3, full_description = $4, ingredients = $5, packaging = $6, weight = $7, price = $8, stock = $9, category_id = $10 WHERE id = $1 RETURNING *', newData);
        return result.rows[0];
    },
    // delete a product
    async deleteProduct(id) {
        const result = await client.query('DELETE FROM product WHERE id = $1', [id]);
        return result.rows[0];
    },
    // get all the orders
    async getAllOrders() {
        const result = await client.query('SELECT * FROM "order"');
        return result.rows;
    },
    // get the user that made the order
    async getOneOrderUser(id) {
        const result = await client.query('SELECT "order"."id" AS "order_number", "user"."id" AS "user_id", "user"."last_name", "user"."first_name", "user"."email", "user"."phone_number", "address"."id" AS "address_id", "address"."address", "address"."zip_code", "address"."city", "address"."country" FROM "order" JOIN "user" ON "order"."user_id" = "user"."id" JOIN "live_in" ON "live_in"."user_id" = "user"."id" JOIN "address" ON "live_in"."address_id" = "address"."id" WHERE "order"."id" = $1', [id]);
        return result.rows[0];
    },
    // get the products of the order
    async getOneOrderProducts(id) {
        const result = await client.query('SELECT "cart", "message", "final_price", "created_at" AS "order_date" FROM "order" WHERE "id" = $1', [id]);
        return result.rows[0];
    },
    // delete an order
    async deleteOrder(id) {
        const result = await client.query('DELETE FROM "order" WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = adminDataMapper;
