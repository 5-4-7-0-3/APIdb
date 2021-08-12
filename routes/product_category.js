const express = require('express');
const controllers = require('../controller');


const router = express.Router();


router.post('/', controllers.productCategoryController.createProductCategory);
router.get('/', controllers.productCategoryController.getCategories);
router.get('/:id', controllers.productCategoryController.getOneCategory);
router.put('/:id', controllers.productCategoryController.updateCategory);
router.delete('/:id', controllers.productCategoryController.deleteCategory);

module.exports = router;