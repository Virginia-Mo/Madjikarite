const { Router } = require('express');
const mailController = require('../controllers/mailController');
const controllerWrapper = require('../helpers/controllerWrapper');

const router = new Router();

router.route('/forgot-password')
    .post(controllerWrapper(mailController.postForgotPassword));

router.route('/reset-password/:id/:token')
    .get(controllerWrapper(mailController.getResetPassword))
    .post(controllerWrapper(mailController.postResetPassword));

router.get('/verify-email/:id/:token', controllerWrapper(mailController.getVerifyEmail));

module.exports = router;
