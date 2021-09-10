import { Sales } from "../db/models/sales";

class SalesDAO {
  createSales(product_id, order_id, quantity) {
    return new Sales({
      product_id,
      order_id,
      quantity
    }).save()
  }

  getSales() {
    return Sales.find()
      .populate({ path: 'product_id', select: 'description' })
      .populate({ path: 'order_id', select: 'orders_date' })
  }

  getOneSale(id) {
    return Sales.findById(id)
      .populate({ path: 'product_id', select: 'description' })
      .populate({ path: 'order_id', select: 'orders_date' })
  }

  updateSale(id, quantity) {
    return Sales.findOneAndUpdate(
      { _id: id },
      {
        $set: { quantity }
      },
      { new: true }
    );
  }
  deleteSale(id) {
    return Sales.deleteOne({ id })


  }
}

const salesDAO = new SalesDAO()

export {salesDAO}
