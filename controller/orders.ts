
class OrdersController {
    ordersService: any;
    constructor(ordersService) {
        this.ordersService = ordersService
    }
    async createOrder(req, res) {
            const {orders_date, user_id} = req.body
            const newOrder = await this.ordersService.createOrder(orders_date, user_id)
            res.json(newOrder)
    }
    async getOrders(req, res) {
            const order = await this.ordersService.getOrders();
            res.json(order);
    }
    async getOneOrder(req, res) {
            const oneOrder = await this.ordersService.getOneOrder(req.params.id);
            res.json(oneOrder);
    }
    async updateOrder(req, res) {
            const {orders_date, user_id} = req.body
            const updateOrder = await this.ordersService.updateOrder(req.params.id, orders_date, user_id)
            res.json(updateOrder)
    }
    async deleteOrder(req, res) {
            const deleteOrder = await this.ordersService.deleteOrder(req.params.id)
            res.json(deleteOrder)
        }
}

export {OrdersController}
