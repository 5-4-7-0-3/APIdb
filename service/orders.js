

class OrdersService {
    constructor(ordersDAO) {
        this.ordersDAO = ordersDAO
    }
    createOrder( orders_date, user_id) {
        return this.ordersDAO.createOrder( orders_date, user_id);
    }

    getOrders() {
        return this.ordersDAO.ordersDAO.getOrders();
    }

    getOneOrder(id) {
        return this.ordersDAO.ordersDAO.getOneOrder(id);
    }

    updateOrder(id,  orders_date, user_id) {
        return this.ordersDAO.ordersDAO.updateOrder(id,  orders_date, user_id);
    }
    deleteOrder(id) {
        return this.ordersDAO.ordersDAO.deleteOrder(id);
    }
}
module.exports = OrdersService