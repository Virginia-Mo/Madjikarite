const client = require('../helpers/db');

const profileDataMapper = {
    // Add a new profile to the database
    async createAccount(profile) {
        const result = await client.query('INSERT INTO "user" (civility, last_name, first_name, email, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [profile.civility, profile.last_name, profile.first_name, profile.email, profile.phone_number, profile.encryptedPassword]);
        return result.rows[0];
    },
    async getOneUser(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },
    async updateProfile(newData) {
        const result = await client.query('UPDATE "user" SET civility = $2, last_name = $3, first_name = $4, email = $5, phone_number = $6, password = $7 WHERE id = $1', newData);
        return result.rows[0];
    },
};

module.exports = profileDataMapper;
