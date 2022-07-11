const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { authentification } = require('../middleware/authentification.jwt');

router.post('/', categoryController.createCategory);
router.get('/', categoryController.readAllCategory);

module.exports = router;