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

const router = new Router();

router.route('/login')
    .get(controllerWrapper(profileController.loginPage))
    .post(controllerWrapper(profileController.connection));
router.get('/logout', controllerWrapper(profileController.logout));
router.route('/signup')
    .get(controllerWrapper(profileController.signupPage))
    .post(controllerWrapper(profileController.createAccount));
router.route('/profile')
    .get(controllerWrapper(profileController.profilePage))
    .patch(controllerWrapper(profileController.updateProfile))
    .delete(controllerWrapper(profileController.deleteProfile));
router.route('/profile/address')
    .get(controllerWrapper(profileController.addressPage))
    .post(controllerWrapper(profileController.createAddress));
router.route('/profile/address:id')
    .get(controllerWrapper(profileController.getOneAddress))
    .patch(controllerWrapper(profileController.updateAddress))
    .delete(controllerWrapper(profileController.deleteAddress));

module.exports = router;
