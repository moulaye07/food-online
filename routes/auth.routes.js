const router = require('express').Router();
const { signup, signin } = require('../controllers/auth.controller');
const { checkSignupData, checkSigninData, validatorResult } = require('../middleware/auth.middleware');

router.post('/signup', checkSignupData, validatorResult, signup);
router.post('/signin', checkSigninData, validatorResult, signin);

module.exports = router;