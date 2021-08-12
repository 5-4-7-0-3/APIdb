const express = require('express');
const controllers = require('../controller');


const router = express.Router();



router.post('/', controllers.salesController.createSales)
router.get('/', controllers.salesController.getSales)
router.get('/:id', controllers.salesController.getOneSale)
router.put('/:id', controllers.salesController.updateSale)
router.delete('/:id', controllers.salesController.deleteSale)

module.exports = router;