/*
about us/ madjikarité => découvrir madjikarité, son histoire
about us / producer => informations sur les productrices
about us production => informations sur le processus de fabrication
about us benefits => informations sur les bienfaits du beurre de karité
 */

const client = require('../helpers/db');

const aboutUsDataMapper = {
    // Get the "Madjikarité" page
    async getMadjikaritePage() {
        const result = await client.query('SELECT * FROM about_us WHERE id = 1');
        return result.rows[0];
    },
};

module.exports = aboutUsDataMapper;
