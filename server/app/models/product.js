const pg = require('pg');

const { Client } = pg;

const options = {
    connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === 'production') {
    options.ssl = {
        rejectUnauthorized: false,
    };
}

const client = new Client(options);

const productDataMapper = {
    // // Get all the product of a category
    // async getAllProductOfACategory(id) {
    //     console.log('je passe dans models');
    //     const result = await client.query(`SELECT * FROM product WHERE category_id = ${id}`);
    //     console.log(result);
    //     return result.rows;
    // },
};

module.exports = productDataMapper;
