const pg = require('pg');

const { Client } = pg;

const client = new Client(process.env.PGURL);

client.connect();

module.exports = client;
