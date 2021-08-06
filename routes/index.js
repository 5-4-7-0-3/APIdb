
const express = require('express');
const Controller = require('../controller/controller.js');


const router = express.Router();

router.post('/user', Controller.User.createUser);
router.get('/user', Controller.User.getUsers);
router.get('/user/:id', Controller.User.getOneUser);
router.put('/user/:id', Controller.User.updateUser);
router.delete('/user/:id', Controller.User.deleteUser);

router.post('/productCategory', Controller.ProductCategory.createProductCategory);
router.get('/productCategories', Controller.ProductCategory.getCategories);
router.get('/productCategory/:id', Controller.ProductCategory.getOneCategory);
router.put('/productCategory/:id', Controller.ProductCategory.updateCategory);
// router.delete('/productCategory/:id', Controller.ProductCategory.deleteProductCategory);


router.post('/product', Controller.Product.createProduct);
router.get('/product', Controller.Product.getProduct);
router.get('/product/:id', Controller.Product.getOneProduct);
router.put('/product/:id', Controller.Product.updateProduct);
// router.delete('/product/:id', Controller.Product.deleteProduct);


router.post('/orders', Controller.Orders.createOrder);
router.get('/orders', Controller.Orders.getOrders);
router.get('/order/:id', Controller.Orders.getOneOrder);
router.put('/orders/:id', Controller.Orders.updateOrder);
// router.delete('/orders/:id', Controller.Orders.deleteOrders);

router.post('/sales', Controller.Sales.createSales)
router.get('/sales', Controller.Sales.getSales)
router.get('/sale/:id', Controller.Sales.getOneSale)
router.put('/sales/:id', Controller.Sales.updateSale)
// router.delete('/sales/:id', Controller.Sales.deleteSales)

module.exports = router;