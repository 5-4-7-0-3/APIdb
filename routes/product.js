const express = require('express');
const controllers = require('../controller');


const router = express.Router();


router.post('/', controllers.productController.createProduct);
router.get('/', controllers.productController.getProduct);
router.get('/:id', controllers.productController.getOneProduct);
router.put('/:id', controllers.productController.updateProduct);
router.delete('/:id', controllers.productController.deleteProduct);


module.exports = router;