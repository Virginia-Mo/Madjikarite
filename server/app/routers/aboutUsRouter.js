/*
This router take care of all the "about-us" route :
about us madjikarité
producer
production
benefits
*/

const { Router } = require('express');
const aboutUsController = require('../controllers/aboutUsController');

const router = new Router();

router.get('/about-us/madjikarite', aboutUsController.madjikaritePage);
router.get('/about-us/producer', aboutUsController.producerPage);
router.get('/about-us/production', aboutUsController.productionPage);
router.get('/about-us/benefits', aboutUsController.benefitsPage);

module.exports = router;
