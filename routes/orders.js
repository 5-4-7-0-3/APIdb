const express = require('express');
const controllers = require('../controller');


const router = express.Router();


router.post('/', controllers.ordersController.createOrder.bind(controllers.ordersController));
router.get('/', controllers.ordersController.getOrders.bind(controllers.ordersController));
router.get('/:id', controllers.ordersController.getOneOrder.bind(controllers.ordersController));
router.put('/:id', controllers.ordersController.updateOrder.bind(controllers.ordersController));
router.delete('/:id', controllers.ordersController.deleteOrder.bind(controllers.ordersController));


module.exports = router;