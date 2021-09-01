const Orders = require("../db/models/orders.js");


class OrdersDAO {
    createOrder(orders_date, user_id) {
        return new Orders({
            orders_date,
            user_id
        }).save()
    }

    getOrders() {
        return Orders.find()
        .populate({ path: 'user_id', select: 'name' })
    }

    getOneOrder(id) {
        return Orders.findById(id)
        .populate({ path: 'user_id', select: 'name' })
    }

    updateOrder(id, orders_date, user_id) {
        return Orders.findOneAndUpdate(
            {_id: id},
            {
                $set: {orders_date, user_id}
            },
            {new: true}
            );
    }
    deleteOrder(id) {
        return Orders.query()
            .findById(id)
            .for([id])
            .delete()


    }
}

module.exports = new OrdersDAO()
