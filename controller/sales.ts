
class SalesController {
    salesService: any;
    constructor(salesService) {
        this.salesService = salesService
    }
    async createSales(req, res) {
            const {product_id, order_id, quantity} = req.body
            const newSale = await this.salesService.createSales(product_id, order_id, quantity)
            res.json(newSale)
    }
    async getSales(req, res) {
            const sale = await this.salesService.getSales();
            res.json(sale);
    }
    async getOneSale(req, res) {
            const oneSale = await this.salesService.getOneSale(req.params.id);
            res.json(oneSale);
    }
    async updateSale(req, res) {
            const {product_id, order_id, quantity} = req.body
            const updateSale = await this.salesService.updateSale(req.params.id, product_id, order_id, quantity)
            res.json(updateSale)
    }
    async deleteSale(req, res) {
            const deleteSale = await this.salesService.deleteSale(req.params.id)
            res.json(deleteSale)
        }
}

export {SalesController}
