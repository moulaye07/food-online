const router = require('express').Router();
const { authentification } = require('../middleware/authentification.jwt');
const productController = require('../controllers/product.controller');
const upload = require('../middleware/upload.file');

router.post('/', upload.single('image'), productController.createProduct);
router.get('/', productController.readAllProducts);
router.get('/:idOfProduct', productController.readProduct);
// update Product and delete product
//router.put('/:idOfProduct', productController.updateProduct);
//router.delete('/:idOfProduct', productController.deleteProduct);

module.exports = router;