const { Router } = require('express');
const mailController = require('../controllers/mailController');
// const controllerWrapper = require('../helpers/controllerWrapper');
// const authUser = require('../helpers/userMiddleware');
// const validate = require('../validations/validate');
// const profileCreateSchema = require('../validations/schemas/profileCreateSchema');
// const loginSchema = require('../validations/schemas/loginSchema');

const router = new Router();

router.route('/forgot-password')
    .post(mailController.postForgotPassword);

router.route('/reset-password/:id/:token')
    .get(mailController.getResetPassword)
    .post(mailController.postResetPassword);

module.exports = router;
