const router = require('express').Router();
const { signup, signin } = require('../controllers/auth.controller');

router.post('/api/signup', signup);
router.post('/api/signin', signin);

module.exports = router;