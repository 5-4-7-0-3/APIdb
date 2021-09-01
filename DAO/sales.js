const Sales = require("../db/models/sales.js");

class SalesDAO {
  createSales(product_id, order_id, quantity) {
    return new Sales({
      product_id,
      order_id,
      quantity
    }).save()
  }

    getSales() {
        return Sales.find();
    }

    getOneSale(id) {
        return Sales.findById(id);
    }

    updateSale(id, product_id, order_id, quantity) {
        console.log(product_id, order_id, quantity);
        return Sales.findOneAndUpdate(
            {_id: id},
            {
                $set: { quantity}
            },
      { new: true }
    );
  }
  deleteSale(id) {
        return Sales.deleteOne({id})


    }
}

module.exports = new SalesDAO()