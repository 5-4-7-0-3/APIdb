const express = require('express');
const controllers = require('../controller');


const router = express.Router();



router.post('/', controllers.salesController.createSales.bind(controllers.salesController))
router.get('/', controllers.salesController.getSales.bind(controllers.salesController))
router.get('/:id', controllers.salesController.getOneSale.bind(controllers.salesController))
router.put('/:id', controllers.salesController.updateSale.bind(controllers.salesController))
router.delete('/:id', controllers.salesController.deleteSale.bind(controllers.salesController))

module.exports = router;