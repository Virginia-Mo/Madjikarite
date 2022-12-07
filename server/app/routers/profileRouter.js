/*
This router take care of all the authentication route and the profile one :
/login
/logout
/signup
/profile
*/

const { Router } = require('express');
const profileController = require('../controllers/profileController');
const controllerwrapper = require('../helpers/controllerWrapper');

const router = new Router();

router.route('/login')
    .get(controllerwrapper(profileController.loginPage))
    .post(profileController.connection);
router.get('/logout', profileController.logout);
router.route('/signup')
    .get(profileController.signupPage)
    .post(profileController.createAccount);
router.route('/profile')
    .get(profileController.profilePage)
    .post(profileController.updateProfile)
    .delete(profileController.deleteProfile);

module.exports = router;
