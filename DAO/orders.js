const Orders = require("../db/models/orders.js");


class OrdersDAO {
    createOrder(orders_date, user_id) {
        return Orders.query().insert({
            orders_date,
            user_id
        })
    }

    getOrders() {
        return Orders.query();
    }

    getOneOrder(id) {
        return Orders.query().findById(id);
    }

    updateOrder(id, orders_date, user_id) {
        return Orders.query()
            .findById(id)
            .patch({
                orders_date,
                user_id
            });
    }
    deleteOrder(id) {
        return Orders.query()
            .findById(id)
            .for([id])
            .delete()


    }
}

module.exports = new OrdersDAO()