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
    // get all the orders
    async getAllOrders() {
        const result = await client.query('SELECT * FROM "shopping_cart"');
        return result.rows;
    },
    // get the user that made the order
    async getOneOrderUser(id) {
        const result = await client.query('SELECT "shopping_cart"."id" AS "Numéro de commande", "user"."id" AS "user_id", "user"."civility", "user"."last_name", "user"."first_name", "user"."email", "user"."phone_number" FROM "shopping_cart" JOIN "user" ON "shopping_cart"."user_id" = "user"."id" WHERE "shopping_cart"."id" = $1', [id]);
        return result.rows[0];
    },
    // get all addresses of a user
    async getAllAddressesOfAUser(id) {
        const result = await client.query('SELECT "address"."address", "address"."zip_code", "address"."city", "address"."country" FROM "user" JOIN "live_in" ON "live_in"."user_id" = "user"."id" JOIN "address" ON "live_in"."address_id" = "address"."id" WHERE "user"."id" = $1', [id]);
        return result.rows;
    },
    // get all items of an order
    async getAllItemsOfAnOrder(id) {
        const result = await client.query('SELECT "product_id", "product"."name", "quantity", "product"."packaging", "product"."price" FROM "shopping_cart_lign" JOIN "product" ON "shopping_cart_lign"."product_id" = "product"."id" WHERE shopping_cart_id = $1', [id]);
        return result.rows;
    },
    // delete an order
    async deleteOrder(id) {
        const result = await client.query('DELETE FROM "shopping_cart" WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = adminDataMapper;
