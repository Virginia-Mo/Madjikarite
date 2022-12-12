/*
This router take care of all the authentication route and the profile one :
/login
/logout
/signup
/profile
*/

const { Router } = require('express');
const profileController = require('../controllers/profileController');
const controllerWrapper = require('../helpers/controllerWrapper');
const authUser = require('../helpers/userMiddleware');

const router = new Router();

router.route('/login')
    .get(controllerWrapper(profileController.loginPage))
    .post(controllerWrapper(profileController.connection));
router.get('/logout', controllerWrapper(profileController.logout));
router.route('/signup')
    .get(controllerWrapper(profileController.signupPage))
    .post(controllerWrapper(profileController.createAccount));
router.route('/profile')
    .get(authUser, controllerWrapper(profileController.profilePage))
    .patch(authUser, controllerWrapper(profileController.updateProfile))
    .delete(authUser, controllerWrapper(profileController.deleteProfile));
router.route('/profile/address')
    .get(authUser, controllerWrapper(profileController.addressPage))
    .post(authUser, controllerWrapper(profileController.createAddress));
router.route('/profile/address:id')
    .get(authUser, controllerWrapper(profileController.getOneAddress))
    .patch(authUser, controllerWrapper(profileController.updateAddress))
    .delete(authUser, controllerWrapper(profileController.deleteAddress));

module.exports = router;
