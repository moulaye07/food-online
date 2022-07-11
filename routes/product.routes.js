const router = require('express').Router();
const { authentification } = require('../middleware/authentification.jwt');
const productController = require('../controllers/product.controller');
const upload = require('../middleware/upload.file');

router.post('/', upload.single('image'), productController.createProduct);

module.exports = router;