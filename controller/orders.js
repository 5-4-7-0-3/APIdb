
class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService
    }
    async createOrder(req, res) {
        try {
            const {orders_date, user_id} = req.body
            const newOrder = await this.ordersService.createOrder(orders_date, user_id)
            res.json(newOrder)

        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }
    async getOrders(req, res) {
        try {
            const order = await this.ordersService.getOrders();
            res.json(order);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async getOneOrder(req, res) {
        try {
            const oneOrder = await this.ordersService.getOneOrder(req.params.id);
            res.json(oneOrder);
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async updateOrder(req, res) {
        try {
            const {orders_date, user_id} = req.body
            const updateOrder = await this.ordersService.updateOrder(req.params.id, orders_date, user_id)
            res.json(updateOrder)
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async deleteOrder(req, res) {
        try {
            const deleteOrder = await this.ordersService.deleteOrder(req.params.id)
            res.json(deleteOrder)
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = OrdersController