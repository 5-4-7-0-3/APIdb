const Sales = require("../db/models/sales.js");

class SalesDAO {
    createSales(product_id, order_id, quantity) {
        return Sales.query().insert({
            product_id,
            order_id,
            quantity
        })
    }

    getSales() {
        return Sales.query();
    }

    getOneSale(id) {
        return Sales.query().findById(id);
    }

    updateSale(id, product_id, order_id, quantity) {
        return Sales.query()
            .findById(id)
            .patch({
                product_id,
                order_id,
                quantity: quantity
            });
    }
    deleteSale(id) {
        return Sales.query()
            .findById(id)
            .for([id])
            .delete()


    }
}

module.exports = new SalesDAO()