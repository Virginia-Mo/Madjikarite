// We import express and all the other router
const { Router } = require('express');
const aboutUsRouter = require('./aboutUsRouter');
const adminRouter = require('./adminRouter');
const productRouter = require('./productRouter');
const profileRouter = require('./profileRouter');
const orderRouter = require('./orderRouter');
const mainController = require('../controllers/mainController');
const controllerWrapper = require('../helpers/controllerWrapper');

// We create a new router
const router = new Router();

// We redirect to the main controller
router.get('/', controllerWrapper(mainController.homePage));
router.route('/contact')
    .get(controllerWrapper(mainController.contactPage))
    .post(controllerWrapper(mainController.postForm));

// We redirect to all of the specialised router
router.use(aboutUsRouter);
router.use(adminRouter);
router.use(productRouter);
router.use(profileRouter);
router.use(orderRouter);

// We do not forget to export the module to get access to it from everywhere
module.exports = router;
