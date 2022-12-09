/*
This router take care of all the "about-us" route :
about us madjikarité
producer
production
benefits
*/

const { Router } = require('express');
const aboutUsController = require('../controllers/aboutUsController');
const controllerWrapper = require('../helpers/controllerWrapper');

const router = new Router();

router.get('/about-us/madjikarite', controllerWrapper(aboutUsController.madjikaritePage));
router.get('/about-us/producer', controllerWrapper(aboutUsController.producerPage));
router.get('/about-us/production', controllerWrapper(aboutUsController.productionPage));
router.get('/about-us/benefits', controllerWrapper(aboutUsController.benefitsPage));

module.exports = router;
