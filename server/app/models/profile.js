const client = require('../helpers/db');

const profileDataMapper = {
    // Add a new profile to the database
    async createAnAccount(profile) {
        const result = await client.query('INSERT INTO "user" (civility, last_name, first_name, email, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [profile.civility, profile.last_name, profile.first_name, profile.email, profile.phone_number, profile.encryptedPassword]);
        return result.rows[0];
    },
};

module.exports = profileDataMapper;
