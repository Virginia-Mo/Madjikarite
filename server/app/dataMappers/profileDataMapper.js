const client = require('../helpers/db');

const profileDataMapper = {
    // Add a new profile to the database
    async createAccount(profile) {
        const result = await client.query('INSERT INTO "user" (civility, last_name, first_name, email, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [profile.civility, profile.last_name, profile.first_name, profile.email, profile.phone_number, profile.encryptedPassword]);
        return result.rows[0];
    },
    // Get one user from the database
    async getOneUserWithEmail(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },
    // Update a profile in the database
    async updateProfile(newData) {
        const result = await client.query('UPDATE "user" SET civility = $2, last_name = $3, first_name = $4, email = $5, phone_number = $6, password = $7 WHERE id = $1 RETURNING *', newData);
        return result.rows[0];
    },
    // Delete a profile from the database
    async deleteProfile(id) {
        const result = await client.query('DELETE FROM "user" WHERE id = $1', [id]);
        return result.rows[0];
    },
    async getOneUserWithId(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);
        return {
            // eslint-disable-next-line max-len
            civility: result.rows[0].civility, last_name: result.rows[0].last_name, first_name: result.rows[0].first_name, email: result.rows[0].email, phone_number: result.rows[0].phone_number,
        };
    },
    async getAddresses(id) {
        const result = await client.query('SELECT "address"."address", "address"."zip_code", "address"."city", "address"."country" FROM "user" JOIN "live_in" ON "live_in"."user_id" = "user"."id" JOIN "address" ON "live_in"."address_id" = "address"."id" WHERE "user"."id" = $1', [id]);
        return result.rows;
    },
    async createAddress(id, address) {
        console.log(id);
        console.log(address);
        const resultAddress = await client.query('INSERT INTO "address" (address, zip_code, city, country) VALUES ($1, $2, $3, $4) RETURNING "address"."id"', [address.address, address.zip_code, address.city, address.country]);
        const addressId = resultAddress.rows[0].id;
        console.log(addressId);
        const result = await client.query('INSERT INTO "live_in" (user_id, address_id) VALUES ($1, $2)', [id, addressId]);
        return result.rows[0];
    },
    async getOneAddress(id) {
        const result = await client.query('SELECT * FROM "address" WHERE id = $1', [id]);
        return result.rows[0];
    },
    async updateAddress(id, address) {
        const result = await client.query('UPDATE "address" SET address = $2, zip_code = $3, city = $4, country = $5 WHERE id = $1 RETURNING *', [id, address.address, address.zip_code, address.city, address.country]);
        return result.rows[0];
    },
    async deleteAddress(id) {
        const result = await client.query('DELETE FROM "address" WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = profileDataMapper;
