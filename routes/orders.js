const express = require('express');
const controllers = require('../controller');


const router = express.Router();



router.post('/', controllers.ordersController.createOrder);
router.get('/', controllers.ordersController.getOrders);
router.get('/:id', controllers.ordersController.getOneOrder);
router.put('/:id', controllers.ordersController.updateOrder);
router.delete('/:id', controllers.ordersController.deleteOrder);


module.exports = router;