

class OrdersService {
    ordersDAO: any;
    constructor(ordersDAO) {
        this.ordersDAO = ordersDAO
    }
    createOrder( orders_date, user_id) {
        return this.ordersDAO.createOrder( orders_date, user_id);
    }

    getOrders() {
        return this.ordersDAO.getOrders();
    }

    getOneOrder(id) {
        return this.ordersDAO.getOneOrder(id);
    }

    updateOrder(id,  orders_date, user_id) {
        return this.ordersDAO.updateOrder(id,  orders_date, user_id);
    }
    deleteOrder(id) {
        return this.ordersDAO.deleteOrder(id);
    }
}
export {OrdersService}
